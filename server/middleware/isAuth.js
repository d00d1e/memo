import jwt from "jsonwebtoken";

export const isAuth = async (req, res, next) => {
  try {
    let decodedData;
    const token = req.headers.authorization.split(" ")[1];
    const isCustomAuth = token.length < 500;

    if (token && isCustomAuth) {
      decodedData = jwt.verify(token, process.env.JWT_SECRET);

      req.userId = decodedData?.id;
    } else {
      decodedData = jwt.decode(token);

      req.userId = decodedData?.sub;
    }

    next();
  } catch (error) {
    req.status(201).send({ message: "No token" });
  }
};
