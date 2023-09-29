import session from "express-session";

const sessionMiddleware = session({
    secret: process.env.APP_KEY as string,
    resave: false,
    saveUninitialized: false,
    rolling: true,
  });

  export default sessionMiddleware;