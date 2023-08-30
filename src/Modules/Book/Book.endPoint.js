import { roles } from "../../Middleware/auth.middleware.js";

export const endPoint = {
    get:[roles.User, roles.SuperAdmin , roles.Admin],
    create: [roles.SuperAdmin, roles.Admin],
    update: [roles.SuperAdmin, roles.Admin],
    delete : [roles.SuperAdmin, roles.Admin], 
}