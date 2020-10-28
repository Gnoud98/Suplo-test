<template>
  <div id="app">
    <div class="container">
      <header class="header mt-4">
        <h1>HELLO, WELCOM TO MY FIRST VUEJS BLOG !</h1>
        <p>
          After that, i'll show you a little Vuejs that i'd seft-study in 2 days
        </p>
        <nav>
          <ul>
            <li><router-link to="/Home">Home</router-link></li>
          </ul>
        </nav>
      </header>
      <router-view />
    </div>
  </div>
</template>

<script>
import Home from "./components/Home";

export default {
  name: "App",
  components: { Home },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
* {
  background: #ebebeb;
}
</style>
