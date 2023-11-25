const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
})
module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@/shared/assets/style/variables.scss"; @import "@/shared/assets/style/mixins.scss";`
      },
    }
  }
}

