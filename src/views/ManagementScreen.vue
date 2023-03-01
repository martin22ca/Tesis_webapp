<template>
    <div class="dashboardWrapper">
        <div class="centerDiv">
            <div class="dataTable">
                <v-data-table :headers="headers" :items="desserts" sort-by="calories" class="elevation-1">
                    <template v-slot:top>
                        <v-toolbar flat>
                            <v-toolbar-title>Empleados</v-toolbar-title>
                            <v-divider class="mx-4" inset vertical></v-divider>
                            <v-spacer></v-spacer>
                            <v-dialog v-model="dialog" max-width="500px">
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
                                        Empleado Nuevo
                                    </v-btn>
                                </template>
                                <v-card>
                                    <v-card-title>
                                        <span class="text-h5">{{ formTitle }}</span>
                                    </v-card-title>

                                    <v-card-text>
                                        <v-container>
                                            <v-row>
                                                <v-col cols="12" sm="6" md="4">
                                                    <v-text-field v-model="editedItem.id" label="Id">
                                                    </v-text-field>
                                                </v-col>
                                                <v-col cols="12" sm="6" md="4">
                                                    <v-text-field v-model="editedItem.dni" label="DNI">
                                                    </v-text-field>
                                                </v-col>
                                                <v-col cols="12" sm="6" md="4">
                                                    <v-text-field v-model="editedItem.name" label="Nombre">
                                                    </v-text-field>
                                                </v-col>
                                                <v-col cols="12" sm="6" md="4">
                                                    <v-text-field v-model="editedItem.lastname" label="Apellido">
                                                    </v-text-field>
                                                </v-col>
                                                <v-col cols="12" sm="6" md="4">
                                                    <v-text-field v-model="editedItem.username" label="Username">
                                                    </v-text-field>
                                                </v-col>
                                                <v-col cols="12" sm="6" md="4">
                                                    <v-text-field v-model="editedItem.password" label="Password">
                                                    </v-text-field>
                                                </v-col>
                                                <v-col cols="12" sm="6" md="4">
                                                    <v-text-field v-model="editedItem.rol" label="Rol">
                                                    </v-text-field>
                                                </v-col>
                                            </v-row>
                                        </v-container>
                                    </v-card-text>

                                    <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn color="blue darken-1" text @click="close">
                                            Cancel
                                        </v-btn>
                                        <v-btn color="blue darken-1" text @click="save">
                                            Save
                                        </v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-dialog>
                            <v-dialog v-model="dialogDelete" max-width="500px">
                                <v-card>
                                    <v-card-title class="text-h5">Are you sure you want to delete this item?
                                    </v-card-title>
                                    <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
                                        <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
                                        <v-spacer></v-spacer>
                                    </v-card-actions>
                                </v-card>
                            </v-dialog>
                        </v-toolbar>
                    </template>
                    <template v-slot:[`item.actions`]="{ item }">
                        <v-icon small class="mr-2" @click="editItem(item)">
                            mdi-pencil
                        </v-icon>
                        <v-icon small @click="deleteItem(item)">
                            mdi-delete
                        </v-icon>
                    </template>
                    <template v-slot:no-data>
                        <v-btn color="primary" @click="initialize">
                            Reset
                        </v-btn>
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
    name: "ManagementScreen",
    components: {
        SideBar,
    },
    beforeMount() {
        checkAuth()
    },
    data: () => ({
        dialog: false,
        dialogDelete: false,
        headers: [
            {
                text: 'ID',
                align: 'start',
                sortable: false,
                value: 'id',
            },
            { text: 'DNI', value: 'dni' },
            { text: 'Nombre', value: 'name' },
            { text: 'Apellido', value: 'lastname' },
            { text: 'Rol', value: 'rol' },
            { text: 'Username', value: 'username' },
            { text: 'Password', value: 'password' },
            { text: 'Actions', value: 'actions', sortable: false },
        ],
        desserts: [],
        editedIndex: -1,
        editedItem: {
            id: '',
            dni: '',
            name: '',
            lastname: '',
            rol: '',
            username: "",
            password: ""
        },
        defaultItem: {
            id: '',
            dni: '',
            name: '',
            lastname: '',
            rol: '',
            username: "",
            password: ""
        },
    }),

    computed: {
        formTitle() {
            return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
        },
    },

    watch: {
        dialog(val) {
            val || this.close()
        },
        dialogDelete(val) {
            val || this.closeDelete()
        },
    },

    created() {
        this.initialize()
    },

    methods: {
        initialize() {
            this.desserts = [
                {
                    id: '1',
                    dni: 42512078,
                    name: 'Martin',
                    lastname: 'Caceres',
                    rol: 'Admin',
                    username: "marti22ca",
                    password: "Mpooassdfsjknferoifpqw[nfeiq2342mpnhpasdasd()(03423vf&a723xsdf&)"
                },
                {
                    id: '2',
                    dni: 42512078,
                    name: 'Juan',
                    lastname: 'Perez',
                    rol: 'Preceptor',
                    username: "JuanPerez55",
                    password: "$2a$08$oefG5rInUDL/2yoO4MiTEO5GGp5cQcJ13in0e78aJix8I//mNEvqO"
                },
            ]
        },

        editItem(item) {
            this.editedIndex = this.desserts.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.dialog = true
        },

        deleteItem(item) {
            this.editedIndex = this.desserts.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.dialogDelete = true
        },

        deleteItemConfirm() {
            this.desserts.splice(this.editedIndex, 1)
            this.closeDelete()
        },

        close() {
            this.dialog = false
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem)
                this.editedIndex = -1
            })
        },

        closeDelete() {
            this.dialogDelete = false
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem)
                this.editedIndex = -1
            })
        },

        save() {
            if (this.editedIndex > -1) {
                Object.assign(this.desserts[this.editedIndex], this.editedItem)
            } else {
                this.desserts.push(this.editedItem)
            }
            this.close()
        },
    },
}
</script>

<style>
.expRow {
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