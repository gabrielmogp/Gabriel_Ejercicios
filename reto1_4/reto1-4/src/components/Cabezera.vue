<script setup>
</script>
<template>
  <header class="cabecera">
    <a class="marca" href="#inicio">App dpto Ingles</a>
    <router-link to="/" class="opciones">Inicio</router-link>
    <router-link to="/" class="opciones">Buscar Alumno</router-link>
    <router-link to="/" class="opciones">Crear Alumno</router-link>
    <router-link to="/" class="opciones">Crear Clase</router-link>
  </header>
</template>
<style scoped>
.cabecera {
  display: flex;
  justify-content: space-between;
  max-width: 1100px;
  margin: auto;
  padding: 24px;
}

.marca {
  color: #2563eb;
  font-size: 44px;
  font-weight: bold;
  text-decoration: none;
}

.opciones {
  margin: auto;
  padding-top: 2%;
}



button {
    background: #2563eb;
    color: #172033;
    border: 1px solid #2563eb;
    padding: 8px 16px;
    cursor: pointer;
    

        
    border-radius: 12px;
    font-weight: bold;
    font-size: 16px;
    color: #eeeef0;
  }
</style>