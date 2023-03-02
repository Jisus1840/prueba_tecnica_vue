<template>
    <div>
        <div class="field">
            <label class="label">Nombre</label>
            <div class="control">
                <input type="text" class="input" placeholder="Nombre del usuario" v-model="userName">
            </div>
        </div>
        <div class="field">
            <label class="label">Apellido</label>
            <div class="control">
                <input type="text" class="input" placeholder="Apellido del usuario" v-model="userLastName">
            </div>
        </div>
        <div class="field">
            <label class="label">Contraseña</label>
            <div class="control">
                <input type="text" class="input" placeholder="Contraseña" v-model="userPassword">
            </div>
        </div>
        <div class="field">
            <label class="label">Nivel</label>
            <div class="control">
                <input type="text" class="input" placeholder="Nivel" v-model="userLevel">
            </div>
        </div>
        <div class="control">
            <button class="button is-success" @click="saveUser">Guardar</button>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "AddUser",
    data() {
        return {
            userName: "",
            userLastName: "",
            userPassword: "",
            userLevel: ""
        };
    },
    methods: {
        // Create new User
        async saveUser() {
            try {
                await axios.post("http:localgost:500/usuarios", {
                    userName: this.userName,
                    userLastName: this.userLastName,
                    userPassword: this.userPassword,
                    userLevel: this.userLevel
                });
                this.userName = "";
                this.userLastName = "";
                this.userPassword = "";
                this.userLevel = "";
            } catch (err) {
                console.log(err);
            }
        }
    }
}

</script>