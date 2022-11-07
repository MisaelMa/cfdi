import path from 'path';
import { fileURLToPath } from 'url';
export const __filename = fileURLToPath(import.meta.url);

// 👇️ "/home/john/Desktop/javascript"
export const __dirname = path.dirname(__filename);
