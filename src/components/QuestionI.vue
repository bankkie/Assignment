<template>
  <div class="grid grid-cols-3">
      <div>
        <input type="number" v-model="number" >
      </div>
      <div>
        <select v-model="selectType">
            <option v-for="(item, key) in dropDown" :key="key" :value="item.value">{{item.label}}</option>
        </select>
      </div>
      <div>
        <p>{{result}}</p>
      </div>
  </div>
</template>

<script>
export default {
  name: "QuestionI",
  props: {},
  created() {
      
  },
  methods: {
    
  },
  data() {
      return {
          dropDown: [{label:"isPrime",value:"isPrime"},{label:"isFibonacci",value:"isFibonacci"}],
          number: 0,
          selectType: "isPrime"
      }
  },
  computed: {
      result:{

      }
  }
}
</script>