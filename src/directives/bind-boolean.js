// removed DirectiveOption because priority is not boolean
let bindBoolean = {
  priority: 850,
  update: function (value) {
    let arg = this.arg;
    if (value) {
      this.el.setAttribute(arg, arg)
    } else {
      this.el.removeAttribute(arg)
    }
  }
};
export default bindBoolean
