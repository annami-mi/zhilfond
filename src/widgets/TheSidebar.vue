<template>
  <div class="sidebar">
    <SearchPerson/>
  </div>
</template>

<script>
import SearchPerson from "@/features/SearchPerson";
export default {
  name: "TheSidebar",
  components: {SearchPerson},
}
</script>

<style lang="scss" scoped>
.sidebar {
  width: 296px;
  border-right: 1px solid $neutral-300;
  padding: 27px 20px;
  min-height: 100%;
}
</style>