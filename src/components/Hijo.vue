<template>
  <div class="py-5 bg-primary">
        <h4>Componente Hijo: {{numero}}</h4>
        <h4>Nombre: {{nombre}}</h4>
       <div v-for="(item, index) of lista">
         <h4>Menu: {{lista[index].nombre}}</h4>
        </div>
      
    </div>
</template>
<script>
export default {
 props: ["numero","lista"],
  data() {
    return {
      nombre: "Carlos",
      Apellido: "La Hoz",
      Cedula: '402-3055439-2',
      Edad: 18
    };
  },
  //Mounted se ejecuta luego de que el DOM esta listo, sera luego de que las variables tengan sus datos
  mounted() {
    this.$emit("nombreHijo", this.nombre);
    this.$emit("a", this.Apellido);
    this.$emit("c", this.Cedula);
    this.$emit("e", this.Edad);
  },
};
</script>