<template>
  <div class="bg-secondary">
    <br />
    <div class="cajaContainer">
      <h2 class="text-h2">Informacion de su Orden</h2>

      <div class="">
        <div class="flex justify-center items-baseline">
          <h6 class="text-h6">Nombre:</h6>
          <q-input v-model="nameClient" />

          <h6 class="text-h6">Direccion:</h6>
          <q-input v-model="nameClient" />

          <h6 class="text-h6">Forma de pago:</h6>
          <q-input v-model="nameClient" />

          <h6 class="text-h6">Tiempo de espera:</h6>
          <q-input v-model="nameClient" />

          <h6 class="text-h6">Donde se recojera</h6>
          <q-input v-model="nameClient" />

          <h6 class="text-h6">Comentarios</h6>
          <q-input v-model="nameClient" />
        </div>
        <q-btn color="primary" label="Agregar algo mas" />
        <h4 class="text-h4">Sus comestibles</h4>
        <div class="row">
          <div class="col-8">
            <div
              class="q-mt-sm col-12 row justify-center items-center"
              v-for="(carr, index) of orderCart"
              :key="index"
            >
              <div class="cajaItem">
                <img
                  style="width: 150px"
                  :src="orderCart[index].picData"
                  alt="foto"
                />
              </div>

              <div class="q-px-md col-8">
                <p class="text-h5 text-bold">
                  Nombre: {{ orderCart[index].nameData }}
                </p>
                <p class="text-h6">Precio: {{ orderCart[index].priceData }}</p>
                <q-btn @click="delCart(index)" label="Eliminar" />
              </div>

              <hr
                style="
                  width: 50%;
                  height: 1px;
                  position: relative;
                  left: -20%;
                  border: none;
                "
              />
            </div>
          </div>
          <div class="col-4">
            <h6 class="text-h6">Cupon de Descuentos</h6>

            <h6 class="text-h6">Subtotal: {{ totalOrder }}</h6>
            <h6 class="text-h6">ITBIS:</h6>
            <h6 class="text-h6">Envio:</h6>

            <h6 class="text-h6">Propina</h6>

            <q-btn color="primary" label="Realizar Orden" />
          </div>
        </div>
      </div>
    </div>
    <br />
  </div>
</template>

<script>
export default {
  data() {
    return { orderCart: [], nameClient: "", totalOrder: 0 };
  },
  created: function () {
    this.orderCart = this.newOrder; 
    this.actualizarTotal()
  },
  props: {
    newOrder: {
      type: Array,
    },
    newTotal: {
      type: Number,
    },

  },
  methods:{

    actualizarTotal() {
      this.totalOrder = 0;
      for (let i = 0; i < this.orderCart.length; i++) {
        this.totalOrder += parseInt(this.orderCart[i].priceData);
      }
    },
    delCart(index){
      this.orderCart.splice(index,1)
      this.actualizarTotal
      localStorage.setItem("Carr-Ls", JSON.stringify(this.orderCart));
      this.actualizar
    },

  },
  
};
</script>

<style>
.cajaContainer {
  position: relative;
  left: 5%;
  width: 90%;
  background-color: white;
  border: 2px solid rgb(98, 99, 94);
  border-radius: 0px;
  -webkit-border-radius: 10px;
}
.cajaItem {
  position: relative;
  width: 155px;
  height: 155px;
  background-color: rgb(255, 255, 255);
  border: 2px solid rgb(98, 99, 94, 0.7);
  border-radius: 0px;
  -webkit-border-radius: 10px;
}
.cajaItem img {
  position: absolute;
  top: 6%;
}
</style>