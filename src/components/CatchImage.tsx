import * as React from 'react';

type Props = {
  style: React.CSSProperties;
  className?: string;
  children: React.ReactNode;
};

export default ({  style, className = '', children }: Props) => {
  return (
    <>
      <div className={className} style={style}>
        {children}
      </div>
    </>
  );
};
