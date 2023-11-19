<template>
  <div>
    <h1>Empleados 2</h1>
    <ul>
      <li v-for="empleado in empleados" :key="empleado">
        {{ empleado.apellido }}
      </li>
    </ul>
  </div>
</template>

<script>
import ServiceEmpleados from "@/services/ServiceEmpleados";
const servicio = new ServiceEmpleados();
export default {
  name: "ListaEmpleados",
  mounted() {
    servicio.getEmpleados().then((response) => {
      this.empleados = response.data;
    });
  },
  data() {
    return {
      empleados: [],
    };
  },
};
</script>