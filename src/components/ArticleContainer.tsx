import * as React from 'react';
import clsx from 'clsx';

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default ({
  children,
  className = '',
}: Props): React.ReactElement => {
  return (
    <div className={clsx('w3-container', className)}
      style={{ width: '800px' , margin: '20px auto' }}>
      {children}
    </div>
  );
};
