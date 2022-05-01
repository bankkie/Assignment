<template>
  <div>
      <input type="text" v-modal="textFilter" />
      {{result}}
  </div>
</template>

<script>
export default {
  name: "QuestionII",
  props: {},
  created() {
      this.getData()
  },
  methods: {
    async getData () {
        let result;
        await fetch('https://api.publicapis.org/categories').then(res => res.json()).then((response) =>    {
            result = response.data;
        });
        this.listData = result
        console.log(result);
    }
  },
  data() {
      return {
          textFilter: "",
          listData: []
      }
  },
  watch: {
  },
  computed: {
      result (){
          if (this.textFilter === "") {
              return this.listData
          } else {
              return this.listData.filter(e => e === this.textFilter)
              
          }
      }
  }
}
</script>