import userModel from "../models/userModel.js";
const register = async (req, res) => {
  try {
    const { name, email, pass } = req.body;
    const result = await userModel.create({ name, email, pass });
    res.status(201).json(result);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Something went wrong" });
  }
};

export {register}
