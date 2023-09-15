<template>
    <div>
      <h1>{{ greeting }}</h1> <!--Interpolated texted -->
      <p v-html="rawHTML"></p> <!--RawHTMl using v-html, var defined in script-->
      <div v-bind:id="dynamicId"></div> 
      <p>{{ 2 + 2 }}</p> <!--Numeric javascript expression inside syntax-->
      <button @click="sayHello">Say Hello</button> <!--Method calls sayHello on click to create an alert-->
  
      <p>Reactive Value: {{ reactiveValue }}</p> <!--Reactive value increments with button press-->
      <button @click="incrementReactiveValue">Increment Reactive Value</button>
  
      <p>Computed Property (from reactive value): {{ computedValue }}</p><!--Computed property derived from reactiveValue-->
  
      <div v-bind:class="classObject">Class Binding</div> <!--Binding html class-->
      <div v-bind:style="styleObject">Style Binding</div> <!--Binding inline styles-->
      <!-- <div :class="{ active: isActive, 'text-danger': isDanger }">Conditional Class Binding</div>
      <div :style="{ color: textColor, fontSize: fontSize + 'px' }">Dynamic Style Binding</div> -->
  
      <ul>
        <li v-for="(item, index) in objectData" :key="item.id">{{ item.name }} (Index: {{ index }})</li><!--v-for an object-->
        <li v-for="n in 5" :key="n">Range: {{ n }}</li> <!--v-for a range-->
        <template v-for="item in objectData" :key="item.id"> <!--v-for on <template>z-->
          <li :key="item.id" v-if="item.active">{{ item.name }}</li> <!--v for with v-if-->
        </template>
        <MyComponent v-for="item in objectData" :key="item.id" :item="item" /><!--v-for with a component-->
      </ul>
      </div>
      <ParentComponent></ParentComponent>
      <div>
  </div>

  </template>
  
  <script setup>
  import { ref, computed, watch } from 'vue'; //reactivty fundamentals used throughouty the script setup such as for greeting and dynamic id
  import MyComponent from '@/components/MyComponent.vue'; // Adjust the path as per your actual project structure
  import ParentComponent from '@/components/ParentComponent.vue'; // Adjust the path as per your actual project structure

  
  const greeting = ref('Hello, Vue!');
  const rawHTML = '<span style="color: red;">This is raw HTML</span>';
  const dynamicId = ref('myElement');
  
  const sayHello = () => {
    alert('Hello!');
  };
  
  const reactiveValue = ref(5);
  const incrementReactiveValue = () => {
    reactiveValue.value++;
  };
  
// Watch reactiveValue for changes
watch(reactiveValue, (newValue, oldValue) => {
  console.log(`reactiveValue changed from ${oldValue} to ${newValue}`);
});
  const computedValue = computed(() => reactiveValue.value * 2);
  
  const isActive = ref(false);
  const isDanger = ref(false);
  const classObject = computed(() => ({ active: isActive.value, 'text-danger': isDanger.value }));
  const textColor = ref('blue');
  const fontSize = ref(20);
  const styleObject = computed(() => ({ color: textColor.value, fontSize: fontSize.value + 'px' }));
  
  const objectData = ref([
    { id: 1, name: 'Item 1', active: true },
    { id: 2, name: 'Item 2', active: false },
    { id: 3, name: 'Item 3', active: true }
  ]);
  


  </script>
  
  <style scoped>
  /* Add some CSS if needed */
  </style>
  