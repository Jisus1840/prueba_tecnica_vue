<template>
    <div>
        <router-link :to="{ name: 'Create' }" class="button is-success mt-5">Add New</router-link>
        <table class="table is-striped is-bordered mt-2 is-fullwidth">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Usuario</th>
                    <th>Nivel</th>
                    <th class="has-text-centered">Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in items" :key="item.id">
                    <td>{{ item.nombre }}</td>
                    <td>{{ item.apellido }}</td>
                    <td>{{ item.usuario }}</td>
                    <td>{{ item.nivel }}</td>
                    <td class="has-text-centered">
                        <router-link :to="{ name: 'Edit', params: { id: item.id } }"
                            class="button is-info is-small">Edit</router-link>
                        <a class="button is-danger is-small" @click="deleteUsuarioById(item.id)">Delete</a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "UserLit",
    data() {
        return {
            items: [],
        };
    },
    created() {
        this.getUsuarios();
    },
    methods: {
        async getUsuarios() {
            try {
                const response = await axios.get("http://localhost:5000/usuarios");
                this.items = response.data;
            } catch (err) {
                console.log(err);
            }
        },
        async deleteUsuarioById(id) {
            try {
                await axios.delete(`http://localhost:5000/usuarios/${id}`);
                this.getUsuarios();
            } catch (err) {
                console.log(err);
            }
        }
    }
}
</script>