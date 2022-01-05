const express = require("express");
const app = express();
const hbs = require("hbs"); // for partials

hbs.registerPartials(__dirname + "/views/partials");


app.set("view engine","hbs");
app.use(express.static(__dirname + "/public"))

app.get("/", (request, response)=>{
    response.render("home.hbs", {
        css:["home.css"],
    });
});

app.get("/about", (request, response)=>{
    response.render("about.hbs", {
        css:["about.css"],
    });
});

app.get("/works", (request, response)=>{
    response.render("works.hbs", { 
        css:["works.css"],
    });
});

app.listen(4000);