import userModel from "../models/usersModel.js";
import { encryptPass } from "../utils/encrypt.js";
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
    const jwtToken = createToken(username);

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
  res.send({
    message: "Login User",
  });
};
