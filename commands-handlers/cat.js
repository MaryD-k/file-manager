import { createReadStream } from 'node:fs';
import { stat } from 'node:fs/promises';
import { resolve } from 'path';

export async function catHandler(filePath) {
  try {
    const path = resolve(filePath);
    const stats = await stat(path);
    if (!stats.isFile()) {
      throw new Error();
    }
    const readable = createReadStream(path, { encoding: 'utf8' });
    readable.pipe(process.stdout);
  }
  catch(_error) {
    console.error('Operation failed');
  }
}
