<template>
    <div>
        <h1>Todos</h1>
        <div v-for="todo in allTodos" :key="todo.id">
            {{todo.text}}
        </div>     
    </div>
</template>

<script>
import {mapGetters} from 'vuex';
    export default {
        name:'Todo',
       computed: {
           ...mapGetters('todo',['allTodos'])
       } 
    }
</script>

