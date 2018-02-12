<script>
import UserService from '../../../services/user'
import { setUser } from '../../../vuex/actions'
export default {
  template: require('./template.html'),
  data () {
    var _user = {
      age: null,
      sexo: 'male',
      password: '',
      passwordRepit: '',
      firstName: '',
      lastName: '',
      username: ''
    }
    return {
      editPassword: true,
      formValid: false,
      user: UserService.getUser() || _user,
      error: '',
      formValidMsg: {
        password: {
          success: 'Ok',
          error: 'Придумайте пароль'
        },
        passwordRepit: {
          success: 'Ок',
          error: 'Пароли не совпадают'
        },
        user: {
          success: 'Ок',
          error: 'Пароль должен быть длиннее 4 сиволов'
        }
      }
    }
  },
  vuex: {
    actions: {
      setUser
    }
  },
  methods: {
    validPassword () {
      if (!this.editPassword) {
        return true
      }
      if (this.user.password.length < 5) {
        this.formValidMsg.errorMsgPasswrd = 'Пароль слишком короткий'
        return false
      }
      return true
    },
    repitPasswordValidate () {
      if (!this.editPassword) {
        return true
      }
      if (this.user.password !== this.user.passwordRepit) {
        return false
      }
      return true
    },
    validUser () {
      if (this.user.username.length < 4 || this.user.username.length > 10) {
        return false
      }
      return true
    },
    registerUser () {
      if (!this.validUser() || !this.repitPasswordValidate() || !this.validPassword()) {
        return
      }
      this.error = 'process'
      UserService.signin(this, this.user).then(function (response) {
        this.error = 'redirect'
        if (this.user._id) {
          window.location.reload()
        } else {
          this.$route.router.go(this.user._id ? 'user/' + this.user.username : '/')
        }
      }, function (response) {
        for (var i in response.data.errors) {
          this.error = response.data.errors[i].message
        }
      })
    }
  },
  created () {
    this.user.password = ''
  }
}
</script>