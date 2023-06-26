import { resolve } from 'path';
import { open } from 'fs/promises';

export async function addHandler(name) {
  const path = resolve(process.cwd(), name);
  const fileHandle = await open(path, 'w');
  fileHandle.close();
}
