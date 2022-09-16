<script setup lang="ts">
import { reactive, ref, toRef, toRefs } from 'vue';
import TodoComposition from '../components/TodoComposition.vue';
	interface Todo {
		id: number;
		title: string | undefined;
		completed: boolean;
	}

	const state = reactive({
		todoList: [] as Todo[],
		count: 0
	});

	const inputText = ref<HTMLInputElement | null>(null)
	
  	function addTodo() {
		const data: Todo = {
			id: state.count++,
			title: inputText.value?.value, 
			completed: false
		}

      	state.todoList.push(data);
    	if(inputText.value)
	  		inputText.value.value = ''
  	}

	function completedTodo(id: number) {
		state.todoList.forEach(item => {
			if (item.id === id) {
				item.completed = !item.completed
			}
		})	
	}

    function deleteTodo(id: number) {
		const index = state.todoList.findIndex(item => item.id === id)

		if (index > -1) {
			state.todoList.splice(index, 1);
		}
    }

</script>
<template>
  <div class="app-composition">
		<h2>Simples Todo - Vuejs</h2>
		<div class="comp-api__input">
			<input id="add-input" ref="inputText" 
				@keyup.enter.prevent="addTodo" 
				placeholder="O que vai fazer?"/>
		</div>
		<TodoComposition :itemList="state.todoList" 
			@deleteItem="deleteTodo" 
			@completedItem="completedTodo" />
	</div>
</template>

<style>
	.app-composition {
		margin: 28px 0px;
		display: flex;
		flex-direction: column;
	}

	.app-composition > h2 {
		text-align: center;
	}

	.comp-api__input > input {
		width: 100%;
		height: 46px;
		padding: 0 16px;
		margin-top: 16px;
		border: 1px solid #cacaca;
		border-radius: 16px;
	}

	.comp-api__input > input:focus {
		background-color: #cdcdcd;
		border-radius: 16px;
		outline: #aaf solid 1px;
	}
</style>
