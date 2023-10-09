const express = require("express");
const connectDatabase = require("./config/db.js");
const { check, validationResult } = require("express-validator");
const cors = require("cors");

const app = express();

connectDatabase();

app.use(express.json({ extended: false }));
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.get("/", (req, res) => {
  res.send("http get request sent to root api endpoint");
});

app.post(
  "/api/users",
  [
    check("name", "Please enter your name").not().isEmpty(),
    check("email", "Please enter a valid email").isEmail(),
    check(
      "password",
      "Please enter a password with 6 or more characters"
    ).isLength({ min: 6 }),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    console.log(req.body); // This will now be executed if there are no errors

    res.send(req.body);
  }
);

const port = 5000;
app.listen(port, () => console.log(`Express server running on port ${port}`));
