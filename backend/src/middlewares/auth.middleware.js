import jwt from "jsonwebtoken";
import User from "../models/user.models.js";
import cookie from "cookie-parser";

//middleware that confirms validate the token
export const protectRoute = async (req, res, next) => {
  const token = req.cookies.jwt;

  if (!token) {
    return res
      .status(401)
      .json({ message: "Unauthorized - No Token Provided" });
  }

  //verify the token
  const decodetoken = jwt.verify(token, process.env.JWT_SECRET);

  if (!decodetoken) {
    return res.status(401).json({ message: "Unauthorized - Invalid Token" });
  }

  const user = await User.findById(decodetoken.userId).select("-password"); //prevent the displaying of password

  if (!user) {
    return res.status(404).json({ message: "User Not Found" });
  }

  req.user = user;

  next();
};
