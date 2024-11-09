import { statusCodes } from "../utils/index.js";

export function adminOrSuperAdminGuard(req, res, next) {
  try {
    const payload = req.user;
    console.log(req.user);
    
    
    if (payload.role !== "admin" && payload.role !== "superAdmin") {
      return res.status(statusCodes.FORBIDDEN).send({
        status: "FORBIDDEN",
        message: "you dont have access to this action",
      });
    }

    next();
  } catch (error) {
    res.status(500).send({ msg: error.message });
  }
}
