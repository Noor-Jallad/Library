import {Router} from 'express';
import { asyncHandler } from '../../Services/errorHandling.js';
import * as adminController from './Controller/Admin.controller.js';
import { auth } from '../../Middleware/auth.middleware.js';
import { endPoint } from './Admin.endPoint.js';
import validation from '../../Middleware/validation.js';
import * as validators from './Admin.validation.js';
const router= Router();

router.post('/', auth(endPoint.create),validation(validators.createAdmin),asyncHandler(adminController.createAdmin));
router.put('/:adminId', auth(endPoint.update),validation(validators.updateAdmin),asyncHandler(adminController.updateAdmin));
router.delete('/:adminId', auth(endPoint.delete),validation(validators.deleteAdmin), asyncHandler(adminController.deleteAdmin));
router.get('/confirmEmail/:token',validation(validators.token),adminController.confirmEmail);
router.get('/newConfirmEmail/:token',validation(validators.token),adminController.newConfirmEmail);
router.get('/',auth(endPoint.get),adminController.getAdmins);
router.get('/:adminId',auth(endPoint.get),validation(validators.getSpecificAdmin),adminController.getSpecificAdmin)
export default router;