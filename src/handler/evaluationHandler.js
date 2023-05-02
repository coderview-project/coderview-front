import {evaluationService} from '../service/evaluationService'

export const evaluationHandler = {
    addEvaluation(newEvaluation) {
        if(!newEvaluation) {
            return; 
        }
        
        let evaluationData = {
            "projectM": newEvaluation.formData.projectM,
            "funcTech1": newEvaluation.formData.funcTech1,
            "funcTech2": newEvaluation.formData.funcTech2,
            "funcTech3": newEvaluation.formData.funcTech3,
            "front1": newEvaluation.formData.front1,
            "front2": newEvaluation.formData.front2,
            "back1": newEvaluation.formData.back1, 
            "back2": newEvaluation.formData.back2,
            "archit": newEvaluation.formData.archit,
            "qa1": newEvaluation.formData.qa1,
            "qa2": newEvaluation.formData.qa2,
            "qa3": newEvaluation.formData.qa3,
            "evaluatorId": newEvaluation.evaluatorId,
            "evaluateeId": newEvaluation.evaluateeId,
            // "evaluationId": 0
        }
        return evaluationService.addEvaluation(evaluationData);
    },
    loadEvaluation(userId) {
       
        return evaluationService.getSelectedEvaluation(userId);
    },
}