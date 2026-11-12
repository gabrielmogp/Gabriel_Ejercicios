<script setup>
import { computed, ref } from 'vue';

const clasesPrueba = ['clase 1b', 'clase 2a', 'clase 3c'];
const umbrales = [70, 60, 50];
const evaluaciones = ref(Array.from({ length: 3 },
    () => ({ "examenes": Array(3).fill(null), "recuperacion": null })));
const claseSeleccionada = ref();

function esAprobado(nota, umbral) {
    return nota >= umbrales[umbral] ? 'aprobado' : 'suspenso';
}

function comprobarExamen(iE, iEx) {
    const nota = evaluaciones.value[iE].examenes[iEx];
    if (nota === null || nota === '') return '';
    return esAprobado(nota, iE);
}

function comprobarEvaluacion(iE) {
    const evaluacion = evaluaciones.value[iE];
    if (evaluacion.examenes.some(examen => examen === null || examen === '' )) return '';
    return (evaluacion.examenes.every(examen => esAprobado(examen, iE) === 'aprobado' )) ? 'aprobado' : 'suspenso';
    
}

</script>
<template>
    <div class="root">
        <div class="contendorAlumno card text-bg-light mb-3">
            <h2 class="mb-3">Alumno</h2>

            <div class="mb-3">
                <label for="nombreAlumno" class="form-label">Nombre</label>
                <input type="email" class="form-control" id="nombreAlumno" placeholder="Nombre del alumno">
            </div>
            <select class="form-select mb-4" v-model="claseSeleccionada">
                <option selected>Clase del Alumno</option>
                <option v-for="(clase, c) in clasesPrueba" :value="c">{{ clase }}</option>
            </select>
            <button>Crear Alumno</button>

        </div>
        <div class="contenedorCards">

            <div class="cardEvaluacion card text-bg-light mb-3" v-for="(evaluacion, e) in evaluaciones" :key="e">
                <div class="contenedorTituloEvaluacion">
                    <h3 :class="`${comprobarEvaluacion(e)}Color`" >{{ e + 1 }}ª Evaluacion</h3>

                </div>


                <!--input examenes-->
                <div :class="`form-floating mb-3 ${comprobarExamen(e, ex)}`" v-for="(examen, ex) in evaluacion.examenes"
                    :key="ex">
                    <input type="number" :class="`form-control ${comprobarExamen(e, ex)}`"
                        v-model.number="evaluaciones[e].examenes[ex]" :placeholder="`Examen ${ex + 1}`" min="0"
                        max="100" default-value="" :id="`ex${ex}_${e}`">

                    <label :for="`ex${ex}_${e}`">Examen {{ ex + 1 }}</label>
                </div>

                <!--barra de progreso-->
                <div class="progress">
                    <div class="progress-bar" role="progressbar" style="width: 66%" aria-valuenow="25" aria-valuemin="0"
                        aria-valuemax="100"></div>
                </div>

                <!--input recuperacion-->
                <div class="form-floating mb-4" v-if="evaluaciones[e].recuperacion != null">
                    <input type="number" class="form-control" v-model.number="evaluaciones[e].recuperacion"
                        :placeholder="Recuperacion" min="0" max="10" default-value="0" :id="`recuperacion_${e}`">
                    <label :for="`recuperacion_${e}`">Recuperacion {{ e + 1 }}</label>

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

.contenedorTituloEvaluacion {

    margin: auto;
    display: flex;

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

.suspenso {
    color: rgb(255, 0, 0);
    background-color: rgb(255, 228, 228);
}

.aprobado {
    color: rgb(0, 255, 0);
    background-color: rgb(214, 252, 230);
}
.suspensoColor {
    color: rgb(255, 0, 0);
}

.aprobadoColor {
    color: rgb(0, 255, 0);
}
</style>