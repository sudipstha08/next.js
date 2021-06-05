const dotenv = require("dotenv");
const path = require("path");

if (process.env.NODE_ENV === "production") {
  dotenv.config({
    path: path.resolve(__dirname, `./.env`),
  });
} else {
  dotenv.config({
    path: path.resolve(__dirname, "./.env"),
  });
}
