import { User } from "../database/models/user.model.js";

export async function isSuperAdmin(req, res, next) {
    try {
        const payload = req.user;
        const userId = req.params.id
        const user = await User.findById(userId);
        if (user.role != "superAdmin" && payload.role != "superAdmin" && payload.id != userId) {
            return res.status(403).send({
                status: "FORBIDDEN",
                msg: "You dont have access to this action",
              });
        }
        if (payload.role !== "admin" && payload.role !== "superAdmin" && payload.id != req.params.id) {
          return res.status(403).send({
            status: "FORBIDDEN",
            msg: "you dont have access to this action",
          });
        }
    
        next();
      } catch (error) {
        res.status(500).send({ msg: error.message });
      }
  }
