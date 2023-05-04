import axios from "axios";

const apiClient = axios.create({
    baseURL: 'https://localhost:7011',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
          
    }
})

export const userService = {
    async getUser() {
        let response = await apiClient.get("/User/GetAllUsers");
        if (!response==200)
            {
                alert('No se encontraron usuarios');
            };
        let allUser = response.data;
       
        return allUser;
    },
    async getUser(id) {
        let response = await apiClient.get("/User/GetUserById?id=" + id);
        if (!response == 200)
            throw {
                status: response.status,
                statusText: "Not found",
            };
        let user = response.data;
        return user;
    },
    async addUser(newUserRequestModel){
        let options = {
            url: 'User/PostUser',
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                // 'Authorization': 
            }
        }
        let response = await apiClient.post("/User/AddUser", newUserRequestModel, options);
        if (response.status === 200) 
         {   
            alert("Usuario registrado con éxito");  
         } else { 
            alert("Algo salió mal...");
         }

    },
    async addInstructor(newUserRequestModel) {
        let options = {
            url: 'User/PostInstructor',
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                // 'Authorization': 
            }
        }
        let response = await apiClient.post("/User/PostInstructor", newUserRequestModel, options);
        if (response.status === 200) 
         {   
            alert("Formador registrado con éxito");  
         } else { 
            alert("Algo salió mal...");
         }

    },
    async deleteUser(id) {
        await apiClient.delete("/User/DeactivateUser?id=" + id)
    },
    async updateUser(id, updatedUserRequestModel){
        await apiClient.patch("/User/Patch" + id, updatedUserRequestModel)
    }
}