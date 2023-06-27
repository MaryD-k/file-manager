import { unlink } from 'fs/promises';
import { resolve } from 'node:path';

export async function rmHandler(file) {
  await unlink(resolve(file));
}
