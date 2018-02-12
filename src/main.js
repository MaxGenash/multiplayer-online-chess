var Dev = true
import Vue from 'vue'
import App from './App'
import Resource from 'vue-resource'
import Router from 'vue-router'
import VueI18n from 'vue-i18n'
import VueMaterialComponents from 'vue-material-components'
import Moment from 'moment'
import Home from 'components/home/'
import VueCharts from 'vue-charts'

import UserLoguin from 'components/user/loguin/'
import UserAccount from 'components/user/account/'
import UserData from 'components/user/account/data'
import Puzzle from 'components/puzzles/'
import '../static/style.css'
import '../static/base.css'
import '../static/desktop.css'
import '../static/theme.css'
import '../static/css/google-icons/icon.css'
import '../static/css/materialize.min.css'
import 'vue-material-components/dist/vue-material-components.css'
import '../static/css/myStyles.css'
import '../static/css/animate.min.css'

import Storage from './services/lstorage'
import UserService from './services/user'
import VueSocketIO from 'vue-socket.io'
import SocketIO from 'socket.io-client'
import locale from './services/locales'
Vue.use(VueMaterialComponents)
Vue.use(Router)
Vue.use(Resource)
Vue.use(VueCharts)
Vue.http.interceptors.push((request, next) => {
  var token = Storage.get('token')
  if (token) {
    request.headers['Authorization'] = 'Bearer ' + token
  }
  next((response) => {
    if (response.status === 401 || response.status === 403) {
      UserService.logout()
    }
  })
})
Storage.setPrefix('chessVuex')
UserService.init()
Vue.http.options.root = "http://45.76.35.4:3311"
//Vue.http.options.root = "http://localhost:3311"

Vue.filter('timeBoard', (s) => {
  var min = parseInt(s / 60)
  var segs = s % 60
  return ('0' + min).slice(-2) + ':' + ('0' + segs).slice(-2)
})
Vue.filter('moment', (date, format) => {
  return Moment(date).format(format)
})
var dirServer = Dev ? 'http://' + window.location.hostname + ':3311' : window.location.origin
dirServer = Storage.set('serverDir', dirServer)
if (Storage.get('token')) {
  var socket = SocketIO.connect(Storage.get('serverDir'), { query: 'token=' + 'Bearer ' + Storage.get('token') })
  Vue.use(VueSocketIO, socket)
}

Vue.use(VueI18n)

const lan = Storage.get('lenguaje', 'ru')
const locales = locale.i18n
Vue.config.lang = lan

Object.keys(locales).forEach((lang) => {
  Vue.locale(lang, locales[lang])
})
Vue.transition('entern', {
  enterClass: 'pulse',
  leaveClass: 'invisible'
})

var router = new Router()

router.map({
  '/home': {
    name: 'home',
    component: Home
  },
  '/user': {
    name: 'user',
    component: {
      template: '<div class="row"><router-view></router-view></div>'
    },
    subRoutes: {
      '/:username': {
        component: UserAccount,
        name: 'user',
        subRoutes: {
          '/': {
            name: 'userdata',
            component: UserData
          },
          '/activity': {
            name: 'activity',
            component (resolve) {
              require(['./components/user/account/activity'], resolve)
            }
          },
          '/edit': {
            name: 'edituser',
            component (resolve) {
              require(['./components/user/register/'], resolve)
            }
          }
        }
      },
      '/register': {
        name: 'register',
        component (resolve) {
          require(['./components/user/register/'], resolve)
        }
      },
      '/login': {
        name: 'login',
        component: UserLoguin
      }
    }
  },
  '/game': {
    name: 'game',
    component (resolve) {
      require(['./components/game/'], resolve)
    }
  },
  '/visor/:idBoard/:skip/:u1/:u2': {
    name: 'visor',
    component (resolve) {
      require(['./components/boardVisor/'], resolve)
    }
  },
  '/puzzle': {
    name: 'puzzle',
    component: Puzzle
  }
})

router.beforeEach(function () {
  window.scrollTo(0, 0)
})

router.redirect({
  '*': '/home'
})

router.start(App, '#app')
