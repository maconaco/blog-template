import * as React from 'react';

import { Article } from '../types';

type Props = {
  articleContent: Article['content'];
  style: React.CSSProperties;
};

export default ({ articleContent, style }: Props) => {
  return (
    <>
      <div style={style}>
        <p>{articleContent}</p>
      </div>
    </>
  );
};
