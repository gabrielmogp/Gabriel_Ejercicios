<script setup>
import { ref } from 'vue';
import Detalle from './Detalle.vue';

    const mostrarDetalle = ref(false);
    const modeloSeleccionado = ref(0);

const modelos = [
    {
        id: 0,
        nombre: 'Urban Flow',
        precioTalla: [79.99, 89.99, 99.99],
        imgs: ['https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=900&q=80',
            'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80'],
        alt: ['imagen anverso', 'imagen reverso'],
        descripcion: 'Camiseta 1, lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        cantidad: [5, 4, 7]

    },
    {
        id: 1,
        nombre: 'Trail Force',
        precioTalla: [59.99, 69.99, 79.99],
        imgs: ['https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80',
            'https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=900&q=80'],
        alt: ['imagen anverso', 'imagen reverso'],
        descripcion: 'Camiseta 2, lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        cantidad: [5, 4, 7]
    },
    {
        id: 2,
        nombre: 'Sprint One',
        precioTalla: [94.99, 104.99, 114.99],
        imgs: ['https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=900&q=80',
            'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80'],
        alt: ['imagen anverso', 'imagen reverso'],
        descripcion: 'Camiseta 3, lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        cantidad: [5, 4, 7]
    },
    {
        id: 3,
        nombre: 'Cloud Step',
        precioTalla: [89.99, 99.99, 109.99],
        imgs: ['https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=900&q=80',
            'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80'],
        alt: ['imagen anverso', 'imagen reverso'],
        descripcion: 'Camiseta 4, lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        cantidad: [5, 4, 7]
    },
    {
        id: 4,
        nombre: 'Street Flex',
        precioTalla: [99.99, 109.99, 119.99],
        imgs: ['https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=900&q=80',
            'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80'],
        alt: ['imagen anverso', 'imagen reverso'],
        descripcion: 'Camiseta 5, lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        cantidad: [5, 4, 7]
    },
    {
        id: 5,
        nombre: 'City Runner',
        precioTalla: [84.99, 94.99, 104.99],
        imgs: ['https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=900&q=80',
            'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80'],
        alt: ['imagen anverso', 'imagen reverso'],
        descripcion: 'Camiseta 6, lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        cantidad: [5, 4, 7]
    }
]
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
                        <strong>Desde {{ modelo.precioTalla[0].toString() }} EUR</strong>
                        <button class="comprar" @click="mostrarDetalle=true , modeloSeleccionado = modelo.id">Comprar</button>
                    </div>
                    
                </li>
            </ul>
            <Detalle :visible="mostrarDetalle" :modelo=modelos[modeloSeleccionado] @cerrar="mostrarDetalle=false"></Detalle>
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

.comprar {
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