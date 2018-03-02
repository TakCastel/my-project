import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

export default () => {
  Vue.use(Vuetify, {
    theme: {
      primary: '#f45042',
      secondary: '#f49542',
      accent: '#82B1FF',
      error: '#FF5252',
      info: '#2196F3',
      success: '#4CAF50',
      warning: '#FFC107'
    }
  })
}
