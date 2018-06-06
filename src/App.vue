<template>
    <div>
        <md-dropdown-list>
            <md-dropdown-item v-for="len in lenguajes" closing @click="changeLenguaje(len.value)">{{ len.label }}
            </md-dropdown-item>
        </md-dropdown-list>
        <md-navbar left nav-class="grey darken-1">
            <md-nav-item v-link="{name: 'home',activeClass: 'active'}">{{ $t("home.title") }}</md-nav-item>

            <md-nav-item v-link="{name: 'game',activeClass: 'active'}">{{ $t("game.title") }}</md-nav-item>
            <md-nav-item @click="showInvitesGame()" v-if="user.user && $route.name!=='game'">{{ $t("invites.title") }}
            </md-nav-item>
            <!--md-nav-item v-link="{name: 'visor',activeClass: 'active', params: board.boardParms}" v-if="user.user">{{
                $t("visor.title") }}
            </md-nav-item-->
            <!--<md-nav-item v-link="{name: 'puzzle',activeClass: 'active'}" v-if="user.user">{{ $t("puzzles.title") }}-->
            <!--</md-nav-item>-->
            <md-nav-item v-link="{name: 'user',activeClass: 'active', params: {username: user.user.username}}"
                         v-if="user.user">{{ $t("user.title") }}
            </md-nav-item>
            <md-nav-item v-link="{name: 'login',activeClass: 'active'}" v-if="!user.user">{{ $t("user.login") }}
            </md-nav-item>
            <md-nav-item @click="logout()" v-if="user.user">{{ $t("user.logout") }}</md-nav-item>

            <md-nav-item href="javascript:void(0)" @click="openMenu($event)">
                {{lenguajeName}}
                <md-icon right>arrow_drop_down</md-icon>
            </md-nav-item>
        </md-navbar>
        <div>
            <user-invites></user-invites>
        </div>
        <div class="row" style="padding: 20px">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
  import store from './vuex/store'
  import UserService from './services/user'
  import Board from './services/board'
  import UserInvites from './components/home/invites'
  import Lenguajes from './services/lenguajes'
  import Store from './services/lstorage'
  export default {
    data () {
      return {
        closeResult: '',
        user: UserService,
        board: Board,
        lenguajeName: 'Русский',
        lenguaje: Store.get('lenguaje', 'ru'),
        lenguajes: Lenguajes.lenguajes
      }
    },
    methods: {
      getLenguajeName () {
        for (var i in this.lenguajes) {
          if (this.lenguajes[i].value === this.lenguaje) {
            this.lenguajeName = this.lenguajes[i].label
          }
        }
      },
      changeLenguaje (len) {
        if (this.lenguaje !== len) {
          Store.set('lenguaje', len);
          window.location.reload()
        }
      },
      openMenu (event) {
        this.$broadcast('dropdown-list::open', event)
      },
      openModal () {
        this.$broadcast('modal::open', 'aboutModal')
      },
      showInvitesGame () {
        this.$broadcast('modal::open', 'invitesGame')
      },
      logout () {
        UserService.logout()
      },
      testUser (next) {
        if (Store.get('token')) {
          UserService.testUser(this, {}).then(function (response) {
            UserService.setUser(response.data);
            next()
          }, function (response) {
            // next()
            this.error = response.data
          })
        }
      },
      userLoguinSocket () {
        if (this.user.user_acces()) {
          const data = {
            c: 'chat',
            f: 'username',
            data: {
              user: UserService.getUser()
            }
          };
          setTimeout(function () {
            this.$socket.emit('event', data, function (...callbacks) {
              // console.log(callbacks[1])
            })
          }.bind(this), 100)
        }
      }
    },
    events: {
      userLoguin (data) {
        this.userLoguinSocket()
      }
    },
    sockets: {
      event (data) {
        this.$broadcast(data.event, data.data ? data.data : data)
      }
    },
    created () {
      this.testUser(function () {
        this.userLoguinSocket()
      }.bind(this));
      this.getLenguajeName()
    },
    components: {
      UserInvites
    },
    store
  }
</script>
