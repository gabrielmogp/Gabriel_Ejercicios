<script setup>
import Cabecera from './components/Cabezera.vue'
import Inicio from './components/Inicio.vue'
import Pie from './components/Pie.vue';
import Cesta from './components/Cesta.vue';
import { ref } from 'vue';

const mostrarCesta = ref(false);
const cesta = ref([]);
const modelos = [
    {
        id: 0,
        nombre: 'Urban Flow',
        imgs: ['https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=900&q=80',
            'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80'],
        alt: ['imagen anverso', 'imagen reverso'],
        descripcion: 'Camiseta 1, descripcion 1.',
        talla: {
            s: { precio: 79.99, cantidad: 5 },
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
            s: { precio: 59.99, cantidad: 5 },
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
            s: { precio: 94.99, cantidad: 5 },
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
            s: { precio: 89.99, cantidad: 5 },
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
            s: { precio: 99.99, cantidad: 5 },
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
            s: { precio: 79.99, cantidad: 5 },
            m: { precio: 89.99, cantidad: 4 },
            l: { precio: 99.99, cantidad: 7 }
        }

    }
]
</script>

<template>
 <Cabecera :cantidadCesta="cesta.length" @mostrarCesta="mostrarCesta=true"/>
  <main>
    <Inicio :cesta="cesta" :modelos="modelos"/>
  </main>
  <Pie/>
  <Cesta :visible="mostrarCesta" :cesta="cesta" :modelos="modelos" @cerrar="mostrarCesta=false"/>
</template>
