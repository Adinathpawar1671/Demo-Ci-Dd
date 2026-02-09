import express from "express";
import sum from "./sum.js";
const app = express();
const port = 3030;

app.listen(port, ()=>{
    console.log("you are listening at port 3030");

});

app.get("/home", async(req, res)=>{
    console.log("Home page");
    res.json({  
        msg : "I am root"
    });
});

app.get("/home/:a/:b", async(req, res)=>{
    const {a,b}=req.params;
    res.json({
        ans:sum(parseInt(a),parseInt(b)),
    });
})