import express, { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import bcrypt from 'bcryptjs';

import { User, UserModel } from '../models/userModel';
import { generateToken } from '../utils';

export const userRouter = express.Router();
// /api/users/signin
userRouter.post(
  '/signin',
  asyncHandler(async (req: Request, res: Response) => {
    const user = await UserModel.findOne({ email: req.body.email });
    if (user) {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        res.json({
          _id: user._id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
          token: generateToken(user),
        });
        return;
      }
    }
    res.status(401).json({ message: 'Invalid email or password' });
  })
);

userRouter.post(
  '/signup',
  asyncHandler(async (req: Request, res: Response) => {
    const user = await UserModel.create({
      name: req.body.name,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password),
    } as User);
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user),
    });
  })
);

// /api/users
userRouter.get(
  '/',
  asyncHandler(async (req, res) => {
    const users = await UserModel.find(); // retrieve the user ID from the request body
    res.json(users);
  })
);

// /api/users/:id
userRouter.delete(
  '/:id',
  asyncHandler(async (req: Request, res: Response) => {
    try {
      const deletedUser = await UserModel.findByIdAndRemove(req.params.id);
      if (deletedUser) {
        res.json({
          _id: deletedUser._id,
          name: deletedUser.name,
          email: deletedUser.email,
          isAdmin: deletedUser.isAdmin,
        });
      } else {
        res.status(404).json({ message: 'User not found' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Something went wrong' });
    }
  })
);
