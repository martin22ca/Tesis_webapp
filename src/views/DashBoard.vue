<template>
    <div class="dashboardWrapper">
        <v-img class="img" height="100%" src='../assets/Aula.png'></v-img>
        <SideBar class="inner" />
    </div>
</template>

<script>
import SideBar from '../components/SideBar.vue'
import checkAuth from '../helpers/auth.js'

export default {
    name: "DashBoard",
    components: {
        SideBar,
    },
    beforeMount() {
        checkAuth()
    },
    data() {
        return {
            dialog: false,
        }
    },
    methods: {

    },
}
</script>

<style>
.img {
    position: absolute;
    border-top: 20px solid #b9e8ff;
    border-right: 20px solid #b9e8ff;
    border-top-right-radius: 10%;
}

.btnHadn {
    top: 50%;
    right: 50%;
    width: 2px;
    position: absolute;
    border-top-right-radius: 10%;

}

.Welcome {
    position: absolute;
    margin: 20px;
    padding: 5px;
    border-radius: 10%;
    z-index: 99;
    background-color: #17658c;
}

.dashboardWrapper {
    background-size: cover;
    background-color: #b9e8ff;
    top: 0%;
    height: 100vh;
    box-sizing: border-box;
}

.menuBar {
    margin-bottom: 20px;
    position: absolute;
    background-color: rgb(161, 88, 88);
    display: inline-flex;
    width: 80%;
    height: 20vh;
    border-radius: 20px;
    justify-content: center;
    z-index: 99;
    bottom: 0;
}
</style>