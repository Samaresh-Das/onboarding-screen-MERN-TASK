const HttpError = require("../models/http-error");
const User = require("../models/users");
const ImageLink = require("../models/imagePath");
const ButtonText = require("../models/button-text");
const { validationResult } = require("express-validator");

const getAdminData = async (req, res, next) => {
  let fileUrl = await ImageLink.findOne();
  let buttonText = await ButtonText.findOne();

  if (fileUrl && buttonText) {
    return res
      .status(200)
      .json({ fileUrl: fileUrl.url, buttonText: buttonText.text });
  } else {
    return res.status(500).json("An error occured");
  }
};

const adminUpdateForm = async (req, res, next) => {
  console.log(req.file);
  const { buttonText } = req.body;
  console.log(buttonText);
  //update banner
  let fileUrl;
  let result;
  let deletedImage;
  if (req.file) {
    fileUrl = "http://localhost:8080/" + req.file.path.replace(/\\/g, "/");

    deletedImage = await ImageLink.findOneAndDelete();
    // delete the previous URL (if any)
    const imageLink = new ImageLink({ url: fileUrl }); // create a new instance of ImageLink
    fileUrl = await imageLink.save();
    console.log(result);
  } else {
    // keep the previous URL
    const imageLink = await ImageLink.findOne();
    fileUrl = imageLink;
  }

  //update button
  let text;
  let deletedText;
  try {
    if (buttonText) {
      deletedText = await ButtonText.findOneAndDelete();
      const newText = new ButtonText({ text: buttonText }); // create a new instance of ImageLink
      text = await newText.save();
      console.log(text);
    } else {
      const newText = await ButtonText.findOne();
      text = newText;
    }
  } catch (err) {
    const error = new HttpError("Text not found", 404);
    throw error;
  }

  res.status(200).json({
    fileUrl: fileUrl.url,
    text: text.text,
    // result: result ? result.url : null,
  });
};

const getData = async (req, res, next) => {
  let users;
  try {
    // use the find method to get all the user documents from the users collection
    users = await User.find({}, "-__v"); // exclude the __v field
  } catch (err) {
    const error = new HttpError("Fetching users failed", 500);
    return next(error);
  }

  res.json({
    users: users.map((user) => user.toObject({ getters: true })),
  });
};

const postData = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError("Invalid inputs passed, please check your data", 422)
    );
  }
  const { email, name } = req.body;
  let existingUser;
  try {
    existingUser = await User.findOne({ email: email });
  } catch (err) {
    const error = new HttpError("Signup failed", 500);
    return next(error);
  }

  if (existingUser) {
    const error = new HttpError("Could not signup, user already exists", 422);
    return next(error);
  }
  let createdUser;
  try {
    const user = new User({ name, email });
    createdUser = await user.save();
    res.status(201).json(createdUser.toObject({ getters: true }));
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = {
  getAdminData,
  adminUpdateForm,
  postData,
  getData,
};
