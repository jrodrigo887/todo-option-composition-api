<script>
import TodoOption from "../components/TodoOption.vue";
	export default {
    name: "TODO-Options-API",
	components: { TodoOption },
    data: () => {
        return {
            todoList: [],
            todoText: "",
			count: 0
        };
    },
    methods: {
        addTodo() {
			const data = {
				id: this.count++,
				title: this.todoText, 
				completed: false
			}

            this.todoList.push(data);
            this.todoText = "";
        },

		completedTodo(id) {
			this.todoList.forEach(item => {
				if (item.id === id) {
					item.completed = !item.completed
				}
			})	
		},

        deleteTodo(id) {
			const index = this.todoList.findIndex(item => item.id === id)

			if (index > -1) {
				this.todoList.splice(index, 1);
			}
        }
    },  
}
</script>

<template>
	<div id="app" class="app-options">
		<h2>Simples Todo - Vuejs</h2>
		<div class="options-api__input">
			<input id="add-input" v-model="todoText" 
				@keyup.enter.prevent="addTodo" 
				placeholder="O que vai fazer?" />
		</div>
		<TodoOption :itemList="todoList" 
			:delete="deleteTodo" 
			@deleteItem="deleteTodo" 
			@completedItem="completedTodo" />
	</div>
</template>
<style>
	.app-options {
		margin: 28px 0px;
		display: flex;
		flex-direction: column;
	}

	.app-options > h2 {
		text-align: center;
	}

	.options-api__input > input {
		width: 100%;
		height: 46px;
		padding: 0 16px;
		margin-top: 16px;
		border: 1px solid #cacaca;
		border-radius: 16px;
	}
	.options-api__input > input:focus {
		background-color: #cdcdcd;
		border-radius: 16px;
		outline: #aaf solid 1px;
	}
</style>
