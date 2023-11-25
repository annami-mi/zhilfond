<template>
  <section class="search-person__section">
    <div class="search-person__headline">Поиск сотрудников</div>
    <InputBase placeholder="Введите Id или имя" @onInput="onInputSearch" class="sidebar__input"/>
  </section>

  <section class="search-person__section">
    <div v-if="!persons && !isLoading" class="search-person__description">Начните поиск <br> Для множественного поиска введите значения через запятую</div>
    <div v-else class="search-person__headline">Результаты</div>
    <div v-if="persons && !persons.length && !isLoading" class="search-person__description">Ничего не найдено</div>
    <PersonList :is-loading="isLoading" :persons="persons"/>
  </section>
</template>

<script>
import InputBase from "@/shared/ui/InputBase";
import {apiGetPersonList} from "@/shared/api/methods";
import {mapGetters, mapMutations} from "vuex";
import PersonList from "@/entities/PersonList";
export default {
  name: "SearchPerson",
  components: {PersonList, InputBase},
  data(){
    return{
      search: '',
      listId: [],
      listUsername: [],
      isLoading: false
    }
  },
  computed:{
    ...mapGetters(['storeGetPersonList', 'storeGetPersonAllList']),
    persons(){
      return this.storeGetPersonList
    },
  },
  watch:{
    search(){
      if(this.search){
        this.multiSearch()
        this.getPersonList()
      } else {
        this.storeUpdatePersonList(null)
      }
    },
  },
  methods:{
    ...mapMutations(['storeUpdatePersonList', 'storeUpdatePersonAllList']),

    onInputSearch: function (str){
      this.search = str
      if(!str){
        this.toMainPage()
      }
    },

    toMainPage: function() {
      this.$router.push({path:'/'})
    },

    // Сортирует значение в зависимости от того, что ввели (id или имя)
    multiSearch: function (){
      const search = this.search
      let arr = []
      const isMultiSearch = search.search(',') !== -1
      let listId = []
      let listUsername = []

      if(isMultiSearch) {
        arr = search.split(',')
      } else {
        arr =[search]
      }

      // сортировка
      for(let item of arr){
        const isNumber = item.match(/\d/g)
        isNumber ? listId.push(item.trim()) : listUsername.push(item.trim().toLowerCase())
      }

      this.listId = listId
      this.listUsername = listUsername
    },

    getPersonList: async function (){
      const usernames = this.listUsername
      let newArr = []
      this.isLoading = true // присвивает статус загрузки

      const response = await apiGetPersonList(this.listId)
      let list = response.result || []

      // запрашивает весь список сострудников
      // не очень хороший вариант на самом деле на каждый символ делать запрос всего списка,
      // можно складывать его в стор. я так и сделаю. но есть риски. если список на сервере обновиться в течении одной vue сессии,
      // то данные будут неакуальные. возможно имеет смысл сбрасывать стор, раз в несколько минут. вопрос на обсуждение
      if(usernames && usernames.length){

        const listFromStore = this.storeGetPersonAllList
        let listAll

        if(listFromStore){
          // есть в сторе
          listAll = listFromStore
        } else {
          // нет в сторе
          const responseAll = await apiGetPersonList()
          listAll = responseAll.result
          this.storeUpdatePersonAllList(listAll)
        }

        // фильтрует лист по ключу
        for(let username of usernames){
          const find = listAll.filter(item => item.username.toLowerCase().match(username.trim().toLowerCase()))

          if(usernames.length > 1){
            // значение в листе не одно
            newArr.push(...find)
          } else {
            newArr = find
          }
        }
      }

      // объединяет массив, если искали и по id
      let arr
      const hasListId = this.listId && this.listId.length
      hasListId ? arr = [...list, ...newArr] : arr = [...newArr]

      // удаляет дубли
      arr = arr.reduce((o, i) => {
        if (!o.find(v => v.id === i.id)) {
          o.push(i);
        }
        return o;
      }, []);

      this.storeUpdatePersonList(arr)
      this.isLoading = false
    }
  }
}
</script>

<style lang="scss" scoped>
.search-person{
  &__headline{
    @include text-headline;
    margin-bottom: 10px;
  }
  &__section{
    margin-bottom: 22px;
  }
  &__description{
    @include text-secondary
  }
}
</style>