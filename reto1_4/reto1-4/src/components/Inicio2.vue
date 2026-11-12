<script setup>
import { ref } from 'vue';


/*const notas = [];
for (let i = 0; i < 3; i++) {
  notas.push(Array(3).fill(0)); 
}*/
const inputExamenes = ref(Array.from({length: 3}, ()=> Array(3).fill(0)));
const inputExamen1_1 = ref();
const inputExamen2_1 = ref();
const inputExamen3_1 = ref();
const inputExamen1_2 = ref();
const inputExamen2_2 = ref();
const inputExamen3_2 = ref();
const inputExamen1_3 = ref();
const inputExamen2_3 = ref();
const inputExamen3_3 = ref();




</script>

<template>
    <div class="root">
        <div class="contendorAlumno card text-bg-light mb-3">
            <h2 class="mb-3">Alumno</h2>

            <div class="mb-3">
                <label for="nombreAlumno" class="form-label">Nombre</label>
                <input type="email" class="form-control" id="nombreAlumno" placeholder="Nombre del alumno">
            </div>
            <select class="form-select mb-4">
                <option selected>Clase del Alumno</option>
                <option value="1">clase 1b</option>
                <option value="2">clase 2a</option>
                <option value="3">clase 3c</option>
            </select>
            <p>{{ inputExamenes[0][0] }}</p>
            <button>Crear Alumno</button>

        </div>
        <div class="contenedorCards">

            <!--evaluacion 1-->
            <div class="cardEvaluacion card text-bg-light mb-3">
                <h3>1ra Evaluacion</h3>
                <div class="form-floating mb-3">
                    <input type="number" class="form-control" v-model.number="inputExamen1_1" placeholder="Examen 1"
                        min="0" max="10" default-value="0">
                    <label for="inputExamenes[0][0]">Examen 1</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="number" class="form-control" v-model.number="inputExamen2_1" id="inputExamen2_1"
                        placeholder="Examen 2" min="0" max="10" default-value="0">
                    <label for="inputExamen2_1">Examen 2</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="number" class="form-control" v-model.number="inputExamen3_1" id="inputExamen3_1"
                        placeholder="Examen 3" min="0" max="10" default-value="0">
                    <label for="inputExamen3_1">Examen 3</label>
                </div>
                <div class="progress">
                    <div class="progress-bar" role="progressbar" style="width: 66%" aria-valuenow="25" aria-valuemin="0"
                        aria-valuemax="100"></div>
                </div>
            </div>
            <!--evaluacion 2-->
            <div class="cardEvaluacion card text-bg-light mb-3">
                <h3>2da Evaluacion</h3>
                <div class="form-floating mb-3">
                    <input type="number" class="form-control" v-model.number="inputExamen1_2" id="inputExamen1_2"
                        placeholder="Examen 1" min="0" max="10" default-value="0">
                    <label for="inputExamen1_2">Examen 1</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="number" class="form-control" v-model.number="inputExamen2_2" id="inputExamen2_2"
                        placeholder="Examen 2" min="0" max="10" default-value="0">
                    <label for="inputExamen2_2">Examen 2</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="number" class="form-control" v-model.number="inputExamen3_2" id="inputExamen3_2"
                        placeholder="Examen 3" min="0" max="10" default-value="0">
                    <label for="inputExamen3_2">Examen 3</label>
                </div>
                <div class="progress">
                    <div class="progress-bar" role="progressbar" style="width: 66%" aria-valuenow="25" aria-valuemin="0"
                        aria-valuemax="100"></div>
                </div>
            </div>
            <!--evaluacion 3-->
            <div class="cardEvaluacion card text-bg-light mb-3">
                <h3>3ra Evaluacion</h3>
                <div class="form-floating mb-3">
                    <input type="number" class="form-control" v-model.number="inputExamen1_3" id="inputExamen1_3"
                        placeholder="Examen 1" min="0" max="10" default-value="0">
                    <label for="inputExamen1_3">Examen 1</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="number" class="form-control" v-model.number="inputExamen2_3" id="inputExamen2_3"
                        placeholder="Examen 2" min="0" max="10" default-value="0">
                    <label for="inputExamen2_3">Examen 2</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="number" class="form-control" v-model.number="inputExamen3_3" id="inputExamen3_3"
                        placeholder="Examen 3" min="0" max="10" default-value="0">
                    <label for="inputExamen3_3">Examen 3</label>
                </div>
                <div class="progress">
                    <div class="progress-bar" role="progressbar" style="width: 66%" aria-valuenow="25" aria-valuemin="0"
                        aria-valuemax="100"></div>
                </div>
            </div>

        </div>

    </div>





</template>

<style scoped>
.cardEvaluacion {
    max-width: 20%;
    width: 20%;
    margin: 0;
    padding: 20px;
}

.contenedorCards {

    padding: 20px;
    margin: auto;
    display: flex;
    justify-content: center;
    gap: 5%;

}

.contendorAlumno {
    max-width: 69%;
    width: 69%;
    margin: auto;
    padding: 20px;

}


.root {
    max-width: 80%;
    height: 100%;
    margin: auto;
}

button {
    background-color: rgb(81, 81, 211);
    color: white;
    border-radius: 8px;
    border-color: rgb(81, 81, 211);

}
</style>