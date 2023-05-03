import { useEffect, useState } from "react";
import { evaluationHandler } from "../handler/evaluationHandler";
import WateringCan from "../assets/WateringCan.png"
import  '../Style/RangeSlider.css'


function MyEvaluations() {

  
    const [evaluationData, setEvaluationData] = useState([]);
    
    console.log("Esto viene del componente", evaluationData)
    
    useEffect(() => {
        async function fetchEvaluation() {
            const userId = JSON.parse(localStorage.getItem('userData')).item3
            let data = await evaluationHandler.loadEvaluation(userId);
            setEvaluationData(data);
        }
        fetchEvaluation();
    }, []);

    if (evaluationData == undefined || evaluationData == null || evaluationData.length == 0) {
        return (
            <p> No hemos encontrado ninguna evaluación. ¡Empieza a autoevaluarte! </p>
        )
    } else {
        return (
            <>
            <LoggedNavb/>
            <div className="flex flex-col font-poppins">
                <h1 className="text-center text-3xl"> MIS AUTOEVALUACIONES </h1> 
                    {evaluationData.map((evaluation, index) => {
                        return(
                            <>
                            <h1>  AUTOEVALUACIÓN {index + 1} </h1>
                            <div ClassName="flex flex-col justify-items-start mt-4">

                                <p>¿Cómo de capaz eres de planificar y gestionar un proyecto digital a través de marcos de trabajo?</p>                  
                                <img src={WateringCan} alt="Evaluation result icon" /><h1> {evaluation.projectM}</h1>

                                <p>¿Cómo de capaz eres de conceptualizar de manera funcional un proyecto digital?</p>
                                <img id="WateringCan" src={WateringCan} alt="Evaluation result icon" /><h1> {evaluation.funcTech1}</h1>

                                <p>¿Cómo de capaz eres de diseñar los procesos lógicos necesarios para un proyecto digital?</p>
                                <img id="WateringCan" src={WateringCan} alt="Evaluation result icon" /><h1> {evaluation.funcTech2}</h1> 

                                <p>¿Y de explicar la solución adoptada y presentar el trabajo realziado sintetizando sus planteamientos y resultados?</p>
                                <img id="WateringCan" src={WateringCan} alt="Evaluation result icon" /><h1> {evaluation.funcTech3}</h1> 

                                <p>¿Cómo de capaz eres de crear una UI web estática y adaptable?</p>
                                <img id="WateringCan" src={WateringCan} alt="Evaluation result icon" /><h1> {evaluation.front1}</h1> 

                                <p>¿Y de crear una UI web dinámica y adaptable?</p>                            
                                <img id="WateringCan" src={WateringCan} alt="Evaluation result icon" /><h1> {evaluation.front2}</h1> 

                                <p>¿Qué capaz eres de gestionar las estructuras, el flujo y el almacenamiento de datos de una web?</p>
                                <img id="WateringCan" src={WateringCan} alt="Evaluation result icon" /><h1> {evaluation.back1}</h1> 

                                <p>¿Y de de desarrollar algoritmos que ejecutan procesos lógicos?</p>
                                <img id="WateringCan" src={WateringCan} alt="Evaluation result icon" /><h1> {evaluation.back2}</h1> 

                                <p>¿Cómo de capaz eres de implementar arquitecturas web escalables?</p>
                                <img id="WateringCan" src={WateringCan} alt="Evaluation result icon" /><h1> {evaluation.archit}</h1> 

                                <p>¿Qué capaz eres de implementar prácticas y tecnologías para la gestión de versiones?</p>
                                <img id="WateringCan" src={WateringCan} alt="Evaluation result icon" /><h1> {evaluation.qa1}</h1>

                                <p>¿Cómo de capaz eres de implementar un código limpio y escalable?</p>
                                <img id="WateringCan" src={WateringCan} alt="Evaluation result icon" /><h1> {evaluation.qa2}</h1> 

                                <p>¿Y de implementar prácticas de QA para el aseguramiento y control de la calidad de una web?</p>
                                <img  id="WateringCan" src={WateringCan} alt="Evaluation result icon" /><h1> {evaluation.qa3}</h1> 
                            </div>
                            </>
                        )})}
                    
            </div>
            <Footer/>
            </>
        )
    }

}

export default MyEvaluations; 