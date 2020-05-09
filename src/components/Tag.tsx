import * as React from 'react';
import clsx from 'clsx';

type Props = {
  name: string;
  color: string;
  large?: boolean;
};

export default ({
  name,
  color,
  large = false,
}: Props) => {
  return (
    <span
      className={
        clsx('w3-tag', 'w3-margin-bottom', { 'w3-small': !large })
      }
      style={{ backgroundColor: color }}>
      {name}
    </span>
  );
};
