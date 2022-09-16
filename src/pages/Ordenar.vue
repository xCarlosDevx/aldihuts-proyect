<template>
  <div class="q-pt-sm bg-secondary">
    <h2 class="text-white title-main text-center">¡ORDENA YA!!</h2>
    <div class="flex justify-around cajaMenu">
      <div
        class="q-my-md cajaItem"
        v-for="(pro, index) in productos"
        :key="index"
      >
      
<div class="image q-my-sm">
  <img :src="productos[index].imagen" />
</div>

        <div class="text-center">
          <p class="text-h5 text-bold">{{ productos[index].nombre }}</p>
          <p class="text-subtitle1 text-weight-medium text-italic">
            RD${{ productos[index].precio }}
          </p>
          <q-btn class="q-mb-sm"
            outline
            color="primary"
            label="Al carrito"
            @click="dataPush(index)"
          />
        </div>
      </div>
    </div>
    <br />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      productos: [],
      nameData: "",
      priceData: "",
      picData: "",
      carrito: [],
      total: 0,
    };
  },
  created: function () {
    this.actualizarMenu();
    this.actualizarCarrito();
  },
  methods: {
    actualizarMenu() {
      let crudDB = JSON.parse(localStorage.getItem("Crud-Ls"));
      if (crudDB === null) {
        this.productos = [];
      } else {
        this.productos = crudDB;
      }
    },
    actualizarCarrito() {
      let carrDB = JSON.parse(localStorage.getItem("Carr-Ls"));
      if (carrDB === null) {
        this.carrito = [];
      } else {
        this.carrito = carrDB;
      }
    },
    EnviarRuta() {
      this.$router.push({ name: "home", params: { MyCart: this.carrito } });
    },
    triggerPositive() {
      this.$q.notify({
        type: "positive",
        message: `Producto agregado al carrito.`,
      });
    },

    triggerNegative() {
      this.$q.notify({
        type: "negative",
        message: `This is a "negative" type notification.`,
      });
    },

    triggerWarning() {
      this.$q.notify({
        type: "warning",
        message: `This is a "warning" type notification.`,
      });
    },

    dataPush(index) {
      this.actualizarCarrito();
      this.total = 0;
      this.carrito.push({
        nameData: this.productos[index].nombre,
        priceData: this.productos[index].precio,
        picData: this.productos[index].imagen,
      });
      for (let i = 0; i < this.carrito.length; i++) {
        this.total += parseInt(this.carrito[i].priceData);
      }
      this.triggerPositive();
      localStorage.setItem("Carr-Ls", JSON.stringify(this.carrito));
      this.EnviarRuta();
    },
    dataSplice(index) {
      this.carrito.splice(index, 1);
      this.total = 0;
      for (let i = 0; i < this.carrito.length; i++) {
        this.total += parseInt(this.carrito[i].priceData);
      }
      localStorage.setItem("Carr-Ls", JSON.stringify(this.carrito));
    },
  },
};
</script>

<style>
/*Estilo del texto parallax */
.title-main {
  position: relative;
  left: 30%;
  width: 50%;
  padding: 3%;
  background: rgba(0, 0, 0, 0.5);
}
.parallax {
  background-image: url("https://img.freepik.com/vector-premium/icono-pizza-coleccion-comida-rapida-icono-comida-aislado_138676-504.jpg?w=740");
  background-size: cover;
  background-position: 0% 20%;
  background-attachment: fixed;
}
.cajaMenu {
  position: relative;
  left: 5%;
  width: 90%;
  background-color: white;
  border: 2px solid rgb(98, 99, 94, 0.7);
  border-radius: 0px;
  -webkit-border-radius: 10px;
}
.cajaItem { 
  width: 26%;
  background-color: white;
  border: 2px solid rgb(98, 99, 94, 0.7);
  border-radius: 0px;
  -webkit-border-radius: 10px;
}
.image img{
  position: relative;
  left: 1%;
  width: 98%;
}
</style>
