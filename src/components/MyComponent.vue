<template>
    <div>
      <p>ID: {{ item.id }}</p>
      <p>Name: {{ item.name }}</p>
      <p>Active: {{ item.active }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      item: {
        type: Object,
        required: true
      }
    }
  }
  </script>
  
  <style scoped>
  /* Add some CSS if needed */
  </style>
  