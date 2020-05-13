import { articles } from "../../../../data";

export default ({ query: { id } }, res) => {
  const filtered = articles.filter((a) => a.id === id);

  // User with id exists
  if (filtered.length > 0) {
    res.status(200).json();
  } else {
    res.status(404).json({ message: `User with id: ${id} not found.` });
  }
};
