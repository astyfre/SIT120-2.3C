<template>
      <!-- form input binddings -->
      <form @submit="submitForm"> 
      <div>
        <label for="name">Name:</label>
        <input type="text" v-model="textInput" />
      </div>
  
      <div>
        <label>
          <input type="checkbox" v-model="checkboxValue" />
          Checkbox 1 (v-model modifier: {{ checkboxValue }})
        </label>
      </div>

  
      <div>
        <label>
          <input type="radio" v-model="radioValue" value="option1" />
          Option 1 (v-model modifier: {{ radioValue }})
        </label>
      </div>
  
      <div>
        <label>
          <input type="radio" v-model="radioValue" value="option2" />
          Option 2 (v-model modifier: {{ radioValue }})
        </label>
      </div>
  
      <div>
        <label>Select an option:</label>
        <select v-model="selectedOption">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
        </select>
      </div>
  
      <div>
        <label>Enter text:</label>
        <textarea v-model="textAreaValue"></textarea>
      </div>
  
      <div>
        <label>Trimmed Value:</label>
        <input type="text" v-model.trim="trimmedValue" />
      </div>
  
      <div>
        <label>Enter a number:</label>
        <input type="number" v-model.number="numericValue" />
      </div>
  
      <div>
        <label for="lazyValue">Lazily bound value:</label>
        <input type="text" id="lazyValue" v-model.lazy="boxText" />
      </div>
  
      <button v-on:click="handleClick">Submit</button> <!-- Inline handler-->
    </form>
    <p v-if="validationError" style="color: red;">{{ validationError }}</p>
   
</template>

<script>
export default {
  data() {
    return {
      textInput: 'Default Text',
      checkboxValue: true,
      checkboxValue2: false,
      radioValue: 'option1',
      selectedOption: 'option1',
      textAreaValue: 'Default Text Area Value',
      trimmedValue: 'Default Trimmed Value',
      numericValue: 42,
      lazyValue: 'Default Lazily Bound Value',
      validationError: ''
    };
  },
  computed: {
    boxText() {
      return this.textInput;
    }
},
  methods: { 
    handleClick() { //method handler
      if (this.textInput === '') {
        this.validationError = 'Username cannot be empty';
      } else {
        this.validationError = '';
        alert(`Form submitted with username: ${this.textInput}`);
      }
  }
}
};
</script>