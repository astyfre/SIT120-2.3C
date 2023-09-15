<template>
    <div>
      <h1>{{ title }}</h1>
      <ChildComponentA :message="messageA" @child-click="handleChildClick" />
      <ChildComponentB>
        <!-- uses slots -->
        <template v-slot:default="slotProps"> 
          <button @click="handleSlotClick(slotProps)">Click in Slot</button>
        </template>
      </ChildComponentB>
    </div>
  </template>
  
  <script>
  import ChildComponentA from './ChildComponentA.vue';
  import ChildComponentB from './ChildComponentB.vue';
  
  export default {
    components: {
      ChildComponentA,
      ChildComponentB
    },
    data() {
      return {
        title: 'Parent Component',
        messageA: 'Message from Parent'
      };
    },
    methods: {
      handleChildClick(message) {
        alert(`Received from Child A: ${message}`);
      },
      handleSlotClick(slotProps) {
        alert(`Received from Slot: ${slotProps.slotMessage}`);
      }
    }
  }
  </script>
  
  <style scoped>
  /* Add some CSS if needed */
  </style>
  