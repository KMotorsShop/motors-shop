import * as bcrypt from 'bcrypt';

export function encodePassword(password: string) {
  return bcrypt.hashSync(password, 10);
}
