import jwt from "jsonwebtoken";

const createTokenAndSaveCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_TOKEN, {
    expiresIn: "10d",
  });
  res.cookie("jwt", token, {
    httpOnly: true, // xss attack se bchaye ga
    secure: true,
    sameSite: "strict", // csrf  attack se bchaye ga
  });
};
export default createTokenAndSaveCookie; 