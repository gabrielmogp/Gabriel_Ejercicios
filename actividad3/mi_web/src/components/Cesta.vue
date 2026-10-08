<script setup>
defineProps({
    visible: {
        type: Boolean,
        default: false
    },
    cesta: {
        type: Object,
        default: ()=>[]
    },
    modelos: {
        type: Array,
        default: () => []
    }
})
const emit = defineEmits(['cerrar'])



function formateoPrecioTotal(cesta){
    if(!cesta || cesta.length === 0) {
        return "La cesta está vacía";
    }
    var total = 0;
    for (let i = 0; i < cesta.length; i++) {
        total += cesta[i].precio;
    }
    return "precio total: " + total.toFixed(2) + " €";
}

function eliminarItem(cesta, itemCesta, modelos){
    modelos[itemCesta.id].talla[itemCesta.talla].cantidad++;
    cesta.splice(cesta.indexOf(itemCesta), 1);
    
}

function agruparCesta(cesta){
    let cestaAux = [];
    array.forEach(element => {
        
    });



</script>

    
<template>
    <div v-if="visible" class="fondo" @click.self="$emit('cerrar')">
        <article class="tarjeta">
            <h2>Cesta</h2>
            <div class="info">
                
                <div v-for="itemCesta in cesta" :key="itemCesta.nombre" >
                    <div class="item">
                        <img :src="itemCesta.imgs[0]">
                        <p>{{ itemCesta.nombre }}, {{ itemCesta.talla.toUpperCase() }}</p>
                        <strong>precio: {{ itemCesta.precio }} €</strong>
                        <button class="boton" @click="eliminarItem(cesta, itemCesta, modelos)">Eliminar</button>
                    </div>
                    
                </div>
                <div class="pie">
                    <p>{{ formateoPrecioTotal(cesta) }}</p>
                    <button>Finalizar compra</button>
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
.h2 {
    color: #2563eb;
    max-height: 10%;
}

.tarjeta {
    width: min(40%, 740px);
    max-width: 490px;
    max-height: 60vh;
    background: white;
    border-radius: 18px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
}

h2 {
    margin: 0;
    padding: 1rem 1.25rem;
    color: #2563eb;
    border-bottom: 1px solid #e5e7eb;
}

.info {
    overflow-y: auto;
    padding: 1rem 1.25rem;
    flex: 1;
}

.item {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    background-color: #e5e7eb;
    border-radius: 12px;
    margin: 12px;
}

.pie {
    display: flex;
    flex-direction: row;
    justify-content: right;
}

button {
    background: #2563eb;
    color: #172033;
    border: 1px solid #2563eb;
    padding: 8px 16px;
    cursor: pointer;
    margin: auto;

        
    border-radius: 12px;
    font-weight: bold;
    font-size: 16px;
    color: #eeeef0;

}
img {
    width: 70px;
    height: 70px;
    border-radius: 12px;
    padding: 6px;
}
@media (max-width: 650px) {
    .tarjeta {
        width: min(90vw, 740px);
    }
}
</style>