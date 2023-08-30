import { roles } from "../../Middleware/auth.middleware.js";

export const endPoint = {
    get:[roles.User,roles.Admin,roles.SuperAdmin],
    create: [roles.SuperAdmin],
    update: [roles.SuperAdmin],
    delete : [roles.SuperAdmin], 
}