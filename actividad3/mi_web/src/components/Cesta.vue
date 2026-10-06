<script setup>
import { ref } from 'vue';
defineProps({
    visible: {
        type: Boolean,
        default: false
    },
    cesta: {
        type: Object,
        default: null
    }
})
const emit = defineEmits(['cerrar'])



function calcularPrecioTotal(cesta){
    var total = 0;
    for (let i = 0; i < cesta.length; i++) {
        total += cesta[i].precio;
    }
    return total;
}

</script>

    
<template>
    <div v-if="visible" class="fondo" @click.self="$emit('cerrar')">
        <article class="tarjeta">
            <h2>Cesta</h2>
            <div class="info">
                
                <div v-for="modelo in cesta" :key="modelo.nombre" >
                    <div class="item">
                        <p>{{ modelo.id }}, {{ modelo.talla }}, {{ modelo.precio }} €</p>
                    </div>
                    
                </div>
                <p>Precio total: {{ calcularPrecioTotal(cesta).toFixed(2) }} €</p>
            </div>
        </article>
    </div>
</template>

<style scoped>
.fondo {
    position: fixed;
    inset: 0;
    background: rgba(23, 32, 51, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px;
    z-index: 100;
}
.h2 {
    color: #2563eb;
    max-height: 10%;
}

.tarjeta {
    width: 40%;
    height: 40%;
    background: white;
    border-radius: 18px;
    max-width: 740px;
    max-height: 60%;
    overflow: hidden;
    display: grid;
}
.item {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
}


@media (max-width: 650px) {
    .tarjeta {
        grid-template-columns: 1fr;
    }
}
</style>