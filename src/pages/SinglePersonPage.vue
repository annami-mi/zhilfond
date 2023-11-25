<template>
<div class="single-person">

  <LoaderBase v-if="isLoading"/>

  <template v-else>
    <img src="@/shared/assets/image/slug.jpg" :alt="person.name" class="single-person__image"/>
    <div class="single-person__content">
      <h1 class="single-person__title">{{ person.name }}</h1>
      <p class="single-person__p"><span class="single-person__p__highlight">email: </span>{{ person.website }}</p>
      <p class="single-person__p"><span class="single-person__p__highlight">phone: </span>{{ person.website }}</p>
      <div class="single-person__section">
        <span class="single-person__section__title">О себе: </span>
        <p class="single-person__p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </div>
  </template>
</div>
</template>

<script>
import {apiGetPersonList} from "@/shared/api/methods";
import LoaderBase from "@/shared/ui/LoaderBase";

export default {
  name: "SinglePersonPage",
  components: {LoaderBase},
  data(){
    return{
      person: {},
      isLoading: false
    }
  },
  computed:{
    id(){
      return this.$route.params.id
    }
  },
  mounted() {
    this.getPerson()
  },
  watch:{
    id(){
      this.getPerson()
    }
  },
  methods:{
    getPerson: async function (){
      this.isLoading = true
      const response = await apiGetPersonList(this.id)
      this.person = response.result[0]
      this.isLoading = false
    },
  }
}
</script>

<style lang="scss" scoped>
.single-person{
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  &__image{
    width: 424px;
    height: 286px;
    border: 1px solid $neutral-200;
    margin-right: 62px;
    display: block;
  }

  &__title{
    @include text-headline;
    color: #000;
    margin-bottom: 10px;
  }

  &__p{
    @include text-secondary;
    margin: 10px 0;
    &__highlight{
      @include text-headline;
      font-size: inherit;
    }
  }

  &__section{
    margin: 20px 0;
   &__title{
     @include text-headline;
      margin-bottom: 25px;
   }
  }
}
</style>