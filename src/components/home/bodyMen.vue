<template>
  <div class="col popover {{ [men.send === user.username  ? 'left' : 'right'] }}" v-for="men in mens">
    <div class="arrow"></div>
    <h3 class="popover-title">
      {{ men.send }}

      <span style="padding-left:20px">{{ men.created | moment 'LLL'}}</span></h3>
    <div class="popover-content menText">
      <p v-if="men.type==='text'"> {{ men.body }}</p>
      <div v-if="men.type==='file'">
        <img v-if="isImage(men.body)" @click="showImage()" class="col s8 m8 l8" v-bind:src="imageUrl(men.body.name)"
             alt=""
        >
        <md-button v-else class="waves-effect waves-light" @click="openInNewTab(men.body.name)">{{men.body.name}}
        </md-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BodyMen',
  props: {
    mens: {
      type: Array
    },
    dirServer: {
      type: String
    },
    user: {
      type: Object
    }
  },
  data () {
    return {
      some: ''
    }
  },
  methods: {
    openInNewTab (name) {
      var win = window.open(this.dirServer + '/uploads/' + name, '_blank')
      win.focus()
    },
    imageUrl (name) {
      return this.dirServer + '/uploads/' + name
    },
    isImage (file) {
      var type = '|' + file.type.slice(file.type.lastIndexOf('/') + 1) + '|'
      return '|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1
    }
  }
}
</script>