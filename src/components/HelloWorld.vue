<template>
    <div>
        {{ welcomeMsg }}
        <button id="welcome" @click="getWelcomeMsg()">Get Welcome Msg</button>
    </div>
</template>

<script>
 
 export default {
     name: 'HelloWorld',
     data () {
         return {
             welcomeMsg: ''
         };
     },
     methods: {
         getWelcomeMsg() {
             this.axios.get().then((response) => {
                 console.log(response.data);
                 this.welcomeMsg = response.data;
             });
         }
     }
 };
</script>
