<template>
    <section class="loginwrapper">
        <v-form id="formContent" class="fadeIn second" @submit.prevent="logIn" ref="form">
            <img class="fadeIn second" src='../assets/logo.png' id="icon" alt="User Icon" />
            <h1 class="fadeIn first title">Log In</h1>
            <v-text-field class="input" v-model="username" label="Username" :error-messages="usernameErrors" outlined />
            <v-text-field class="input" v-model="password" label="Password" :error-messages="passwordErrors" outlined
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" :type="show1 ? 'text' : 'password'"
                @click:append="show1 = !show1" />
            <button type="submit" class="LogIButton">Log In</button>
            <v-alert :value="errorVal" v-html="this.error" border="left" color="red" elevation="12" shaped text
                prominent type="error" width="100%" icon="mdi-alert"></v-alert>
        </v-form>
        <div class="padd"></div>
    </section>
</template>

<script>
import axios from 'axios'
import store from 'storejs';
import { validationMixin } from 'vuelidate'
import { required, maxLength, minLength } from 'vuelidate/lib/validators'

export default {
    mixins: [validationMixin],
    name: 'LogIn',
    data() {
        return {
            username: "",
            password: "",
            error: "",
            errorVal: false,
            show1: false,
        }
    },
    validations: {
        username: { required, maxLength: maxLength(10) },
        password: { required, minLength: minLength(6) },
        select: { required },
        checkbox: {
            checked(val) {
                return val
            },
        },
    },
    computed: {
        usernameErrors() {
            const errors = []
            if (!this.$v.username.$dirty) return errors
            !this.$v.username.maxLength && errors.push('No puede ser mas largo de 10 ')
            !this.$v.username.required && errors.push('Username es requerido')
            return errors
        },
        passwordErrors() {
            const errors = []
            if (!this.$v.password.$dirty) return errors
            !this.$v.password.required && errors.push('Password es requerido')
            !this.$v.password.minLength && errors.push('Password es al menos 6 caracteres de largo')
            return errors
        }
    },
    methods: {
        async logIn() {
            const pre = this.$v.$touch()
            console.log(pre)
            try {
                let result = await axios.post('http://localhost:3001/login', {
                    username: this.username,
                    password: this.password
                });
                store(result.data);
                if (result.status == 200) {
                    this.$router.push({ name: "DashBoard" })
                }

            } catch (error) {
                console.log(error['response']['data']['message'])
                this.errorVal = true
                this.error = error['response']['data']['message']
            }
        },
        async checkLoginAlready() {
            try {
                const token = store.get('accessToken');
                const id = store.get('userId')
                let result = await axios.get("http://localhost:3001/auth", {
                    params: {
                        'accesToken': token,
                        'userId': id
                    }
                });
                if (result.status == 200) {
                    this.$router.go({ name: "DashBoard" })
                }

            } catch (error) {
                console.log(error)
            }
        },
    },
    beforeMount() {
        this.checkLoginAlready()
    }
}
</script>

<style>
.title {
    padding: 20px;
    font-size: larger;
    font-weight: 500;
}

.loginwrapper {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100vh;
    background-color: #B2EBF2;
    padding: 10px;
}

#formContent {
    -webkit-border-radius: 10px 10px 10px 10px;
    border-radius: 10px 10px 10px 10px;
    background: #fff;
    padding: 20px;
    width: 90%;
    max-width: 450px;
    display: flex;
    flex-direction: column;
    position: relative;
    -webkit-box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);
    box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);
    text-align: center;
}

/* FORM TYPOGRAPHY*/

.input {
    color: black;
    padding: 20px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 13px;
    -webkit-border-radius: 5px 5px 5px 5px;
    border-radius: 5px 5px 5px 5px;
    margin: 10px 30px 10px 30px;
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -ms-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
}

input:focus {
    background-color: #fff;
    border-bottom: 2px solid #5fbae9;
}

input:placeholder {
    color: #cccccc;
}

.LogIButton {
    background-color: #56baed;
    width: auto;
    border: none;
    color: white;
    padding: 15px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    text-transform: uppercase;
    font-size: 10px;
    -webkit-box-shadow: 0 10px 30px 0 rgba(95, 186, 233, 0.4);
    box-shadow: 0 10px 30px 0 rgba(95, 186, 233, 0.4);
    -webkit-border-radius: 5px 5px 5px 5px;
    border-radius: 5px 5px 5px 5px;
    margin: 10px 0px 40px 0px;
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -ms-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
}

.LogIButton:hover {
    background-color: #119adf;
}

#icon {
    width: 50%;
    padding: 40px;
    align-self: center;
}
</style>