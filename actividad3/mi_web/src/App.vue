<script setup>
import {ref} from 'vue'
import Cabecera from './components/Cabezera.vue'
import Inicio from './components/Inicio.vue'
import Pie from './components/Pie.vue';
const mostrarCatalogo = ref(false)

</script>

<template>
 <Cabecera @abrir-modelos="mostrarCatalogo=true"/>
  <main>
    <Inicio @abrir-modelos="mostrarCatalogo=true" />
  </main>
  <Pie/>
</template>
