<template>
  <div>
    <h1>Login</h1>
    <form
      v-on:submit.prevent="realizarForm()"
      style="width: 500px; margin: 0 auto"
    >
      <label class="form-label">User</label>
      <input type="text" class="form-control" v-model="name" />
      <label class="form-label">Password</label>
      <input type="text" class="form-control" v-model="passwd" />
      <button class="btn btn-success">Login</button>
    </form>
  </div>
</template>

<script>
import ServiceEmpleados from "@/services/ServiceEmpleados";
import Global from "./../Global";
const servicio = new ServiceEmpleados();

export default {
  name: "HomeEmpleados",
  data() {
    return {
      name: "",
      passwd: "",
      usuario: { userName: "", password: "" },
    };
  },
  methods: {
    realizarForm() {
      this.usuario = { userName: this.name, password: this.passwd };
      console.log(this.usuario);
      servicio.autorizarEmpleados(this.usuario).then((response) => {
        Global.autoriza = response.data.response;
        console.log(response.data.response);
      });
    },
  },
};
</script>