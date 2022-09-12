<template>
  <div class="bg-secondary">
    <br /><br /><br />
    <div class="q-px-lg flex column flex-center cajaContainer">
      <p class="text-h3 bg-ackerman q-ma-xl">Bienvenido a Aldi-Huts</p>

      <!-- <img :src="pic" alt="La imagen de tu pokemon" style="width:200px;">
      <p class="text-h5"> {{id}} </p>
      <p class="text-h5"> {{name}} </p>
      
      <button @click="getPokemon"> Dale aqui ven, atrevete montro</button> -->
      <img
        class=""
        src="https://img.freepik.com/vector-premium/icono-pizza-coleccion-comida-rapida-icono-comida-aislado_138676-504.jpg?w=740"
        style="width: 300px; height: 300px"
      />
      <p class="text-h4 flex flex-center">
        En esta pagina podra pedir nuestras pizzas mas especiales hacia su hogar
      </p>
      <p class="text-h5">Sobre Nosotros:</p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta quo non
        ab accusamus ex quae eum ea possimus adipisci doloribus. Exercitationem,
        natus quod. Alias delectus perspiciatis fugiat porro quos temporibus.
      </p>
      <p class="text-h5">Mision</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ex
        officiis deserunt rerum corporis neque consequatur impedit minima,
        veniam aperiam mollitia, tenetur, a nostrum enim. Dolorem dignissimos
        dicta ad nobis.
      </p>
      <p class="text-h5">Vision</p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores
        consectetur, numquam qui vero nostrum praesentium ex, quasi illum vel
        cupiditate inventore nisi atque voluptatum minus? Corporis eius cum quas
        dolores?
      </p>
      <p class="text-h5">Consultar Api por ID:</p>
      <input type="number" v-model="id" />
      <button @click="recibirapi()">Click</button>
      <button @click="elimapi()">Click</button>

      <p class="text-h5">Enviar a la Api:</p>
      <input type="text" v-model="body.title" />
      <input type="text" v-model="body.body" /> 
      <input type="number" v-model="body.userId" />
      <button @click="enviarapi()">Click</button>
      <button @click="editarapi">Click</button>
    </div>
    <br />
  </div>
</template>

<script>
  import ownApis from 'src/apis/Default_apis'
  // import {pokemonApi, exampleApi, apiExample} from 'src/apis/all_apis.js'
export default {
  name: "home",
  data(){
    return{
      pic: false,
      name: '',
      id: 2,
      body:{
        title:'', 
        body: '',
        userId: 0
      }
    }
  },
  mounted () {
    
    // ownApis.pGetApi()
    // exampleApi
    // apiExample
    
    // this.getPokemon()
  //   this.Recibir()
  },
  methods:{
    recibirapi(){
      ownApis.getApiId(this.id) 
    },
    enviarapi(){
      ownApis.postApi(this.body)
    },
    editarapi(){
      ownApis.putApi(this.id,this.body)
    },
    elimapi(){
      ownApis.delApi(this.id)
    }
    // async Recibir(){
    //     const {data} = await pokemonApi.get("/1")
    //     console.log(data)
    // },


    // async getPokemon(){
      //Axios me trae 4 objetos por defectos, debo decirle cual quiero.
      // const { data } = await pokemonApi.get('/55');
      // this.pic = data.sprites.front_default;
      // this.name = data.name;
      // this.id = data.id;

      // console.log(data, this.name);
    // }
  }
};
</script>

<style lang="scss">
// para sass debo descargar la dependencia de Loader Sass
//  .ackerman{
//   background: $ackerman;
//  }
.cajaContainer {
  position: relative;
  left: 5%;
  width: 90%;
  background-color: white;
  border: 2px solid rgb(98, 99, 94);
  border-radius: 0px;
  -webkit-border-radius: 10px;
}
</style> 
