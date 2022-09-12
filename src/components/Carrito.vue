<template>
  <div>
    <div class="container">
      <h1>Carrito</h1>
      <div
        class="float-left q-mx-md"
        v-for="(carr, index) in carrito"
        :key="index"
      >
        <p>{{ carrito[index].nameData }} - RD${{ carrito[index].priceData }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      datos: [], 
      carrito: []
    };
  },
   created: function () {
    this.actualizar();
   },
  methods: {
    actualizar() {
      this.datos = JSON.parse(localStorage.getItem("Carr-Ls"));
      if (this.datos === null) {
        this.carrito = [];
      } else {
        this.carrito = this.datos;
      }
      console.log(this.datos)
    },
  },
};
</script>

