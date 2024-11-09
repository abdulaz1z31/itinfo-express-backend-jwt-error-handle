export function adminOrSuperAdminGuard(req, res, next) {
  try {
    const payload = req.user;
    
    if (payload.role !== "admin" && payload.role !== "superAdmin") {
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
