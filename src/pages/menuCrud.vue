<template>
  <div class="q-pb-sm bg-secondary">
    <div class=" absolute" style="top: 5%; left: 19%; z-index: 1;">
        <q-btn
          dense 
          unelevated
          color="primary"
          icon="menu"
          @click="drawer = !drawer"
        />
      </div>
    <q-drawer v-model="drawer" :width="250" :breakpoint="50" overlay persistent elevated>
      <q-scroll-area
        style="
          height: calc(100% - 150px);
          margin-top: 150px;
          border-right: 1px solid #ddd;
        "
      >
        <q-list padding>
          <q-item active clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="home" />
            </q-item-section>

            <q-item-section> Productos </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="home" />
            </q-item-section>

            <q-item-section> Empleados </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="home" />
            </q-item-section>

            <q-item-section> Clientes </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="home" />
            </q-item-section>

            <q-item-section> Pedidos </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>

      <q-img
        class="absolute-top"
        src=""
        style="height: 150px; background-color: #ffd655"
      >
        <div class="absolute-bottom bg-transparent">
          <q-avatar size="70px" class="q-ml-md">
            <img
              src="https://img.freepik.com/vector-premium/icono-pizza-coleccion-comida-rapida-icono-comida-aislado_138676-504.jpg?w=740"
            />
          </q-avatar>
          <div class="text-weight-bold">AldiHuts</div>
          <div>Administracion</div>
        </div>
      </q-img>
    </q-drawer>
  
    <br />
    <div class="cajaContainer q-px-lg">
      <p class="text-h3 q-my-xl">Administrar Productos</p>

      <div id="AgregarP" class="flex justify-between">
        <input
          type="text" 
          v-model="nameCrud"
          placeholder="Nombre"
        />
        <input
          type="number" 
          v-model="priceCrud"
          placeholder="Precio"
        />
        <input
          type="url" 
          v-model="picCrud"
          placeholder="Url Imagen"
        />
        <q-btn @click="crudPush()" label="Agregar Producto" />
      </div>

      <h4>Productos agregados</h4>
      <div class="q-px-md flex justify-around text-center">
        <div
          class="q-my-sm cajaItem"
          v-for="(pro, index) in productos"
          :key="index"
        >
          <div class="image q-my-sm">
            <img :src="productos[index].imagen" />
          </div>
          <p class="text-subtitle1 text-bold">
            Nombre: {{ productos[index].nombre }}
            <br />
            Precio: RD${{ productos[index].precio }}
          </p>
          <div class="q-pb-sm flex justify-around">
            <q-btn label="Eliminar" color="primary" @click="confirm(index)" />
            <q-btn
              label="Editar"
              color="positive"
              @click="
                toolbar = true;
                SendcrudEdit(index);
              "
            />

          </div>
         
        </div>
      </div>
      <q-dialog seamless v-model="toolbar">
            <q-card>
              <q-toolbar class="bg-primary text-white">
                <q-avatar>
                  <img
                    src="https://img.freepik.com/vector-premium/icono-pizza-coleccion-comida-rapida-icono-comida-aislado_138676-504.jpg?w=740"
                  />
                </q-avatar>

                <q-toolbar-title
                  ><span class="text-weight-bold">AldiHuts</span> - Editar
                  Producto</q-toolbar-title
                >

                <q-btn flat round dense icon="close" v-close-popup />
              </q-toolbar>

              <q-card-section>
                <q-card-section class="q-pt-none">
                  <div id="EditarP" class="q-mt-md">
                    <table>
                      <tr>
                        <td>
                          <p class="text-h6" style="display: inline">
                            Nombre
                          </p>
                        </td>
                        <td>
                          :
                          <input
                            type="text"
                            v-model="nameEdit"
                            placeholder="Nombre"
                          />
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <p class="text-h6" style="display: inline">
                            Precio
                          </p>
                        </td>
                        <td>
                          :
                          <input
                            type="number"
                            v-model="priceEdit"
                            placeholder="Precio"
                          />
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <p class="text-h6" style="display: inline">
                            Url de imagen
                          </p>
                        </td>
                        <td>
                          :
                          <input
                            type="url"
                            v-model="picEdit"
                            placeholder="Url Imagen"
                          />
                        </td>
                      </tr>
                    </table>
                  </div>
                </q-card-section>

                <q-card-actions
                  align="right"
                  class="bg-white text-teal q-pt-none"
                >
                  <q-btn
                    @click="crudEdit(indexEdit)"
                    flat
                    label="Editar Producto"
                    v-close-popup
                  />
                </q-card-actions>
              </q-card-section>
            </q-card>
          </q-dialog>
    </div> 
  </div>
</template>

<script>
export default {
  data() {
    return {
      toolbar: false,
      modalEdit: false,
      productos: [],
      arrayprueba: [50, 58, 56],
      nameCrud: "",
      priceCrud: 0,
      picCrud: "",
      indexEdit: -1,
      nameEdit: "",
      priceEdit: 0,
      picEdit: "",
      drawer: true,
    };
  },
  computed: {},
  methods: {
    confirm(index) {
      this.$q
        .dialog({
          title: "Eliminar",
          message: "Quieres eliminar este elemento?",
          cancel: true,
          persistent: true,
        })
        .onOk(() => {
          this.crudSplice(index);
        })
        .onCancel(() => {
          // console.log('>>>> Cancel')
        })
        .onDismiss(() => {
          // console.log('I am triggered on both OK and Cancel')
        });
    },
    Alagree() {
      this.$q.notify({
        type: "positive",
        message: `Su producto se ha agregado con exito.`,
      });
    },
    Alupdate() {
      this.$q.notify({
        type: "info",
        message: `Su producto se ha editado con exito.`,
      });
    },
    Alsplice() {
      this.$q.notify({
        type: "negative",
        message: `Su producto se ha eliminado.`,
      });
    },
    localCrud() {
      localStorage.setItem("Crud-Ls", JSON.stringify(this.productos));
    },
    crudPush() {
      this.productos.push({
        nombre: this.nameCrud,
        precio: this.priceCrud,
        imagen: this.picCrud,
      });
      this.Alagree();
      this.localCrud();
      (this.nameCrud = ""), (this.priceCrud = 0), (this.picCrud = "");
    },
    crudEdit(index) {
      this.productos[index].nombre = this.nameEdit;
      this.productos[index].precio = this.priceEdit;
      this.productos[index].imagen = this.picEdit;
      this.Alupdate();
      this.localCrud();
      (this.nameEdit = ""),
        (this.priceEdit = 0),
        (this.picEdit = ""),
        (this.indexEdit = 0);
    },
    SendcrudEdit(index) {
      (this.indexEdit = index),
        (this.nameEdit = this.productos[index].nombre),
        (this.priceEdit = this.productos[index].precio),
        (this.picEdit = this.productos[index].imagen);
    },
    crudSplice(index) {
      this.productos.splice(index, 1);
      this.localCrud();
      this.Alsplice();
    },
  },
  created: function () {
    let datosDB = JSON.parse(localStorage.getItem("Crud-Ls"));
    if (datosDB === null) {
      this.productos = [];
    } else {
      this.productos = datosDB;
    }
  },
};
</script>
<style>
.cajaContainer {
  position: relative;
  left: 21.5%;
  width: 75%;
  background-color: white;
  border: 2px solid rgb(98, 99, 94);
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

.image img {
  position: relative; 
  width: 100%;
}
</style>


            <!-- <q-dialog v-model="modalEdit" full-width>
              <q-card>
                <q-card-section class="bg-primary text-white">
                  <div class="text-h6">Editar producto</div>
                </q-card-section>

                <q-card-section class="q-pt-none">
                  <div
                    id="EditarP"
                    class="q-mt-md row justify-around items-baseline">
                    <p class="text-h6">Nombre:</p>
                    <input
                      type="text"
                      v-model="nameEdit"
                      placeholder="Nombre"
                    />
                    <br>
                    <p class="text-h6 q-ml-xl">Precio:</p>
                    <input
                      type="number"
                      v-model="priceEdit"
                      placeholder="Precio"
                    />
                    <p class="text-h6 q-ml-xl">Url de imagen:</p>
                    <input
                      type="url"
                      v-model="picEdit"
                      placeholder="Url Imagen"
                    />
                  </div>
                </q-card-section>

                <q-card-actions
                  align="right"
                  class="bg-white text-teal q-pt-none"
                >
                  <q-btn
                    @click="crudEdit(indexEdit)"
                    flat
                    label="Editar Producto"
                    v-close-popup
                  />
                </q-card-actions>
              </q-card>
            </q-dialog> -->
