<script setup>
  defineEmits(['abrir-modelos'])
</script>
<template>
  <header class="cabecera">
    <router-link class="marca" to="/">STEPUP</router-link>
    <nav>
      <router-link class="marca" to="/"  @click.prevent="$emit('abrir-modelos')">Modelos</router-link>
      <router-link class="marca" to="/contacto">Contacto</router-link>
    </nav>
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
  font-size: 24px;
  font-weight: bold;
  text-decoration: none;
}

nav a {
  color: #172033;
  margin-left: 20px;
  text-decoration: none;
}
</style>