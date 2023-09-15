<template>
    <div>
      <h2>Child Component A</h2>
      <button @click="sendMessage">Send Message to Parent</button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      message: String //uses props
    },
    methods: {
      sendMessage() {
        this.$emit('child-click', this.message);//uses $emit event
      }
    }
  }
  </script>
  
  <style scoped>
  /* Add some CSS if needed */
  </style>
  