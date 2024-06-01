const express = require("express");
const app = express();
const connectDb = require("./config/db");
const ordersRoute = require("./routes/order");
const listRoute = require("./routes/list")
const PORT = 8000;
const cors = require("cors");

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

connectDb();

app.use("/api/order",ordersRoute)

app.use("/api/orderlist",listRoute)


app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
