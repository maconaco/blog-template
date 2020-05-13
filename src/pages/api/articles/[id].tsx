import { articles } from "../../../../data";

export default ({ query: { id } }, res) => {
  const articleFound = articles.find((article) => article.id === id); // Article | undefined

  if (articleFound) {
    res.status(200).send(articleFound);
    return;
  }
  res.status(404).json({ message: `User with id: ${id} not found.` });
};
