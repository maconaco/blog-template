import * as React from 'react';

type Props = {
  children: React.ReactNode;
  title: string;
};

export default ({
  children,
  title,
}: Props) => {
  return (
    <div className="w3-card w3-margin">
      <div className="w3-container w3-padding">
        <h4>{title}</h4>
      </div>
      {children}
    </div>
  );
};
