<template>
<div class="header">
  <div class="wrap header__container">
    <router-link :to="{path: '/'}" class="logo">Жилфонд</router-link>
    <div class="user-name">Пользователь</div>
  </div>
</div>
</template>

<script>
export default {
  name: "TheHeader"
}
</script>

<style lang="scss" scoped>
.user-name{
  color: #333;
  font-size: 16px;
  font-weight: 400;
}

.header__container{
  padding-top: 50px;
  padding-bottom: 26px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.logo{
  text-decoration: none;
  color: #E31F24;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
</style>