/* eslint-disable prettier/prettier */
import * as bcrypt from 'bcryptjs';

export function encodePassword(password: string) {
  return bcrypt.hashSync(password, 10);
}
