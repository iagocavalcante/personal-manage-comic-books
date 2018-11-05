export const notifications = {
  methods: {
    showNotification: (title, text, color, vm) => {
      vm.$vs.notify({
        title: title,
        text: text,
        color: color
      })
    }
  }
}