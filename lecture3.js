//expressThe code you provided creates a basic Express server with three routes: 
// /, /about, and /contact. Here's a step-by-step guide to run and use it:
const express=require("express");

// console.log(typeof(express));
const app=express();
// console.log(app);

app.get("/",(req,res)=>{    
res.send("hello frontend");
});

app.get("/about",(req,res)=>{    
    res.send("hello about page");
    });

app.get("/contact",(req,res)=>{    
    res.send("hello contact page");
    });
app.listen(3000,()=>{    
    console.log("Server is running at port 3000");
}); 