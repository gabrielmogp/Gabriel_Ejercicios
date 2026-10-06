<script setup>
import { ref } from 'vue';
import Detalle from './Detalle.vue';

defineProps({
    cesta: {
        type: Array,
        default: () => [],
        
    },
    modelos: {
        type: Array,
        default: () => []
    }
});

const mostrarDetalle = ref(false);
const modeloSeleccionado = ref(0);


</script>

<template>  
            <header class="cab-mod" id="modelos">
                <div>
                    <h3>Nuestras camisetas</h3>
                </div>
            </header>
            <ul class="lista">
                <li v-for="modelo in modelos" :key="modelo.nombre" class="modelo">
                    <img :src="modelo.imgs[0]" :alt="modelo.alt[0]">
                    <div class="info">
                        <h4>{{ modelo.nombre }}</h4>
                        <strong>Desde {{ modelo.talla.s.precio }} EUR</strong>
                        <button class="boton" @click="mostrarDetalle=true , modeloSeleccionado = modelo.id">Comprar</button>
                    </div>
                    
                </li>
            </ul>
            <Detalle :visible="mostrarDetalle" :modelo="modelos[modeloSeleccionado]" :cesta="cesta" @cerrar="mostrarDetalle=false"></Detalle>
</template>

<style scoped>


.cab-mod {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    
}

.etiqueta {
    color: #2563eb;
    font-weight: bold;
    margin: 0;
    display: flex;
    flex-direction: row;
}

h3 {
    font-size: 30px;
     color: #2563eb;
}

.boton {
    background: #2563eb;
    color: #172033;
    border: 1px solid #2563eb;
    padding: 8px 16px;
    cursor: pointer;
    width: 100%;
    margin: auto;

        
    border-radius: 12px;
    font-weight: bold;
    font-size: 16px;
    color: #eeeef0;
}

.lista {
    list-style: none;
    
    width: 60%;
    padding: 0;
    margin: 30px auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 18px;
}

.modelo {
    background: #eff6ff;
    border-radius: 12px;
    overflow: hidden;
}

.modelo img {
    width: 100%;
    height: 270px;
    object-fit: cover;
}

.info {
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 6px;
    text-align: center;
}

h4 {
    margin: 0;
    font-size: 18px;
}

.info p {
    margin: 0;
    color: #172033;
}

.info strong {
    color: #2563eb;
    font-size: 18px;
}

@media (max-width: 600px) {
    .lista {
        grid-template-columns: 1fr;
    }
}
</style>