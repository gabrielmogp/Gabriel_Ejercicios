<script setup>
import PanelDetalles from './components/PanelDetalles.vue';
</script>

<template>
  <h1>solucion a los ejercicios de VUE</h1>
  <ul>
    <li>
      <router-link to="/">Inicio</router-link>
    </li>
    <li>
      <router-link to="/interruptor">Interruptor</router-link>
    </li>
    <li>
      <router-link to="/examen">Examen</router-link>
    </li>
  </ul>
  <router-view/>
</template>
