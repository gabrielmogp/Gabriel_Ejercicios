<script setup>
import { ref } from 'vue';

    const mostarInfo = ref(false);

    function toggle(){
        mostarInfo.value = mostarInfo.value ? false : true;
    }
    
</script>

<template>
    <button @click="toggle" :class="mostarInfo ? 'btnMostrar' : 'btnOcultar'">{{ mostarInfo ? 'ocultar detalle' : 'mostrar detalle' }}</button>
    <div v-if="!mostarInfo">
        <p>Pulsa para mostrar detalles</p>
    </div>
    <div v-else class="tarjetaInfo">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus doloremque, beatae qui veniam placeat consequatur? Maiores hic, minima et aspernatur ullam itaque explicabo expedita nesciunt inventore nobis dolores eaque iusto.</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus doloremque, beatae qui veniam placeat consequatur? Maiores hic, minima et aspernatur ullam itaque explicabo expedita nesciunt inventore nobis dolores eaque iusto.</p>
    </div>
</template>

<style scoped>
    button  {
            margin-bottom: 10px;
        max-width: 300px;
        height: 30px;
        border-radius: 8px;
    }
    .btnMostrar {
        
        background-color: aqua;
        color: black;
        
    }
    .btnOcultar {
        
        background-color: rebeccapurple;
        color: white;     
    }
    .tarjetaInfo{
        margin-top: 10px;
        border-radius: 8px;
        border: black;
        border-style: dotted;
        max-width: 45%;
        background-color: lightgreen;
    }
</style>