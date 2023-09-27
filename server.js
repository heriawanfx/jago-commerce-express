import express  from "express";
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import bodyParser from "body-parser";
import ApiRoute from "./app/routes/api.route.js";
import WebRoute from "./app/routes/web.route.js";
import dbConfig from "./config/db.config.js";
import dotenv from "dotenv";
import sessionMiddleware from "./app/middleware/session.middleware.js";
import morgan from "morgan";
import errorHandler from "errorhandler";

dotenv.config();

const app = express();

const appUrl = process.env.APP_URL;
const port = process.env.APP_PORT || 3000;

var corsOptions = {
    origin: `${appUrl}:${port}`
};
app.use(cors(corsOptions));
app.use(helmet());
app.use(compression());
app.use(sessionMiddleware);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', ApiRoute);
app.use('/', WebRoute);

if (process.env.APP_ENV != 'production') {
    app.use(morgan());
    app.use(errorHandler())
}

dbConfig.sync();

app.listen(port, () => {
    console.log(`Server is running on Port ${port}`);
});