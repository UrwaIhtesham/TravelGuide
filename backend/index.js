const express = require("express");
const cors = require("cors");
const contactRoutes = require("./routes/contactRoutes");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use("/contacts", contactRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://192.168.1.3:${PORT}`);
});
