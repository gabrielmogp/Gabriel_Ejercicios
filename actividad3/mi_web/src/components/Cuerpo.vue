<script setup>
import { ref } from 'vue'
import Camiseta1 from '../assets/camiseta1.jpg'
import Camiseta2 from '../assets/camiseta2.jpg'
import Camiseta3 from '../assets/camiseta3.jpg'
import Camiseta4 from '../assets/camiseta4.jpg'
import Camiseta5 from '../assets/camiseta5.jpg'
import Camiseta6 from '../assets/camiseta6.jpg'

const count = ref(0)
const imagenes = [Camiseta1, Camiseta2, Camiseta3, Camiseta4, Camiseta5, Camiseta6]

let camisetas = [
  { id: 1, nombre: "Camiseta 1", precio: 10 },
  { id: 2, nombre: "Camiseta 2", precio: 15 },
  { id: 3, nombre: "Camiseta 3", precio: 20 },
  { id: 4, nombre: "Camiseta 4", precio: 25 },
  { id: 5, nombre: "Camiseta 5", precio: 30 },
  { id: 6, nombre: "Camiseta 6", precio: 35 }
]
</script>
    <template>
    <div class="cuerpo" >
        <h1>Bienvenido a nuestra tienda de camisetas</h1>
        <div>
            <article v-for="camiseta in camisetas" :key="camiseta.nombre" class="camiseta">
                <img :src="imagenes[camiseta.id - 1]" :alt="camiseta.nombre" />
                        <strong>{{ camiseta.nombre }}</strong>
                        <strong>{{ camiseta.precio }}€</strong>
                        <button type="button" class="counter" @click="count += camiseta.precio"></button> 
            </article>
        </div>
    </div>
</template>
<style scoped>
    article {
        background: antiqueWhite;
        border-radius: 1em;
        width: 100%;
        
    }
    </style>