import React from 'react';
import Footer from '../components/Footer'
import Navb from '../components/Navb'
import Range from '../components/Range'
import "../Style/evaluationResult.css";


function EvaluationResult(){



return(
<>

<Navb/>
<p>¿Cómo de capaz eres de conceptualizar de manera funcional un proyecto digital?</p>
<Range/>
<p>¿Cómo de capaz eres de diseñar los procesos lógicos necesarios para un proyecto digital?</p>
<Range/>
<p>¿Y de explicar la solución adoptada y presentar el trabajo realizado sintetizando sus planteamientos y resultados?</p>
<Range/>
<p>¿Cómo de capaz eres de crear una UI web estática y adaptable?</p>
<Range/>
<p>¿Y de crear una UI web dinámica y adaptable?</p>
<Range/>
<p>¿Qué tan capaz eres de planificar y gestionar un proyecto digital a través de marcos de trabajo?</p>
<Range/>
<p>¿Qué tan capaz eres de gestionar las estructuras, el flujo y el almacenamiento de datos de una web?</p>
<Range/>
<p>¿Qué tan capaz eres de desarrollar algoritmos que ejecuten procesos lógicos?</p>
<Range/>
<p>¿Cómo de capaz eres de implementar arquitecturas web escalables?</p>
<Range/>
<p>¿Qué tan capaz eres de implementar prácticas y tecnologías para la gestión de versiones?</p>
<Range/>
<p>¿Cómo de capaz eres de implementar un código limpio y estable?</p>
<Range/>
<p>¿Y de implementar prácticas de QA para el aseguramiento y control de la calidad de una web?</p>
<Range/>

<div className="w-96 h-32"></div>
<Footer/>

</>

)
}

export default EvaluationResult