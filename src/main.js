// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'rxjs'

import store from './store'
import Vuex, { Provider } from './store/vue-redux'

Vue.config.productionTip = false

Vue.use(Vuex)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render () {
    return (
      <Provider store={ store }>
        <App />
      </Provider>
    )
  },
  components: { Provider, App }
})
