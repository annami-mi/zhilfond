<template>
  <li class="person-list__item card-person">
    <img class="card-person__image" src="@/shared/assets/image/slug.jpg" :alt="person.username"/>
    <div class="card-person__content">
      <div class="card-person__title">{{person.username}}</div>
      <div class="card-person__description">{{person.website}}</div>
    </div>
  </li>
</template>

<script>
export default {
  name: "PersonListCard",
  props:{
    person: {
      type: Object
    }
  }
}
</script>

<style lang="scss">
.card-person{
  border-radius: 10px;
  background: $neutral-100;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.10);
  display: flex;
  justify-content: flex-start;
  list-style: none;
  margin-bottom: 18px;
  overflow: hidden;
  cursor: pointer;

  &__image{
    width: 70px;
    height: 70px;
    object-fit: cover;
  }

  &:hover &__content{
    background-color: $neutral-200;
  }

  &__content{
    width: 100%;
    transition: 100ms;
    padding: 15px;
    border-left: 1px solid $neutral-200;
  }
}
</style>