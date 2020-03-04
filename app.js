const express = require("express");
const authentication = require("./middleware/authenticator");
const emailjob = require("./middleware/emailsender");

const heroes = require("./routes/heroes");
const home = require("./routes/home");
const PORT =process.env.PORT

const app = express();

app.use(express.json());
app.use(emailjob);
app.use(authentication);
app.use("/", home);
app.use("/api/heroes", heroes); // custom middleware

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Listening on Port ${PORT}`);
});
