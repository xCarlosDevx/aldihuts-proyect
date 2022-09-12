<template>
  <div class="">
    <q-layout view="hHh lpR fFf">
      <q-header>
        <q-toolbar class="">
          <q-avatar class="q-ml-xl">
            <img
              src="https://img.freepik.com/vector-premium/icono-pizza-coleccion-comida-rapida-icono-comida-aislado_138676-504.jpg?w=740"
            />
          </q-avatar>
          <q-toolbar-title> AldiHuts </q-toolbar-title>
          <q-tabs align="right">
            <q-route-tab to="/" label="Inicio" />
            <q-route-tab :to="{ name: 'ordenes' }" label="Ordenar" /> 
            <q-route-tab :to="{ name: 'menuCrud' }" label="Gestionar" />
            <div style="position: relative">
              <q-avatar
                class="botoncito"
                font-size="13px"
                color="red"
                text-color="white"
                >{{carritoCount}}</q-avatar
              >
              <q-btn
                class="q-mr-sm"
                flat
                @click="drawerRight = !drawerRight"
                font-awesome-icon
                icon="fa-solid fa-cart-shopping"
              />
             
            </div>
          </q-tabs>
        </q-toolbar>
        <q-drawer
          side="right"
          v-model="drawerRight"
          :width="300"
          :breakpoint="500"
          persistent
          overlay
          elevated
        >
          <q-scroll-area class="fit bg-secondary cartItem text-center">
            <br />
            <p class="text-h4 text-bold">Carrito</p>
            <hr
              style="
                width: 80%;
                background-color: rgb(98, 99, 94, 0.7);
                height: 1px;
                border: none;
              "
            />
            <div class="q-px-md q-my-sm row items-center justify-between">
              <div class="col-">Imagen</div>
              <div class="col-">Nombre</div>
              <div class="col-">Precio</div>
              <div class="col-">Eliminar</div>
            </div>
            <div
              class="q-px-md q-my-sm row items-center justify-between"
              v-for="(carr, index) in carrito"
              :key="index"
            >
              <div class="col-">
                <img :src="carrito[index].picData" style="width: 45px" />
              </div>
              <div class="col-" style="width: 100px">
                {{ carrito[index].nameData }}
              </div>
              <div class="col-">RD${{ carrito[index].priceData }}</div>
              <div class="col-">
                <q-btn @click="dataSplice(index)" icon="close" flat />
              </div>
              <hr
                style="
                  width: 100%;
                  background-color: rgb(98, 99, 94, 0.7);
                  height: 1px;
                  border: none;
                "
              />
            </div>
            <br />
            <div class="ordenar items-center">
              <q-btn @click="sendOrder" color="primary" label="Realizar Orden" />
            </div>
            <div class="cajaTotal items-center">
              
              <p class="text-h5 text-white">Su total es RD${{ total }}</p>
              
            </div>
            
          </q-scroll-area>
        </q-drawer>
      </q-header>

      <q-page-container>
        <router-view />
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
export default {
  props: {
    MyCart: {
      type: Array,
    },
  },
  data() {
    return {
      drawerRight: false,
      carrito: [],
      total: 0,
      carritoCount:0
    };
  },
  created: function () {
    
    this.actualizar();
    this.actualizarTotal();
    this.carritoLength();

  },
  watch: {
    MyCart() {
      if (this.MyCart !== undefined) {
        this.carrito = this.MyCart;
        this.actualizarTotal();
        this.carritoLength();
        this.$router.go(-1)
       // this.$router.replace({ name: "ordenes" }).catch(() => {});
      }
    },
    carrito(){
     console.log('hola')
     this.carritoLength();
        this.actualizarTotal(); 
      }
  },
  methods: {
    sendOrder(){
      this.$router.push({name: 'orderStart', params: {newOrder: this.carrito, newTotal: this.total}})
    },
    carritoLength() {
      this.carritoCount = 0;
      for (let i = 0; i < this.carrito.length; i++) {
        this.carritoCount ++
      } 
    },
    dataSplice(index) {

      this.carrito.splice(index, 1); 
      
      this.carritoLength();
      this.actualizarTotal();
      localStorage.setItem("Carr-Ls", JSON.stringify(this.carrito));
      this.actualizar();
    },
    actualizarTotal() {
      this.total = 0;
      for (let i = 0; i < this.carrito.length; i++) {
        this.total += parseInt(this.carrito[i].priceData);
      }
    },
    actualizar() {
      let carrDB = JSON.parse(localStorage.getItem("Carr-Ls"));
      if (carrDB === null) {
        this.carrito = [];
      } else {
        this.carrito = carrDB;
      }
    },
  },
 
};
</script>

<style>
.cartItem {
  position: relative;
  background-color: #fff;
  color: black;
  border: 2px solid rgb(98, 99, 94, 0.7);
  border-radius: 0px;
  -webkit-border-radius: 5px;
}
.cajaTotal {
  height: 50px;
  width: 100%;
  background-color: rgb(44, 42, 42);
  position: absolute;
  bottom: 0px;
}
.cajaTotal p {
  position: absolute;
  top: 15%;
  left: 35px;
}
.ordenar {
  height: 40px;
  width: 100%;
  background-color: rgb(255, 255, 255);
  position: absolute;
  bottom: 50px;
}
.ordenar button {
  width: 100%;
  height: 40px;
}
.botoncito {
  width: 20px;
  height: 20px;
  position: absolute;
  top: -2px;
  left: 32px;
  z-index: 1;
}
</style>