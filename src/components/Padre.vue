<template>
    <div class="p-5 bg-dark text-white">
        <h2> Componente Padre: {{numeroPadre}} </h2>
        <button class="btn btn-danger" @click="numeroPadre++"> + </button> 
      
        <!--Con el : frente a la variable le estaremos mandando la variable al componente hijo -->
        <!--Si no lo usamos solo estariamos escribiendo un string-->
        <!--Los eventos como el Click se reciben con el @-->
        <!--La variable nombrePadre sera igual al $event que estaremos recibiendo del hijo-->
        {{nombrePadre}} -
        {{apellidoHijo}} -
        {{cedulaHijo}} -
        {{edadHijo}} -
        <hijo :numero="numeroPadre" :lista="productos" @nombreHijo="nombrePadre = $event" 
        @a="apellidoHijo = $event" @c="cedulaHijo = $event" @e="edadHijo = $event"></hijo> 
        

       
    </div>
</template>

<script> 
import Hijo from 'src/components/Hijo.vue';
export default {
    components:{
Hijo
  },
  data() {
    return {
      productos: [
        {
          nombre: "Pizza Italiana",
          precio: 500,
          foto: "https://cache.dominos.com/olo/6_90_4/assets/build/market/DO/_es/images/img/products/thumbnails/S_PIZIT.jpg",
        },
        {
          nombre: "Pizza Deluxe",
          precio: 570,
          foto: "https://cache.dominos.com/olo/6_90_4/assets/build/market/DO/_es/images/img/products/thumbnails/S_PIZDX.jpg",
        },
        {
          nombre: "Pizza 2 Sabores",
          precio: 800,
          foto: "https://cache.dominos.com/olo/6_90_4/assets/build/market/DO/_es/images/img/products/thumbnails/S_PIZDOBL.jpg",
        },
      ],
      numeroPadre: 0,
      nombrePadre: "",
      apellidoHijo:"",
      cedulaHijo:"",
      edadHijo:"",
    };
  },
}
</script>