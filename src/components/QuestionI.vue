<template>
  <div class="row">
      <div class="column left">
        <input type="number" v-model="number" >
      </div>
      <div class="column middle">
        <select v-model="selectType">
            <option v-for="(item, key) in dropDown" :key="key" :value="item.value">{{item.label}}</option>
        </select>
      </div>
      <div class="column right">
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
    isPrime() {
        let isPrime = true;
        if (this.number === 1) {
            return true
        }
        else if (this.number > 1) {
            for (let i = 2; i < this.number; i++) {
                if (this.number % i == 0) {
                    isPrime = false;
                    break;
                }
            }

            if (isPrime) {
                return true
            } else {
                return false
            }
        }
        else {
            return false
        }
    },
    isPerfectSquare( x) {
        let s = parseInt(Math.sqrt(x));
        return (s * s == x);
    },
    isFibonacci() {
        return this.isPerfectSquare(5 * this.number * this.number + 4) ||
            this.isPerfectSquare(5 * this.number * this.number - 4);
    }
  },
  data() {
      return {
          dropDown: [{label:"isPrime",value:"isPrime"},{label:"isFibonacci",value:"isFibonacci"}],
          number: 0,
          selectType: "isPrime"
      }
  },
  watch: {
      number(newNumber) {
          if (newNumber < 0)
            newNumber = 1
          if(newNumber%1 > 0)
            Math.round(newNumber);
      }
  },
  computed: {
      result (){
          if (this.selectType === "isPrime") {
              return this.isPrime()
          } else {
              return this.isFibonacci()
          }
      }
  }
}
</script>

<style>
.column {
  float: left;
  height: 300px; /* Should be removed. Only for demonstration */
}

.left  {
  width: 200px;
}

.right {
  width: 300px;
}

.middle {
    min-width: 100px;
    width: calc(100% - 500px);
}

.row:after {
  content: "";
  display: table;
  clear: both;
}

@media screen and (max-width: 600px) {
    .row {
        overflow-x: scroll;
    }
}
</style>