<script>
export default {
    name: 'TodoOption',
    props: {
        itemList: {
            type: Array,
            require: true
        }
    },
    emits: ['deleteItem', 'completedItem'],
    computed: {
        reversedItemList() {

            const newArray = this.itemList;
            return  newArray.reverse();
           
        }
    },
    watch: {
        // verificar se existe um item igual
    }
}
</script>
<template>
    <ul >
        <li class="flex justify-between app-option-item" v-for="(todoItem) in reversedItemList" :key="todoItem.id">
            <div class="todo-content__input">
                <input type="checkbox" @click="this.$emit('completedItem', todoItem.id)" :checked="todoItem.completed" name="todoValue" :id="todoItem.title" >
                <label :for="todoItem.title">{{ todoItem.title }}</label>
            </div>
            <button @click="this.$emit('deleteItem', todoItem.id)">x</button>
        </li>
    </ul>
</template>
<style>
    .flex {
        display: flex;
    }
    .justify-between {
        justify-content: space-between;
    }
    .app-option-item {
        margin: 8px 0;
    }
    .todo-content__item {
        width: 30%;
    }
    .todo-content__input > input {
        margin-right: 16px;
       
    }
    
    .todo-content--close {
        width: 10%;
        margin-left: 16px;
        background-color: red;
    }
</style>