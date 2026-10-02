<script setup>
import { ref } from 'vue';
defineProps({
    visible: {
        type: Boolean,
        default: false
    },
    modelo: {
        type: Array,
        default: null
    }
})
defineEmits(['cerrar'])

function cambiarImg(a){
 if (a === 0) return 1;
 if (a === 1) return 0;
}
const imagenMostrada = ref(0);

</script>

    
<template>
    <div v-if="visible" class="fondo" @click.self="$emit('cerrar'), imagenMostrada = 0">
        <article class="tarjeta">
            <img :src="modelo.imgs[imagenMostrada]" :alt="modelo.alt[imagenMostrada]" @click.self="imagenMostrada= cambiarImg(imagenMostrada)">
            <div class="info">
                <h3>{{modelo.nombre}}</h3>
                <p>{{ modelo.descripcion }}</p>
                <strong>Nuestras tallas</strong>
                <div>
                    <div class="tallas">
                        <p>S</p>
                        <p>{{modelo.talla.x.precio}} €</p> 
                    </div>
                    <div class="tallas">
                        <p>M</p>
                        <p>{{modelo.talla.m.precio}} €</p>
                    </div>
                    <div class="tallas">
                        <p>L</p>
                        <p>{{modelo.talla.l.precio}} €</p>
                    </div>
                </div>
                <div class="contenedorBtns">
                <button >Añadir</button>
                <button @click="$emit('cerrar'), imagenMostrada = 0">Cancelar</button> // Botón para cerrar el modal y resetear la imagen mostrada
                </div>
                
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

.tarjeta {
    background: white;
    border-radius: 18px;
    max-width: 740px;
    max-height: 41%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    overflow: hidden;
}

.tarjeta img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    
}

.info {
    padding: 28px;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.etiqueta {
    color: #2563eb;
    font-weight: bold;
    margin: 0;
}

h3 {
    margin: 0;
    font-size: 26px;
}

.info strong {
    color: #2563eb;
    font-size: 24px;
}

ul {
    padding-left: 18px;
}

button {
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



/* IMPORTANTE, TODO CSS */
.contenedorBtns { 
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
}

.tallas {
    background: #eff6ff;
    border-radius: 12px;
    padding: 8px 16px;
    margin: 4px 0;
    font-weight: bold;
    color: #2563eb;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
}

.tallas p {
    margin: 0;
}

@media (max-width: 650px) {
    .tarjeta {
        grid-template-columns: 1fr;
    }
}
</style>