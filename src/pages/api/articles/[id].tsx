import { articles } from '@/data';
import { NextApiResponse } from 'next';
import { Article } from '@/src/types';

export default (
  { query: { id } }: { query: { id: string } },
  res: NextApiResponse
): void => {
  const articleFound = articles.find(
    (article: Article) => article.id === id
  );

  if (articleFound) {
    res.status(200).send(articleFound);
    return;
  }
  res.status(404).json({ message: `Article with id: ${id} not found.` });
};
