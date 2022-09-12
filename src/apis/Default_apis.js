import axios from 'axios'
const url = 'https://jsonplaceholder.typicode.com/posts';
class ownApis {
    //Async
    async getApi (){
        const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts');
        console.log(data)
        return data
    }
    
    async getApiId(id){
        const {data} = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
        console.log(data)
        return data    
    }

    async postApi(body){
        const {data} = await axios.post('https://jsonplaceholder.typicode.com/posts', body);
        console.log("Datos enviados", body);
        return data   
    }

    async putApi(id,body){
        const {data} = await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, body);
        console.log("Datos actualizados")
        return data   
    }

    async delApi(id){
        const {data} = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
        console.log("Datos eliminados")
        return data   
    }

    //Promise

    pGetApi (){
        axios.get(url).then(respuesta =>{
            console.log(respuesta.data)
            return respuesta
        }).catch(error => {
            console.log(error)
        });
    }
    pGetApiId(id){
        axios.get(`${url}/${id}`).then(respuesta => {
            console.log(respuesta.data)
            return respuesta
        }).catch(error => {
            console.log(error)
        });
    }
    pPostApi(body){
        axios.post(`${url}`,body).then(respuesta => {
            console.log(respuesta)
            return respuesta
        }).catch(error => {
            console.log(error)
        })
    }
    pPutApi(id,body){
        axios.put(`${url}/${id}`,body).then(respuesta => {
            console.log(respuesta)
            return respuesta
        }).catch(error => {
            console.log(error)
        })
    }
    pDelApi(id){
        axios.delete(`${url}/${id}`).then(respuesta => {
            console.log(respuesta.data)
            return respuesta
        }).catch(error => {
            console.log(error)
        });
    }

}

export default new ownApis