import { UserRecord } from "../records/user.record";
import { catchAsync } from "../utils/catchAsync";
import { checkIsPasswordCorrect, createSendToken } from "../utils/auth";
import { ValidationError } from "../utils/errors";

export const signUp = catchAsync(async (req, res, next) => {
  const newUser = new UserRecord({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
  });

  await newUser.insert();

  res.status(201).json({ status: "success" });
});

export const login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  // 1) Check if email and password exist
  if (!email || !password) {
    throw new ValidationError("Please provide email and password");
  }

  // 2) Check if user exists && password is correct
  const user = await UserRecord.getOneByEmail(email);

  if (!user || !(await checkIsPasswordCorrect(user.password, password))) {
    throw new ValidationError("Incorrect email or password");
  }
  // 3) If everything ok, send token to client
  createSendToken(user, 200, res);
});
