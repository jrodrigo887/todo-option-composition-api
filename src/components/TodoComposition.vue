<script setup lang="ts">
    import { computed } from 'vue';

    interface Props {
        itemList: {
            id: number; 
            title: string | undefined; 
            completed: boolean;
        }[]
    }

    interface Emits {
        (e: 'completedItem', id: number): void
        (e: 'deleteItem', id: number): void
    }

    const props = defineProps<Props>()
    const emit = defineEmits<Emits>();

    const reversedItemList = computed(() => {
        const arrayList = props.itemList
        return arrayList.reverse();
    })

</script>

<template>
    <keep-alive>
        <ul>
            <li class="app-composition-item flex justify-between" v-for="todoItem in reversedItemList" :key="todoItem.id">
                <div class="todo-content__input">
                    <input type="checkbox" @click="emit('completedItem', todoItem.id)" :checked="todoItem.completed" name="todoValue" :id="todoItem.title" >
                    <label :for="todoItem.title">{{ todoItem.title }}</label>
                </div>
                <button @click="emit('deleteItem', todoItem.id)">x</button>
            </li>
        </ul>
    </keep-alive>
</template>

<style>
    ul {
        margin: 0;
        padding: 0;
    }
    .flex {
        display: flex;
    }

    .justify-between {
        justify-content: space-between;
    }

    .app-composition-item {
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
