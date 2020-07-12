import fs from 'fs';
import path from 'path';
const pathToProds = 'static/productos';
const getAllProds = () => {
  try {
    fs.readdirSync(pathToProds).map((filename) => {
      const prod = fs.readFileSync(path.resolve(pathToProds), 'utf-8');
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
