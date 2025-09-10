import "dotenv/config";
import app from "./app.js";

app.get("/", (req, res) => {
  res.json({ ok: true, message: "Hello from Node backend 🎉" });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Listening on Port ${port}!`);
});
