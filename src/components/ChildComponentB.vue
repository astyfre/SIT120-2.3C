<template>
    <div>
      <h2>Child Component B</h2>
      <slot :slotMessage="slotMessage"></slot><!-- uses slots -->
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        slotMessage: 'Message from Slot'
      };
    }
  }
  </script>
  
  <style scoped>
  /* Add some CSS if needed */
  </style>
  