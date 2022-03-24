const { Router } = require("express");

const api = Router();

const home = (req, res) => {
  try {
    res.status(200).json({
      message: "Welcome to Dhabs Portfolio API",
      data: {
        projectName: "Daberechi Uzoh",
        author: "Dhabs",
      },
    });
  } catch (e) {
    console.log("indexController-home", e);
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

module.exports = () => {
  // "/" - home route
  api.get("/", home);

  return api;
};
