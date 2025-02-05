import path from 'path';
import { fileURLToPath } from 'url';


const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const getViewsPath = () => {
    return path.join(__dirname, "../views");
}

