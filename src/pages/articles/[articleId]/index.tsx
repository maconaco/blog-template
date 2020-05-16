import * as React from 'react';
import { GetServerSideProps } from 'next';
import ArticleHeader from 'components/ArticleHeader';
import { Article } from 'src/types';

type Props = {
  article: Article;
};

export default function ArticlePage({ article }: Props) {
  return (
    <>
      <ArticleHeader articleTitle={article.title} />
      <div>{article.content}</div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const articleId = context.query.articleId;
  const res = await fetch(`http://localhost:3000/api/articles/${articleId}`);
  const article = (await res.json()) as Article;

  return { props: { article } };
};
