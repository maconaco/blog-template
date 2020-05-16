import { articles } from '@/data';
import { NextApiResponse } from 'next';
import { Article } from '@/src/types';

export default (
  { query: { id } }: { query: { id: string } },
  res: NextApiResponse
): void => {
  const foundArticle: Article | undefined = articles.find(
    (article: Article) => article.id === id
  );

  if (foundArticle) {
    res.status(200).send(foundArticle);
    return;
  }
  res.status(404).json({ message: `Article with id: ${id} not found.` });
};
