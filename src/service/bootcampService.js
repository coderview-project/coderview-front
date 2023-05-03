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
    async getBootcamp() {
        let response = await apiClient.get("/Bootcamp/GetAllBootcamp");
        if (!response==200)
            {
                alert('No se encontró el bootcamp');
            };
        let allUser = response.data;
       
        return allUser;
    },
    async addBootcamp(bootcamp) {
        // let options = {
        //     headers: {
        //         'Authorization': "asdasdasd"
        //     }
        // }
        // let response = await apiClient.post("/Bootcamp/PostBootcamp", newBootcamp, options);

        // var bootcamp =  {
        //     "id": 0,
        //     "title": "string",
        //     "creatorId": 0,
        //     "startDate": "2023-04-27T09:58:56.760Z",
        //     "endDate": "2023-04-27T09:58:56.760Z",
        //     "isActive": true
        // }
        let response = await apiClient.post("/Bootcamp/PostBootcamp", bootcamp);

        if (response.status === 200) 
         {   
            alert("Bootcamp registrado con éxito");  
         } else { 
            alert("Algo salió mal...");
         }
    }
    
}