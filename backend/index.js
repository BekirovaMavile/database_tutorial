// import express
import express from "express";
// import cors
import cors from "cors";
// import routes
import Router from "./routes/route.js";
 
// init express
const app = express();
 
// use express json
app.use(express.json());
 
// use cors
app.use(cors());
 
// use router
app.use(Router);
 
app.listen(3000, () => console.log('Server running at http://localhost:3000'));