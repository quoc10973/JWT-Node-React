import express from "express";

let configViewEngine = (app) => {
    app.use(express.static("./src/public"));  // lấy ảnh, lấy file gì đó từ server chỉ được phép lấy từ thư mục public
    app.set("view engine", "ejs");  //ejs giống jsp của java, gõ được logic trong html
    app.set("views", "./src/views"); // tìm thư mục chứa view có các file ejs
}

module.exports = configViewEngine;