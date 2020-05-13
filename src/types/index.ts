export type Article = {
  id: string;
  image: string;
  title: string;
  content: string;
  createdAt: string;
  likes: number;
};

export type Tag = {
  id: string;
  name: string;
  color: string;
};

export type Message = {
  massage: string;
};
