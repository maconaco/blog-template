import * as React from 'react';
import clsx from 'clsx';

import { Article } from '../types';

type Props = Article & {
};

export default ({
  image,
  title,
  content,
}: Props) => {
  return (
    <li className="w3-padding-16 post-elips">
      <img
        src={image}
        alt="Image"
        className={clsx(
          'w3-left',
          'w3-margin-right',
          'post-image'
        )}
        style={{ width: '50px' }}
      />
      <span className="w3-large">{title}</span>
      <br/>
      <span className="post-elips">{content}</span>
      <style jsx>{`
        .post-elips {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          width: 100%;
        }
        .post-image {
          min-height: 36px;
          object-fit: cover;
          width: 50px;
        }
      `}</style>
    </li>
  );
};
