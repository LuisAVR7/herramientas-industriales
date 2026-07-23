import fs from "fs";
import path from "path";
import matter from "gray-matter";

const ARTICLES_DIR = path.join(process.cwd(), "content", "blog");
const OUTPUT_DIR = path.join(process.cwd(), "src", "lib");
const OUTPUT_PATH = path.join(OUTPUT_DIR, "articles-generated.json");

if (!fs.existsSync(ARTICLES_DIR)) {
  console.warn(`[generate-articles] No existe ${ARTICLES_DIR} — genero JSON vacío.`);
  if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, "[]");
  process.exit(0);
}

const files = fs.readdirSync(ARTICLES_DIR).filter((f) => f.endsWith(".mdx"));

const articles = files
  .map((file) => {
    const fullPath = path.join(ARTICLES_DIR, file);
    const raw = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(raw);
    const fecha =
      data.fecha instanceof Date
        ? data.fecha.toISOString().split("T")[0]
        : String(data.fecha);
    return { ...data, fecha, content };
  })
  .sort((a, b) => (a.fecha < b.fecha ? 1 : -1));

if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true });
fs.writeFileSync(OUTPUT_PATH, JSON.stringify(articles, null, 2));
console.log(
  `[generate-articles] Generados ${articles.length} artículos en ${OUTPUT_PATH}`
);