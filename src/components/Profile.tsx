import * as React from 'react';

const name = '異世界転生プリン';

const bio = `
Next.jsとLoopbackが好きなフロントエンド寄りの Web Developer.
好きな食べ物はプリン。Haskell初心者。
`;

export default (): React.ReactElement => {
  return (
    <div className="w3-card w3-margin w3-margin-top">
      <img src="/media/avater.jpg" style={{ width: '100%' }} />
      <div className="w3-container w3-white">
        <h4><b>{name}</b></h4>
        <p>{bio}</p>
      </div>
    </div>
  );
};
