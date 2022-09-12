
export const apiExample = axios.get('https://jsonplaceholder.typicode.com/posts').then(response => {

    return response
})

//metodo promise
axios.get('linkApi/post?api_key=llave$Language=es-DO').then((resp) => {
    console.log(resp.data.results)
}).catch((error) => {
    console.log(error)
});


export const exampleApi = axios.get('http://webcode.me').then(resp => {
    console.log("xddd",resp);
})
//metodo await
import axios  from  'axios'
const obtenerApi = async () => {
try{
    const respuesta = await axios.get('apilink/post', {
        params: {
            api_key: 'llave api',
            languaje: 'lenguaje que usara el parametro',
        },
        headers: {
            'Authorization': 'Bearer token....',
        }
    })
    console.log(respuesta);
}catch (error){
console.log(error);
}
}
// obtenerApi();

async function doGetRequest(id) {

    let res = await axios.get(`http://webcode.me/${id}`);
  
    // let data = res.data;
    // console.log(data);
    return res
  }

const pokemonApi = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon'
})

export const pokemonApiGet = ()=>{
    console.log("enviar");
};

export default pokemonApi 