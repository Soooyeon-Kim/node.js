"use strict"

// 모듈
const express = require("express");
const dotenv = require("dotenv");
//const morgan = require('morgan')
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

//const accessLogStream = require("./src/config/log");

// 라우팅
const home = require("./src/routes/home");

const logger = require("./src/config/logger");
//logger.error("sooyeon");


// 앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use(express.static(`${__dirname}/src/public`));
app.use(express.json());
// URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결
app.use(express.urlencoded({ extended: true }));
//app.use(morgan("common", { stream: accessLogStream }));
//app.use(morgan(":method :date[web]", { stream: accessLogStream }));
//app.use(morgan("dev", { stream: accessLogStream }));
//app.use(morgan(":method :url :status :res[content-length] - :response-time ms"));

app.use("/", home); // 미들웨어 등록

app.listen(PORT, () => {
    logger.info(`${PORT} 포트에서 서버가 가동되었습니다.`);
});