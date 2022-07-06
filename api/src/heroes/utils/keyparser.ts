import * as crypto from 'crypto';

export function getKey(hash: string) {
  return crypto.createHash('md5').update(hash).digest('hex');
}
