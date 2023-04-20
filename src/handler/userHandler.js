import { userService } from "../service/userService";

export const userHandler = {
    postUser(newUser) {
        if (!newUser) {
            return;
        }

        let newUserRequestModel = {
            "userName": newUser.userName,
            "lastName":newUser.lastName,
            "email": newUser.email,
            "password": newUser.password,
        }

        return userService.postUser(newUserRequestModel);

    },

    async postInstructor(newInstructor) {
        if(!newInstructor) {
            return;
        }

        let newUserRequestModel = {
            "userName": newInstructor.userName,
            "lastName":newInstructor.lastName,
            "email": newInstructor.email,
            "password": newInstructor.password,
        }
        return userService.postInstructor(newUserRequestModel);
    },

    async loadUser() {
        var result = await  userService.getUser();
        return result; 
    },
    loadUser(id) {
        return userService.getUser(id);
    },
    deleteUser(id) {
        return userService.deleteUser(id);
    },
    updateUser(id, updatedUser) {
        if (!updatedUser) {
            return;
        }

        let imgStringData = updatedUser.img;
        let imgStringDataSplit = imgStringData.split(',');
        let imgContent = imgStringDataSplit[1];

        let updatedUserRequestModel = {
            "userData": {
                "userName": newUser.userName,
                "lastName": newUser.lastName,
                "email": newUser.email,
                "password": newUser.password,
            }, 
            "fileData": {
                "fileName": newUser.fullName + "-Photo",
                "base64FileContent": imgContent
            }
        }

        return userService.updateUser(id, updatedUserRequestModel);
    }
}