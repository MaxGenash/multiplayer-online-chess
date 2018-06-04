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
    };
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
          error: 'Введите имя латинскими символами'
        },
        email: {
          success: 'Ок',
          error: 'Введите Email-адрес'
        }
      }
    }
  },
  vuex: {
    actions: {
      setUser
    }
  },
  computed: {
    validPassword () {
      if (!this.user.password) return null;
      if (!this.editPassword) {
        return true
      }
      if (this.user.password.length < 5) {
        this.formValidMsg.errorMsgPasswrd = 'Пароль слишком короткий';
        return false
      }
      return true
    },
    repitPasswordValidate () {
      if (!this.user.password) return null;
      if (!this.editPassword) {
        return true
      }
      if (this.user.password !== this.user.passwordRepit) {
        return false
      }
      return true
    },
    validUser () {
      if (!this.user.username) return null;
      if (this.user.username.length < 4 || this.user.username.length > 20) {
        return false
      }
      return true
    },
    validEmail () {
      if (!this.user.email) return null;
      if (this.user.email.length < 4 || this.user.email.length > 20) {
        return false
      }
      return true
    }
  },
  methods: {
    registerUser () {
      if (!this.validUser || !this.validEmail || !this.repitPasswordValidate || !this.validPassword) {
        return
      }
      this.error = 'process';
      UserService.signin(this, this.user).then(function (response) {
        this.error = 'redirect';
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
