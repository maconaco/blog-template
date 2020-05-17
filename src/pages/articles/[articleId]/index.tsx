import * as React from 'react';
import { GetServerSideProps } from 'next';
import ArticleHeader from 'components/ArticleHeader';
import ArticleContent from 'components/ArticleContent';
import { Article } from 'src/types';
import Container from 'components/Container';
import CatchImage from 'components/CatchImage';

type Props = {
  article: Article;
};

export default function ArticlePage({ article }: Props) {
  return (
    <>
      <div className="w3-content" style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <Container className="w3-col l6 s8 w3-margin" style={{ lineHeight: '32px' }}>
          <ArticleHeader style={{ }} articleTitle={article.title} />
          <CatchImage style={{ margin: '40px auto', width: 'auto', textAlign: 'center' }}>
            <img src={article.image} />
          </CatchImage>
          <ArticleContent style={{ }} articleContent={article.content} />
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


