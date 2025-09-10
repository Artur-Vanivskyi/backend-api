import "dotenv/config";
import app from "./src/app.js";

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({ ok: true, message: "Hello from Node backend 🎉" });
});

app.listen(port, () => {
  console.log(`Listening on Port ${port}!`);
});
