<template>
    <div class="dashboardWrapper">
        <div class="centerDiv">
        <div class="filterSelect">
            <v-select :items="items" label="Curso" dense outlined></v-select>
        </div>
            <div class="dataTable">
                <v-card-title>
                    Alumnos
                    <v-spacer></v-spacer>
                    <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details>
                    </v-text-field>
                </v-card-title>
                <v-data-table :headers="headers" :items="desserts" :items-per-page="15" class="elevation-1 data">
                </v-data-table>
            </div>
        </div>
        <SideBar class="inner" />
    </div>
</template>

<script>
import SideBar from '../components/SideBar.vue'
import checkAuth from '../helpers/auth.js'

export default {
    name: "StudentClasses",
    components: {
        SideBar,
    },
    beforeMount() {
        checkAuth()
    },
    data() {
        return {
            items: ['6to A', '6to B', '5to C'],
            headers: [
                {
                    text: 'id ',
                    align: 'start',
                    sortable: false,
                    value: 'name',
                },
                { text: 'DNI', value: 'calories', sortable: true, },
                { text: 'Apellido ', value: 'carbs' },
                { text: 'Nombre', value: 'fat' },
                { text: 'Asistencias (%)', value: 'iron' },
            ],
            desserts: [
                {
                    name: '1',
                    calories: 42512078,
                    fat: 'Martin',
                    carbs: 'Caceres',
                    iron: '87%',
                },
                {
                    name: '2',
                    calories: 42512077,
                    fat: 'Agustina',
                    carbs: 'Carnero',
                    iron: '50%',
                },
                {
                    name: '3',
                    calories: 42512076,
                    fat: 'Pilar',
                    carbs: 'Caceres',
                    iron: '33%',
                },
                {
                    name: '4',
                    calories: 42512075,
                    fat: 'Sergio',
                    carbs: 'Bachman',
                    iron: '80%',
                },
            ],
        }
    },
}
</script>

<style>
.filterSelect{
    margin-left: 5%;
    margin-right: 5%;
    margin-top: 10px;
}

.centerDiv {
    position: absolute;
    width: 100%;
    height: 100vh;
    background-color: rgb(255, 255, 255);
    border-top: 30px solid #b9e8ff;
}

.dataTable {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    margin-left: 5%;
    margin-right: 2%;
    margin-top: 2%;
}
</style>