import axios from "axios";

const apiClient = axios.create({
    baseURL: 'https://localhost:7011',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
          
    }
})

export const bootcampService = {
    async postBootcamp(newBootcamp) {
        let options = {
            url: 'Bootcamp/PostBootcamp',
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                // 'Authorization': 
            }
        }
        let response = await apiClient.post("/Bootcamp/PostBootcamp", newBootcamp, options);
        if (response.status === 200) 
         {   
            alert("Bootcamp registrado con éxito");  
         } else { 
            alert("Algo salió mal...");
         }

    }
}