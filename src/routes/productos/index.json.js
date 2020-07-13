import fs from 'fs';
import path from 'path';
const pathToProds = 'static/productos';
const getAllProds = () => {
  try {
    return fs.readdirSync(pathToProds).map((filename) => {
      return JSON.parse(
        fs.readFileSync(path.resolve(pathToProds, filename), 'utf8'),
      );
    });
  } catch (e) {
    return [];
  }
};
export function get(_, res) {
  res.writeHead(200, { 'Content-type': 'json' });
  const prods = getAllProds();
  res.end(JSON.stringify(prods));
}
