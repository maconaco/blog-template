import * as React from 'react';
import { useRouter } from 'next/router';
import { Article } from 'src/types';

type Props = Article & {
};

export default ({
  id,
  content,
  createdAt,
  image,
  title,
  likes,
}: Props) => {
  const router = useRouter();
  return (
    <div className="w3-card-4 w3-margin w3-white">
      <img
        alt="Snow"
        className="img-cutout"
        src={image}
        style={{ width: '100%' }}
      />
      <div className="w3-container hl-title">
        <h3 className="flex">
          <b className="flex">{title} &nbsp;</b>
          <h4 className="w3-opacity">{createdAt}</h4>
        </h3>
      </div>
      <div className="w3-container">
        <p>{content}</p>
        <div className="w3-row">
          <div className="w3-col m8 s12">
            <p>
              <button
                className="w3-button w3-padding-large w3-white w3-border"
                onClick={() => { router.push(`/articles/${id}`); }}>
                <b>READ MORE »</b>
              </button>
            </p>
          </div>
          <div className="w3-col m4 w3-hide-small">
            <p><span className="w3-padding-large w3-right">
              <b>Like &nbsp;</b>
              <span className="w3-tag">{likes}</span>
            </span></p>
          </div>
        </div>
      </div>
      <style jsx>{`
        .hl-title {
          margin: 0;
        }
        .img-cutout {
          object-fit: cover;
          width: 100%;
          max-height: 40rem;
          margin-bottom: 1rem;
        }
      `}</style>
    </div>
  );
};
