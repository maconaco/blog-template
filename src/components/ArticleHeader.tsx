import * as React from 'react';

import { Article } from '../types';

type Props = {
  articleTitle: Article['title'];
  style: React.CSSProperties;
};

export default ({ articleTitle, style }: Props) => {
  return (
    <h1 style={style}>{articleTitle}</h1>
  );
};
