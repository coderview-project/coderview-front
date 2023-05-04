import axios from "axios";

const apiClient = axios.create({
    baseURL: 'https://localhost:7011',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export const bootcampService = {

    async addBootcamp(bootcamp) {
        let response = await apiClient.post("/Bootcamp/AddBootcamp", bootcamp);

        if (response.status === 200) 
         {   
            alert("Bootcamp registrado con éxito");  
         } else { 
            alert("Algo salió mal...");
         }
    }
    
}