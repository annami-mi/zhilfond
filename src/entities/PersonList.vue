<template>
  <ul class="person-list">
    <li v-if="isLoading" class="person-list__item--skeleton"></li>
    <template v-if="persons && persons.length && !isLoading">
      <PersonListCard
          v-for="person in persons" :key="person.id"
          :person="person"
          @click="selectPerson(person)"
      />
    </template>
  </ul>
</template>

<script>
import PersonListCard from "@/entities/PersonListCard";
import {mapMutations} from "vuex";
export default {
  name: "PersonList",
  components: {PersonListCard},
  props:{
    isLoading:{
      type: Boolean,
      default(){
        return false
      }
    },
    persons:{
      type: Array,
      require: false
    }
  },
  methods:{
    ...mapMutations(['storeUpdateSelectPerson']),
    selectPerson: function (obj){
      this.storeUpdateSelectPerson(obj)
      this.$router.push({path: `/person/${obj.id}`})
    }
  }
}
</script>

<style lang="scss">
.person-list__item--skeleton{
  height: 70px;
  width: 100%;
  border-radius: 10px;
  background-color: $neutral-300;
  background-image: linear-gradient(110deg, $neutral-300 8%, #fff 18%, $neutral-300 33%);
  background-size: 200% 100%;
  animation: 1.5s loading linear infinite;
  list-style: none;
}
@keyframes loading{
  to {
    background-position-x: -200%
  }
}
</style>