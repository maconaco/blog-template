import * as React from 'react';
import { GetServerSideProps } from 'next';
import ArticleHeader from 'components/ArticleHeader';
import { articles } from '@/data';
import { Article } from 'src/types';

export default function ArticlePage() {
  return (
    <>
      {articles.map((article) => (
        <ArticleHeader key={article.id} articleTitle={article.title} />
      ))}
    </>
  );
}

export const ArticleProps: GetServerSideProps<Article> = async context => {
  const articleId = context.query.id;
  const res = await fetch(`http://localhost:3000/api/articles/${articleId}`);
  const data = await res.json() as Article;

  return { props: data };
};