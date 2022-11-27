
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    // requests from the client to '/api/states'
    //will be sent to 'http://127.0.0.1:3000/api/states'
    proxy: 'http://127.0.0.1:3000'
  }
})