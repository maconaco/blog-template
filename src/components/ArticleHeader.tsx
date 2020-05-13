import * as React from 'react';

import { Article } from '../types';

type Props = {
  articleTitle: Article['title'];
};

export default ({ articleTitle }: Props) => {
  return (
    <h1>{articleTitle}</h1>
  );
};