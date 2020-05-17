import * as React from 'react';
import clsx from 'clsx';

type Props = {
  children: React.ReactNode;
  className?: string;
  style: React.CSSProperties;
};

export default ({
  children,
  className = '',
  style,
}: Props): React.ReactElement => {
  return (
    <div
      className={clsx('w3-container', className)}
      style={{ margin: 'auto', ...style }}
    >
      {children}
    </div>
  );
};
