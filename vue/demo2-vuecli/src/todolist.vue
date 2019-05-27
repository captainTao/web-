<template>
  <div id="app">
    <div>
      <input placeholder="pls input value" v-model="inputValue"/>
      <button @click="handleSubmit">submit</button>
     </div> 
      <ul>
        <todo-item 
        v-for="(item, index) of list" 
        :key="index" 
        :content="item" 
        :index="index"
        @delete="handleDelete"
        ></todo-item>
      </ul>
      <table>
        <tbody>
          <row></row>
          <row></row>
          <tr is = "row"></tr> 
          <!-- tbody中只能放tr,然后通过is来映射，教程如实说，但实际上面的结果跟下面一致，实际结果都在tbody下面 -->
          <!-- 同样的ul,ol下面用li; select下面用option,然后都加上is='template_name'即可 -->
        </tbody>
      </table>
  </div>
</template>

<script>
import TodoItem from './components/TodoItem.vue'
import table from './components/table.vue'
export default {
  components:{
    'todo-item':TodoItem,
    'row':table
  },
  // data在单页面中是一个对象，在脚手架中是一个函数，可以用ES6的语法，它会自动转译成ES5的语法。
  data(){
    return{
      inputValue:'',
      list:[]
    }
  },
  // methods没有变，还是一个对象
  methods:{
    handleSubmit(){
      this.list.push(this.inputValue),
      this.inputValue=''
    },
    handleDelete(index){
      this.list.splice(index,1)
    }
  }
  
}
</script>

<style>

</style>
