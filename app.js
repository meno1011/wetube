import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";

const app = express();

//small middleware들
app.set("view engine", "pug"); //pug은 템플릿 언어이다
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));
//morgan logger

//router  3개
app.use(routes.home, globalRouter);
//user랑 video랑 관련없는 일반적이 페이지로 넘어갈때 쓸 주소
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;
