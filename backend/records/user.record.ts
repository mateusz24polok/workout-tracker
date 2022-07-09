import { FieldPacket } from "mysql2";
import { v4 as uuid } from "uuid";
import bcrypt from "bcryptjs";

import { UserEntity, UserRegistrationForm } from "../../types";
import { pool } from "../utils/db";
import { ValidationError } from "../utils/errors";

type UserdRecordResults = [UserEntity[], FieldPacket[]];

export class UserRecord implements UserEntity {
  public id: string;
  public name: string;
  public email: string;
  public password: string;

  constructor(obj: UserRegistrationForm) {
    if (!obj.name || obj.name.length > 100) {
      throw new ValidationError(
        "User name can not be empty or longer than 100 signs"
      );
    }

    if (!obj.email || obj.email.length > 100) {
      throw new ValidationError(
        "User email can not be empty or longer than 100 signs"
      );
    }

    if (!obj.password || obj.password.length > 100) {
      throw new ValidationError(
        "User password can not be empty or longer than 100 signs"
      );
    }

    if (obj.passwordConfirm && obj.password !== obj.passwordConfirm) {
      throw new ValidationError("Password confirm doesn't match");
    }

    this.name = obj.name;
    this.email = obj.email;
    this.password = obj.password;
  }

  static async getOneById(id: string): Promise<UserRecord | null> {
    const [results] = (await pool.execute(
      "SELECT * FROM `users` WHERE id = :id",
      {
        id,
      }
    )) as UserdRecordResults;

    return results.length === 0
      ? null
      : new UserRecord(results[0] as UserRegistrationForm);
  }

  static async getOneByEmail(email: string): Promise<UserRecord | null> {
    const [results] = (await pool.execute(
      "SELECT * FROM `users` WHERE email = :email",
      {
        email,
      }
    )) as UserdRecordResults;

    return results.length === 0
      ? null
      : new UserRecord(results[0] as UserRegistrationForm);
  }

  async insert(): Promise<void> {
    if (!this.id) {
      this.id = uuid();
    } else {
      throw new Error("Cannot insert something that already exists");
    }

    this.password = await bcrypt.hash(this.password, 12);

    await pool.execute(
      "INSERT INTO `users`(`id`, `name`, `email`, `password`) VALUES(:id, :name, :email, :password)",
      this
    );
  }
}
