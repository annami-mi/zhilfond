<template>
  <TheHeader/>
  <div class="wrap container">
    <TheSidebar/>
    <div class="view">
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </div>
    </div>
</template>

<script>

import TheHeader from "@/widgets/TheHeader";
import TheSidebar from "@/widgets/TheSidebar";
export default {
  name: 'App',
  components: {TheSidebar, TheHeader},
}
</script>

<style lang="scss">
@import "~@/shared/assets/style/main.scss";

.container{
  display: flex;
  border-radius: 10px;
  background: $neutral-400;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.10);
}

.view{
  flex: 1;
  padding: 30px 20px;
  min-height: 495px;
}
</style>
