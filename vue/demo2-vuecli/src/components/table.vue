<template>
      <tr><td colspan="" rowspan="" headers="" ref="hello" @click="clickEvent">{{content}}</td></tr>
</template>

<script>
export default {
	// 子组件中data是一个function,不能是一个object,而在母组件vue中可以是一个object
	data: function(){
		return{
			content: 'this is a row!'
		}
	},
	methods:{
		clickEvent:function(){
			alert(this.$refs.hello.innerHTML); //vue操作dom
		}
	}
}
</script>


<style scoped>

</style>
