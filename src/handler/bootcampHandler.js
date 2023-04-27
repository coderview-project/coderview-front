import { bootcampService } from "../service/bootcampService";

export const bootcampHandler = {
    postBootcamp() {
        if (!newBootcamp) {
            return;
        }

        let newBootcamp = {
            "title":newBootcamp.title,
            "creatorId": newBootcamp.creatorId,
            "startDate": newBootcamp.startDate,
            "endDate": newBootcamp.endDate
        }

        return bootcampService.postBootcamp(newBootcamp);
    }
}
