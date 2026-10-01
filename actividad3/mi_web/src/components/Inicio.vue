<script setup>
import { ref } from 'vue';
import Detalle from './Detalle.vue';

    const mostrarDetalle = ref(false);
    const modeloSeleccionado = ref(0);

const modelos = [
    {
        id: 0,
        nombre: 'Urban Flow',
        imgs: ['https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=900&q=80',
            'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80'],
        alt: ['imagen anverso', 'imagen reverso'],
        descripcion: 'Camiseta 1, descripcion 1.',
        talla: {
            x: { precio: 79.99, cantidad: 5 },
            m: { precio: 89.99, cantidad: 4 },
            l: { precio: 99.99, cantidad: 7 }
        }

    },
    {
        id: 1,
        nombre: 'Trail Force',
        imgs: ['https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80',
            'https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=900&q=80'],
        alt: ['imagen anverso', 'imagen reverso'],
        descripcion: 'Camiseta 2, descripcion 2.',
        talla: {
            x: { precio: 59.99, cantidad: 5 },
            m: { precio: 69.99, cantidad: 4 },
            l: { precio: 79.99, cantidad: 7 }
        }

    },
    {
        id: 2,
        nombre: 'Sprint One',
        imgs: ['https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=900&q=80',
            'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80'],
        alt: ['imagen anverso', 'imagen reverso'],
        descripcion: 'Camiseta 3, descripcion 3.',
        talla: {
            x: { precio: 94.99, cantidad: 5 },
            m: { precio: 104.99, cantidad: 4 },
            l: { precio: 114.99, cantidad: 7 }
        }

    },
    {
        id: 3,
        nombre: 'Cloud Step',
        imgs: ['https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=900&q=80',
            'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80'],
        alt: ['imagen anverso', 'imagen reverso'],
        descripcion: 'Camiseta 4, descripcion 4.',
        talla: {
            x: { precio: 89.99, cantidad: 5 },
            m: { precio: 99.99, cantidad: 4 },
            l: { precio: 109.99, cantidad: 7 }
        }

    },
    {
        id: 4,
        nombre: 'Street Flex',
        imgs: ['https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=900&q=80',
            'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80'],
        alt: ['imagen anverso', 'imagen reverso'],
        descripcion: 'Camiseta 5, descripcion 5.',
        talla: {
            x: { precio: 99.99, cantidad: 5 },
            m: { precio: 19.99, cantidad: 4 },
            l: { precio: 119.99, cantidad: 7 }
        }

    },
    {
        id: 5,
        nombre: 'City Runner',
        imgs: ['https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=900&q=80',
            'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80'],
        alt: ['imagen anverso', 'imagen reverso'],
        descripcion: 'Camiseta 6, descripcion 6.',
        talla: {
            x: { precio: 79.99, cantidad: 5 },
            m: { precio: 89.99, cantidad: 4 },
            l: { precio: 99.99, cantidad: 7 }
        }

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
                        <strong>Desde {{ modelo.talla.x.precio }} EUR</strong>
                        <button class="boton" @click="mostrarDetalle=true , modeloSeleccionado = modelo.id">Comprar</button>
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