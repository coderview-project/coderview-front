import { useEffect, useState } from "react";
import { evaluationHandler } from "../handler/evaluationHandler";
import WateringCan from "../assets/WateringCan.png"
import '../Style/RangeSlider.css'
import LoggedNavb from "../components/LoggedNavb";
import Footer from '../components/Footer'
import Seedling from '../assets/Seedling.png';
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
                <LoggedNavb />
                <div className="flex flex-col font-poppins justify-center items-center bg-gradient-to-t from-salmon ...">
                    <div className="flex items-center"> 
                    <h1 className="text-center text-3xl uppercase mt-4"> Mis autoevaluaciones</h1> <img src={Seedling} id="WateringCan" />
                    </div>
                    {evaluationData.map((evaluation, index) => {
                        return (
                            <>
                                <h1 className="flex flex-col mt-4 items-center justify-center font-bold text-2xl">  AUTOEVALUACIÓN {index + 1} </h1>
                                <div className="flex flex-col mt-4 pl-20 mb-5 text-lg border-black border-2 border-solid rounded-xl w-3/4 justify-center">
                                    
                                    <p>¿Cómo de capaz eres de planificar y gestionar un proyecto digital a través de marcos de trabajo?</p>
                                    <div className="flex items-baseline"> 
                                    <h1 className="font-bold h-10"> Tu respuesta ha sido: {evaluation.projectM} / 6</h1><img id="WateringCan" src={WateringCan} alt="Evaluation result icon" />
                                    </div> 

                                    <p>¿Cómo de capaz eres de conceptualizar de manera funcional un proyecto digital?</p>
                                    <div className="flex items-baseline"> 
                                    <h1 className="font-bold h-10"> Tu respuesta ha sido: {evaluation.funcTech1} / 6</h1><img id="WateringCan" src={WateringCan} alt="Evaluation result icon" />
                                    </div>

                                    <p>¿Cómo de capaz eres de diseñar los procesos lógicos necesarios para un proyecto digital?</p>
                                    <div className="flex items-baseline"> 
                                    <h1 className="font-bold h-10"> Tu respuesta ha sido:{evaluation.funcTech2} / 6</h1><img id="WateringCan" src={WateringCan} alt="Evaluation result icon" />
                                    </div>

                                    <p>¿Y de explicar la solución adoptada y presentar el trabajo realziado sintetizando sus planteamientos y resultados?</p>
                                    <div className="flex items-baseline"> 
                                    <h1 className="font-bold h-10"> Tu respuesta ha sido: {evaluation.funcTech3} / 6</h1><img id="WateringCan" src={WateringCan} alt="Evaluation result icon" />
                                    </div>

                                    <p>¿Cómo de capaz eres de crear una UI web estática y adaptable?</p>
                                    <div className="flex items-baseline"> 
                                    <h1 className="font-bold h-10"> Tu respuesta ha sido: {evaluation.front1} / 6</h1> <img id="WateringCan" src={WateringCan} alt="Evaluation result icon" />
                                    </div>

                                    <p>¿Y de crear una UI web dinámica y adaptable?</p>
                                    <div className="flex items-baseline"> 
                                    <h1 className="font-bold h-10"> Tu respuesta ha sido: {evaluation.front2} / 6</h1><img id="WateringCan" src={WateringCan} alt="Evaluation result icon" />
                                    </div>

                                    <p>¿Qué capaz eres de gestionar las estructuras, el flujo y el almacenamiento de datos de una web?</p>
                                    <div className="flex items-baseline"> 
                                    <h1 className="font-bold h-10"> Tu respuesta ha sido: {evaluation.back1} / 6</h1><img id="WateringCan" src={WateringCan} alt="Evaluation result icon" />
                                    </div>

                                    <p>¿Y de de desarrollar algoritmos que ejecutan procesos lógicos?</p>
                                    <div className="flex items-baseline"> 
                                    <h1 className="font-bold h-10"> Tu respuesta ha sido: {evaluation.back2} / 6</h1><img id="WateringCan" src={WateringCan} alt="Evaluation result icon" />
                                    </div>

                                    <p>¿Cómo de capaz eres de implementar arquitecturas web escalables?</p>
                                    <div className="flex items-baseline"> 
                                    <h1 className="font-bold h-10"> Tu respuesta ha sido: {evaluation.archit} / 6</h1><img id="WateringCan" src={WateringCan} alt="Evaluation result icon" />
                                    </div>

                                    <p>¿Qué capaz eres de implementar prácticas y tecnologías para la gestión de versiones?</p>
                                    <div className="flex items-baseline"> 
                                    <h1 className="font-bold h-10"> Tu respuesta ha sido:{evaluation.qa1} / 6</h1><img id="WateringCan" src={WateringCan} alt="Evaluation result icon" />
                                    </div>

                                    <p>¿Cómo de capaz eres de implementar un código limpio y escalable?</p>
                                    <div className="flex items-baseline"> 
                                    <h1 className="font-bold h-10"> Tu respuesta ha sido: {evaluation.qa2} / 6</h1><img id="WateringCan" src={WateringCan} alt="Evaluation result icon" />
                                    </div>

                                    <p>¿Y de implementar prácticas de QA para el aseguramiento y control de la calidad de una web?</p>
                                    <div className="flex items-baseline"> 
                                    <h1 className="font-bold h-10"> Tu respuesta ha sido:{evaluation.qa3} / 6</h1><img id="WateringCan" src={WateringCan} alt="Evaluation result icon" />
                                    </div>
                                </div>
                            </>
                        )
                    })}
                </div>
                <Footer/>
            </>
        )
    }

}

export default MyEvaluations; 