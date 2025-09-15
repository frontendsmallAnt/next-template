import crypto from 'crypto';

export const saltAndHashPassword = (password: string) => {
  const salt = crypto.randomBytes(16).toString('hex');
  const hash = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');
  return { salt, hash };
}   
export const verifyPassword = (password: string, salt: string, hash: string) => {
  const newHash = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');
  return newHash === hash;
}
export const hashPassword = (password: string) => {
  const salt = crypto.randomBytes(16).toString('hex');
  const hash = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');
  return { salt, hash };
}

