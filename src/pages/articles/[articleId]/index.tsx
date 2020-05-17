import * as React from 'react';
import { GetServerSideProps } from 'next';
import ArticleHeader from 'components/ArticleHeader';
import ArticleContent from 'components/ArticleContent';
import { Article } from 'src/types';
import Container from 'components/Container';

type Props = {
  article: Article;
};

export default function ArticlePage({ article }: Props) {
  return (
    <>
      <div className="w3-content" style={{ maxWidth: '1400px' }}>
        <Container>
          <ArticleHeader articleTitle={article.title} />
          <ArticleContent articleContent={article.content} />
        </Container>
      </div>
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


