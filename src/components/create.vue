<template>
  <div class="row">
    <div class="form">
      <div class="col-lg-12 form-add">
        <label for="">Type blog's title :</label>
        <textarea class="form-group" v-model="item.title"></textarea>
        <label for="">Type blog's content :</label>
        <textarea class="form-group" v-model="item.content"></textarea>
        <div class="btn btn-primary" @click="clickSave()">ADD</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "create",
   props:{
    item:Object
  },
  methods: {
    clickSave(){
this.$emit('save',this.item)
    }
  },
};
</script>

<style lang="scss" scoped>
.form{
   
.form-add{
    text-align: left;
  label{
      display: block;
      font-size: 20px;
  }
  textarea{
      width: 500px;
  }
}
}

</style>