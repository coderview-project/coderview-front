import axios from "axios";
import { useNavigate } from "react-router-dom";

const apiClient = axios.create({
    baseURL: 'https://localhost:7011',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

// const navigate = useNavigate(); 

export const evaluationService = {
    async addEvaluation(data) {
        console.log("esto viene del service", data)
        let response = await apiClient.post("/EvaluationData/SubmitEvaluation", data);

        if (response.status === 200) 
         {   
            alert("Evaluación registrado con éxito");  
            // navigate("/LoggedViewTest");
         } else { 
            alert("Algo salió mal...");
         }
    }
    
}

