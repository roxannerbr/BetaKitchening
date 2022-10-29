const axios= require ('axios');

axios.get("http://localhost:3000/api/movies")
.then(response =>{
    console.log(responde.data);
})
.catch(error=> console.log(error))