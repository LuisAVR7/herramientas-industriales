import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import type { MDXComponents } from "mdx/types";
import { getAllSlugs, getArticleBySlug } from "@/lib/articles";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.descripcion,
  };
}

const mdxComponents: MDXComponents = {
  h2: (props) => (
    <h2
      className="text-2xl md:text-3xl font-bold text-ink-50 mt-12 mb-4"
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className="text-xl md:text-2xl font-semibold text-ink-50 mt-8 mb-3"
      {...props}
    />
  ),
  p: (props) => (
    <p className="text-ink-200 leading-relaxed mb-4" {...props} />
  ),
  ul: (props) => (
    <ul
      className="list-disc pl-6 space-y-2 text-ink-200 mb-4"
      {...props}
    />
  ),
  ol: (props) => (
    <ol
      className="list-decimal pl-6 space-y-2 text-ink-200 mb-4"
      {...props}
    />
  ),
  a: (props) => (
    <a
      className="text-brand-500 hover:text-brand-400 underline"
      {...props}
    />
  ),
  strong: (props) => (
    <strong className="font-semibold text-ink-50" {...props} />
  ),
  em: (props) => <em className="italic" {...props} />,
  code: (props) => (
    <code
      className="bg-ink-800 text-brand-400 px-1.5 py-0.5 rounded text-sm"
      {...props}
    />
  ),
  blockquote: (props) => (
    <blockquote
      className="border-l-4 border-brand-500 pl-4 italic text-ink-300 my-6"
      {...props}
    />
  ),
};

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  return (
    <article className="max-w-3xl mx-auto px-6 py-20">
      <div className="mb-8">
        <Link
          href="/blog"
          className="text-sm text-ink-400 hover:text-brand-400 transition"
        >
          ← Volver al blog
        </Link>
      </div>

      <div className="flex items-center gap-3 mb-4 flex-wrap">
        <div className="w-2 h-2 rounded-full bg-brand-500" />
        <span className="text-xs font-semibold tracking-widest text-brand-500 uppercase">
          {article.categoria}
        </span>
        <span className="text-xs text-ink-500">·</span>
        <span className="text-xs text-ink-500">
          {new Date(article.fecha).toLocaleDateString("es-PY", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </span>
      </div>

      <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-ink-50 leading-tight mb-6">
        {article.title}
      </h1>

      <p className="text-lg text-ink-300 leading-relaxed mb-12">
        {article.descripcion}
      </p>

      <div className="border-t border-ink-800 pt-8">
        <MDXRemote source={article.content} components={mdxComponents} />
      </div>
    </article>
  );
}