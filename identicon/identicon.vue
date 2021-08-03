<div id="app">
  <h3>My Identicon Generator</h3>
  <div>
    Input: 
    <input v-on:input="onInput" />
  </div
    
  <div>
    Output:
    <div v-html="identicon" />
  </div>
</div>


new Vue({
  el: '#app',
  data: {
    textInput: '',
  },
  computed: {
    identicon: function() {
      return jdenticon.toSvg(this.textInput, 200);
    }
  },
  methods: { // Use these functions to change data
    onInput: function(event) {
      this.textInput = event.target.value;
    }
  }
});
