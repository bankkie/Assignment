<template>
<div id="app" class="flex flex-col">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/questionI">Question 1</router-link> |
      <router-link to="/questionII">Question 2</router-link>
    </div>
    <div>
      <router-view/>
    </div>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>