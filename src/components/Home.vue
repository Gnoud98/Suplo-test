<template>
  <div class="container">
    <div class="">
      <button @click="clickAdd()">Add new</button>
    </div>
    <div class="row mt-5">
      <div class="col-lg-7">
        <div class="box-blog" v-for="item in listBlog" :key="item.id">
          <h3 class="blog-title">
            {{ item.title }}
          </h3>
          <div class="box-blog-desc">
            <p>
              {{ item.content }}
            </p>
          </div>
          <router-link to="/viewdetail">Viewdetail</router-link>
        </div>
      </div>
      <div class="col-lg-5 add">
        <create :item="item" @save="clickSave" v-if="isShow"></create>
      </div>
    </div>
  </div>
</template>

<script>
import viewdetail from "./viewdetail";
import create from "./create";
export default {
  name: "Home",
  components: { viewdetail, create},
  methods: {
    clickAdd(){
      let item={
        id:Math.floor(Math.random()*1000),
        title:'',
        content:'',
      }
      this.item=item  
      this.isShow=true
    },
     clickSave(item){
       this.listBlog.push(item)
     }
  },
  data() {
    return {
      listBlog: [
        {
          id: 1,
          title: "Approachable",
          content:
            " Already know HTML, CSS and JavaScript? Read the guide and start building things in no time",
        },
        {
          id: 2,
          title: "Versatile",
          content:
            "An incrementally adoptable ecosystem that scales between a library and a fullfeatured framework.",
        },
        {
          id: 3,
          title: "Performant",
          content:
            "20KB min+gzip Runtime Blazing Fast Virtual DOM Minimal Optimization Optimization Efforts",
        },
      ],
      item: null,
      isShow:false,
    };
  },
};
</script>

<style lang="scss">
button {
  background: #35495e;
  color: #fff;
  border: 1px solid #35495e;
  padding: 4px;
  &:hover {
    color: #35495e;
    background: #fff;
    transition: 0.4s;
  }
}
nav {
  ul {
    text-align: center;
    margin-bottom: 20px;
    padding-left: 0;
    li {
      display: inline-block;
      padding: 0 20px;
      border: 1px solid #41b883;
      border-radius: 8px;
      margin: 0 5px;
      &:hover {
        transition: 0.3s;
        background: #35495e;
      }
      a {
        text-decoration: none;
        text-transform: uppercase;
        color: #35495e;
        font-size: 20px;
        &:hover {
          color: #fff;
          transition: 0.3s;
          text-decoration: none;
        }
      }
    }
  }
}
.header {
  text-align: center;
  h1 {
    color: #41b883;
    font-family: Arial, Helvetica, sans-serif;
    border-bottom: 2px solid #35495e;
  }
  p {
    font-size: 16px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }
  span {
    color: rgb(56, 56, 56);
    font-size: 22px;
  }
}
.box-blog {
  border: 1px solid #41b883;
  padding: 10px;
  border-radius: 5px;
  height: 150px;
  margin-bottom: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
  position: relative;
  cursor: pointer;
  &:hover {
    transform: translateY(-1px);
    transition: 0.4s;
  }
  a {
    color: #41b883;
    font-size: 14px;
    padding: 5px;
    border: 1px solid #41b883;
    border-radius: 5px;
    text-decoration: none;
    &:hover {
      color: #ebebeb;
      background: #41b883;
      text-decoration: none;
    }
    &:focus {
      outline: none;
    }
  }
  span {
    position: absolute;
    right: 10px;
    bottom: 10px;
    background: #41b883;
    width: 20px;
    height: 20px;
    border-radius: 999px;
  }
}
</style>