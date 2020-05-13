import * as React from 'react';

import { Article } from 'src/types';
import Card from './Card';
import Post from './Post';

type Props = {
  posts: Article[];
};

export default ({ posts }: Props) => {
  return (
    <Card title="Popular Posts">
      <ul className="w3-ul w3-hoverable w3-white">
        {posts.map(post => (<Post key={post.id} {...post}/>))}
      </ul>
    </Card>
  );
};
