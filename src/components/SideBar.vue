<template>
    <div class="sideBarContainer">
        <v-navigation-drawer class="light-blue darken-3" dark permanent expand-on-hover>
            <v-list nav dense height="100%">
                <v-list-item class="px-2">
                    <v-list-item-icon>
                        <v-icon x-large>mdi-account-circle</v-icon>
                    </v-list-item-icon>
                </v-list-item>
                <v-list-item link>
                    <v-list-item-content>
                        <v-list-item-title class="text-h6" >
                            Juan
                        </v-list-item-title>
                        <v-list-item-subtitle >
                            Perez
                        </v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
                <v-divider></v-divider>
                <v-list-item link>
                    <v-list-item-icon>
                        <v-icon>mdi-calendar</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Calendario Asistencias</v-list-item-title>
                </v-list-item>
                <v-list-item link v-on:click="goClasses()">
                    <v-list-item-icon>
                        <v-icon>mdi-account-school</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Cursos</v-list-item-title>
                </v-list-item>
                <v-list-item link v-on:click="goAttendence()">
                    <v-list-item-icon>
                        <v-icon>mdi-clipboard-list</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Asistencia Hoy</v-list-item-title>
                </v-list-item>
                <v-list-item link v-on:click="goManagement()">
                    <v-list-item-icon>
                        <v-icon>mdi-cog</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Configuracion</v-list-item-title>
                </v-list-item>
                <v-list-item link v-on:click="closeSession()" class="mt-auto bottomList" :align-self="end">
                    <v-list-item-icon>
                        <v-icon>mdi-exit-to-app</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Cerrar sesion</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script>
import store from 'storejs';
export default {
    name: "SideBar",
    data() {
        return {
            firstName: store.get('first_name'),
            lastName: store.get('last_name')
        }
    },
    methods: {
        async closeSession() {
            try {
                store.clear()
                this.$router.push({ name: "LogIn" })
                this.$router.go()
            } catch (error) {
                console.log(error)
            }
        },
        async goClasses() {
            this.$router.push({ name: "StudentClasses" })
            this.$router.go()
        },
        async goAttendence() {
            this.$router.push({ name: "AttendenceDay" })
            this.$router.go()
        },
        async goManagement(){
            this.$router.push({ name: "ManagementScreen" })
            this.$router.go()
        }
    },
}

</script>

<style>
.sideBarContainer{
    position: fixed;
    height: 100vh;
}
.bottomList {
    position: fixed !important;
    bottom: 0 !important;
    width: 100%;
}
</style>