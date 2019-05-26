<template>
      <li class="sli" @click="handleClick">{{content}}</li>
</template>

<script>
export default {
  props: ['content','index'],
  methods:{
    handleClick(){
      // alert(this.content)
      this.$emit('delete',this.index)
    }
  }
}
</script>


<style scoped>
  .sli{
    color: green
  }
</style>
