<template>
    <div id="app">
        <HelloWorld></HelloWorld>
        <MessageList :messages="messages"></MessageList>
    </div>
</template>

<script>
 import { eventBus } from './main.js';
 import HelloWorld from '@/components/HelloWorld';
 import MessageList from '@/components/MessageList';

 export default {
     name: 'app',
     data() {
         return { messages: ['Cat', 'Dog'] };
     },
     components: {
         MessageList,
         HelloWorld
     }
 }
</script>

