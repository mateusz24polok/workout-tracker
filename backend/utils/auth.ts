import { Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

import { UserEntity } from "../../types";
import { config } from "../config/config";

export const signToken = (id: string) =>
  jwt.sign({ id }, config.jwtSecret, {
    expiresIn: config.jwtExpiresIn,
  });

export const createSendToken = (
  user: UserEntity,
  statusCode: number,
  res: Response
) => {
  const token = signToken(user.id);

  const cookieOptions = {
    expires: new Date(
      Date.now() + Number(config.jwtExpiresIn) * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };

  // if (process.env.NODE_ENV === "production") cookieOptions.secure = true;

  res.cookie("jwt", token, cookieOptions);

  user.password = undefined;

  res.status(statusCode).json({
    status: "success",
    token,
    user,
  });
};

export const checkIsPasswordCorrect = async (
  realUserHashedPassword: string,
  typedPassword: string
) => {
  return await bcrypt.compare(typedPassword, realUserHashedPassword);
};
