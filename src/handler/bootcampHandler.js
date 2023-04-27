import { bootcampService } from "../service/bootcampService";

export const bootcampHandler = {
    postBootcamp(bootcamp) {
        if (!bootcamp) {
            return;
        }

        let newBootcamp = {
            "title":bootcamp.title,
            "creatorId": bootcamp.creatorId,
            "startDate": bootcamp.startDate,
            "endDate": bootcamp.endDate
        }

        return bootcampService.postBootcamp(newBootcamp);
    },
    loadBootcamps() {
        return bootcampService.getBootcamp();
    },
}
