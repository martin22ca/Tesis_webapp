<template>
    <section class="wrapper">
        <div id="formContent" class="fadeInDown">
            <form class="fadeIn second">
                <img class="fadeIn second" src='../assets/logo.png' id="icon" alt="User Icon" />
                <h1 class="fadeIn first">Sing up</h1>
                <input v-model="dni" class="inputs" type="text" placeholder="DNI" />
                <input v-model="name" class="inputs" type="text" placeholder="Nombre" />
                <input v-model="lastName" class="inputs" type="text" placeholder="Apellido" />
                <input v-model="email" class="inputs" type="text" placeholder="Email" />
                <input v-model="telephone" class="inputs" type="text" placeholder="Telefono" />
                <input v-model="username" class="inputs" type="text" placeholder="Username" />
                <input v-model="password" class="inputs" type="password" placeholder="Password" />
                <input v-model="passwordCon" class="inputs" type="password" placeholder="Confirmar Password" />
                <select>
                    <option> Preceptor</option>
                    <option> Profesor</option>
                    <option> Admin</option>
                </select>
                <button v-on:click="SingIN" @submit="checkForm" type="button" class="LogIButton">Sign In</button>
            </form>
        </div>
    </section>
</template>

<script>
import axios from 'axios'
export default {
    name: 'SingUp',
    data() {
        return {
            errors: [],
            username: "",
            password: "",
            passwordCon: "",
            dni: "",
            name: "",
            lastName: "",
            email: "",
            telephone: ""
        }
        
    },
    methods: {
        async SingIN() {

            if (this.telephone == '') {
                this.telephone = null
            }
            if (this.email == '') {
                this.email = null
            }
            let result = await axios.post('http://localhost:3001/register', {
                username: this.username,
                password: this.password,
                dni: this.dni,
                name: this.name,
                lastName: this.lastName,
                email: this.email,
                telephone: this.telephone
            });
            if (result.status == 200) {
                this.$router.push({ name: "LogIn" })
            }
            console.log(result.status)
        },
        checkForm: function (e) {
            if (this.username && this.password) {
                return true;
            }

            this.errors = [];

            if (!this.name) {
                this.errors.push('Name required.');
            }
            if (!this.age) {
                this.errors.push('Age required.');
            }

            e.preventDefault();
        }
    }
}

</script>

<style>

</style>