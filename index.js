import "dotenv/config";
import express from "express";
import bodyParser from "body-parser";
import connectDB from "./mongoose.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {

  connectDB();

  res.json({
    status: "success",
    msg: "Welcome to site",
  });
});

app.post("/", async (req, res) => {


  console.log(req.body);
  

  // if (req.body.Body === "/create-farmer") {
  //   console.log("creating a farmer account");

  //   return res.json({ message: "success" });
  // } 

  // console.log("Redirect the request to an email");
  // return res.json({ message: "success" });
});

app.listen(port, () => {
  console.log(`Server listening at port: ${port}`);
});
