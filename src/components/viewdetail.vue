<template>
  <div class="container">
 
      <div class="view-desc">
        <h2>Introduction about Vuejs</h2>
        <span> What is Vue.js?</span>
        <div class="s-content text-left">
          <p>
            Vue (pronounced /vjuː/, like view) is a progressive framework for
            building user interfaces. Unlike other monolithic frameworks, Vue is
            designed from the ground up to be incrementally adoptable. The core
            library is focused on the view layer only, and is easy to pick up
            and integrate with other libraries or existing projects. On the
            other hand, Vue is also perfectly capable of powering sophisticated
            Single-Page Applications when used in combination with modern
            tooling and supporting libraries.
          </p>
          <p>
            If you’d like to learn more about Vue before diving in, we created a
            video walking through the core principles and a sample project.
          </p>
          <p>
            If you are an experienced frontend developer and want to know how
            Vue compares to other libraries/frameworks, check out the Comparison
            with Other Frameworks.
          </p>
        </div></div>
  </div>
</template>

<script>
export default {
    name:"viewdetail",
};
</script>

<style lang="scss" scoped>
.view-desc{
  width: 1140px;
  display: block;
  margin: auto;
nav {
  margin-bottom: 50px;
 ul{
   text-align: right;
   margin-bottom: 20px;
   padding-left: 0;
  li{
    display: inline-block;
    padding: 0 20px;
 border: 1px solid #41b883;
 border-radius: 8px;
 margin: 0 5px;
  &:hover{
           transition: .3s;
           background: #35495e;
           color: #fff;
        }
    a{
        text-decoration: none;
        text-transform: uppercase;
        color: #35495e;
        &:hover{
             color: #fff;
             transition: .3s;
        }      
    }
  }
 }
}
h2{
  position: relative;
  display: flex;
  align-items: center;
 text-align: left;
 background: #41b883;
 width: 350px;
 height: 60px;
 margin-bottom: 30px;
 &::after{
 position: absolute;
    top: 0;
    right: -350px;
    content: "";
    width: 350px;
    height: 50px;
    border-top: 32px solid transparent;
    border-bottom: 28px solid transparent;
    border-left: 50px solid #41b883;
 }
}
span{
  font-size: 20px;
  border-bottom: 1px solid #41b883;
  margin: 20px 0;
}
.s-content{
  margin-top: 30px;
  border: 1px solid #41b883;
  padding: 10px;
  border-radius: 8px;
  box-shadow:  0px 4px 4px rgba(0, 0, 0, 0.4);
}
}
</style>
