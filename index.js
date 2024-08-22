import "dotenv/config";
import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.json({
    status: "success",
    msg: "Welcome to site",
  });
});

app.post("/", async (req, res) => {

  console.log(req.body);

  res.status(200).json({ message: "success" });
});

app.listen(port, () => {
  console.log(`Server listening at port: ${port}`);
});
