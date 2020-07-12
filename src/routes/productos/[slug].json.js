import path from "path";
import fs from "fs";
import grayMatter from "gray-matter";
import marked from "marked";

const getProductos = (fileName) => {
  return fs.readFileSync(
    path.resolve("static/productos/", `${fileName}.json`),
    "utf-8"
  );
};

export function get(req, res, _) {
  const { slug } = req.params;

  const post = getProductos(slug);
  const renderer = new marked.Renderer();

  const { data, content } = grayMatter(post);
  const html = marked(content, { renderer });

  if (html) {
    res.writeHead(200, {
      "Content-Type": "application/json",
    });

    res.end(JSON.stringify({ html, ...data }));
  } else {
    res.writeHead(404, {
      "Content-Type": "application/json",
    });

    res.end(
      JSON.stringify({
        message: `Not found`,
      })
    );
  }
}