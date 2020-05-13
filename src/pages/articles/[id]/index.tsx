import * as React from 'react';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import ArticleHeader from 'components/ArticleHeader';
import { articles } from '@/data';

const fetcher = async (url = 'http://localhost:3000/api/articles/[id]') => {
  const res = await fetch(url);
  const data = await res.json();

  if (res.status !== 200) {
    throw new Error(data.message);
  }
  return data;
};

export default function Article() {
  const { query } = useRouter();
  const { data, error } = useSWR(
    () => query.id && `/api/article/${query.id}`,
    fetcher
  );

  if (error) return <div>{error.message}</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <>
      {!data && <div>{error.message}</div>}
      {articles.map((article) => (
        <ArticleHeader key={article.id} articleTitle={article.title} />
      ))}
    </>
  );
}
