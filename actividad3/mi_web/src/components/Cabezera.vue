<script setup>
  defineProps({
    CestaVisible: {
        type: Boolean,
        default: false
    }
    
})
</script>
<template>
  <header class="cabecera">
    <a class="marca" href="#inicio">Las Camisetas de Manuel</a>
    <nav><a href="#modelos">Modelos</a><a href="#contacto">Contacto</a></nav>
    
    <button class="cerrar" @click="$emit('cerrar')">Cesta</button>

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

nav a {
  color: #172033;
  margin-left: 20px;
  text-decoration: none;

  .cerrar {
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
}
</style>