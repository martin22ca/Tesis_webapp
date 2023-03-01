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
                <v-data-table :expanded.sync="expanded" item-key="name" show-expand :headers="headers" :items="desserts"
                    class="elevation-1 data">
                    <template v-slot:expanded-item="{ headers, item }">
                        <td :colspan="2 * headers.length">
                            <div class="expRow">
                                <v-row align="center">
                                    <v-checkbox :label="`Justificado`" :value="item.justified" v-model="item.justified" hide-details class="shrink mr-2 mt-0"></v-checkbox>
                                    <v-textarea :disabled="!item.justified" :label="`Commentario`" :value="item.comment" :height:="5" >
                                    </v-textarea>
                                </v-row>
                            </div>
                        </td>
                    </template>
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
    name: "AttendenceDay",
    components: {
        SideBar,
    },
    beforeMount() {
        checkAuth()
    },
    data() {
        return {
            expanded: [],
            enabled: false,
            singleExpand: false,
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
                { text: 'Presente', value: 'presente' },
                { text: 'Horario entrada', value: 'horario' },
                { text: '', value: 'data-table-expand' }
            ],
            desserts: [
                {
                    name: '1',
                    calories: 42512078,
                    fat: 'Martin',
                    carbs: 'Caceres',
                    presente: 'Ausente',
                    horario: '07:10',
                    justified: false,
                    comment: 'No comment'
                },
                {
                    name: '2',
                    calories: 42512077,
                    fat: 'Agustina',
                    carbs: 'Carnero',
                    presente: 'Tarde',
                    horario: '07:05',
                    justified: false,
                    comment: 'No comment'
                },
                {
                    name: '3',
                    calories: 42512076,
                    fat: 'Pilar',
                    carbs: 'Caceres',
                    presente: 'Ausente',
                    horario: '. . . . . . ',
                    justified: false,
                    comment: 'No comment'
                },
                {
                    name: '4',
                    calories: 42512075,
                    fat: 'Sergio',
                    carbs: 'Bachman',
                    presente: 'Presente',
                    horario: '08:10',
                    justified: true,
                    comment: 'Fui al medico'
                },
            ],
        }
    },
}
</script>

<style>
.expRow{
    padding: 15px;
}
.filterSelect {
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