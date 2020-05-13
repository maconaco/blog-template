import * as React from 'react';
import { GetServerSideProps } from 'next';
import ArticleHeader from 'components/ArticleHeader';
import { articles } from '@/data';

export default function Article() {
  return (
    <>
      {articles.map((article) => (
        <ArticleHeader key={article.id} articleTitle={article.title} />
      ))}
    </>
  );
}

export const ArticleProps: GetServerSideProps = async context => {
  const articleId = context.query.id;
  const res = await fetch(`http://localhost:3000/api/articles/${articleId}`);
  const data = await res.json();

  return {
    props: {
      id: data.id as string ,
      title: data.title as string,
      content: data.content as string,
      createdAt: data.createdAt as string,
      image: data.image as string,
      likes: data.likes as number,
    } ,
  };
};