import { bootcampService } from "../service/bootcampService";

export const bootcampHandler = {
    postBootcamp(newBootcamp) {
        if (!newBootcamp) {
            return;
        }

        let bootcamp = {
            "title":newBootcamp.title,
            "creatorId": newBootcamp.creatorId,
            "startDate": newBootcamp.startDate,
            "endDate": newBootcamp.endDate
        }

        return bootcampService.addBootcamp(bootcamp);
    },
}
