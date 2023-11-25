<template>
  <div class="main-page">
    <div class="main-page__description">Выберите сотрудника, чтобы посмотреть его профиль</div>
  </div>
</template>

<script>
export default {
  name: "MainPage"
}
</script>

<style lang="scss" scoped>
.main-page{
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &__description{
    @include text-secondary;
    text-align: center;
  }
}
</style>