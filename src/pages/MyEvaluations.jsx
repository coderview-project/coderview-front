import { useEffect, useState } from "react";
import { evaluationHandler } from "../handler/evaluationHandler";


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
            <h1> MIS AUTOEVALUACIONES </h1> 
                {evaluationData.map((evaluation, index) => {
                    return(
                        <>
                        <h1>  AUTOEVALUACIÓN {index + 1} </h1>
                   
                        <h1> {evaluation.projectM}</h1>
                        <h1> {evaluation.funcTech1}</h1>
                        <h1> {evaluation.funcTech2}</h1> 
                        <h1> {evaluation.funcTech3}</h1> 
                        <h1> {evaluation.front1}</h1> 
                        <h1> {evaluation.front2}</h1> 
                        <h1> {evaluation.back1}</h1> 
                        <h1> {evaluation.back2}</h1> 
                        <h1> {evaluation.archit}</h1> 
                        <h1> {evaluation.qa1}</h1> 
                        <h1> {evaluation.qa2}</h1> 
                        <h1> {evaluation.qa3}</h1> 
                        </>
                    )})}
            </>
        )
    }

}

export default MyEvaluations; 