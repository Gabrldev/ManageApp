import userModel from "../models/usersModel.js";
import { encryptPass, verifyPass } from "../utils/encrypt.js";
import { createToken } from "../utils/jwt.js";
export const RegisterUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const userIsUse = await userModel.findOne({ username });
    if (userIsUse) return res.send({ message: "Username is already in use" });
    // encrypt password
    const hashedPass = await encryptPass(password);
    // create user
    const user = await userModel.create({
      username,
      password: hashedPass,
    });
    // create token
    const jwtToken = createToken({ username, id: user._id});

    const data = {
      data: {
        user,
        token: jwtToken,
      },
    };
    // send data
    res.send(data);
  } catch (error) {
    console.log(error.message);
  }
};

export const LoginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const checkIs = await userModel.findOne({ username });
    if (!checkIs) return res.stutus(404).send({ message: "User not found" });
    const passHash = checkIs.password;
    const isMatch = await verifyPass(password, passHash);
    if (!isMatch) return res.status(400).send({ message: "Wrong password" });
    // create token
    const jwtToken = createToken({ username, id: checkIs._id });

    const data = {
      log: "Login success",
      data: {
        id: checkIs._id,
        username: checkIs.username,
      },
      token: jwtToken,
    };
    res.send(data);
  } catch (error) {
    console.log(error.message);
  }
};
