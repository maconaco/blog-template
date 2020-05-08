import * as React from 'react';

import HeadLine from '../components/HeadLine';
import Profile from '../components/Profile';
import { Article } from '../types';

const title = 'プリンの世界';
const name = '異世界転生プリン';

const articles: Article[] = [
  {
    id: 'article1',
    title: 'Next.js と microCMSでブログ作成',
    content: `
Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl.
Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim,
ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue
ullam corper.
Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum,
porta lectus vitae, ultricies congue gravida diam non fringilla.`,
    createdAt: 'May 9, 2020',
    image: '/media/nextjs.png',
    likes: 0,
  },
  {
    id: 'article2',
    title: 'w3.css でサイト制作',
    content: `
w3.css は cssフレームワーク。React のコンポーネントを提供するスタイルのフレームワーク
よりこのシンプルなCSSフレームワークでの開発は拡張性が高くデザインが自由。`,
    createdAt: 'May 9, 2019',
    image: 'media/w3css.jpg',
    likes: 2,
  }
];

export default function Index() {
  return (
    <>
      <div className="w3-content" style={{ maxWidth: '1400px' }}>
        <header className="w3-container w3-center w3-padding-32">
          <h1><b>{title}</b></h1>
          <p><span className="w3-tag">{name}</span>のブログ</p>
        </header>
        <div className="w3-row">
          <div className="w3-col l8 s12">
            {articles.map(article => (
              <HeadLine key={article.id} {...article} />
            ))}
          </div>
          <div className="w3-col l4">
            <Profile />
            <hr />
            <div className="w3-card w3-margin">
              <div className="w3-container w3-padding">
                <h4>Popular Posts</h4>
              </div>
              <ul className="w3-ul w3-hoverable w3-white">
                <li className="w3-padding-16">
                  <img
                    src="/media/kagura1.jpeg"
                    alt="Image"
                    className="w3-left w3-margin-right"
                    style={{ width: '50px' }}
                  />
                  <span className="w3-large">Lorem</span>
                  <br/>
                  <span>Sed mattis nunc</span>
                </li>
                <li className="w3-padding-16">
                  <img
                    src="/media/pudding2.jpg"
                    alt="Image"
                    className="w3-left w3-margin-right"
                    style={{ width: '50px' }}
                  />
                  <span className="w3-large">Ipsum</span>
                  <br />
                  <span>Praes tinci sed</span>
                </li>
                <li className="w3-padding-16">
                  <img
                    src="/media/pudding2.jpg"
                    alt="Image"
                    className="w3-left w3-margin-right"
                    style={{ width: '50px' }}
                  />
                  <span className="w3-large">Dorum</span>
                  <br />
                  <span>Ultricies congue</span>
                </li>
                <li className="w3-padding-16 w3-hide-medium w3-hide-small">
                  <img
                    src="/media/pudding3.jpg"
                    alt="Image"
                    className="w3-left w3-margin-right"
                    style={{ width: '50px' }}
                  />
                  <span className="w3-large">Mingsum</span>
                  <br />
                  <span>Lorem ipsum dipsum</span>
                </li>
              </ul>
            </div>
            <hr />
            <div className="w3-card w3-margin">
              <div className="w3-container w3-padding">
                <h4>Tags</h4>
              </div>
              <div className="w3-container w3-white">
                <p>
                  <span
                    className="w3-tag w3-black w3-margin-bottom">
                      Travel
                  </span>
                  <span
                    className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                      New York
                  </span>
                  <span
                    className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                      London
                  </span>
                  <span
                    className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                      IKEA
                  </span>
                  <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                      NORWAY
                  </span>
                  <span
                    className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                      DIY
                  </span>
                  <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                      Ideas
                  </span>
                  <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                      Baby
                  </span>
                  <span
                    className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                      Family
                  </span>
                  <span
                    className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                      News
                  </span>
                  <span
                    className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                      Clothing
                  </span>
                  <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                      Shopping
                  </span>
                  <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                      Sports
                  </span>
                  <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                      Games
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <br />
      </div>
      <footer className="w3-container w3-dark-grey w3-padding-32 w3-margin-top">
        <button
          className="w3-button w3-black w3-disabled w3-padding-large w3-margin-bottom">
          Previous
        </button>
        <button
          className="w3-button w3-black w3-padding-large w3-margin-bottom">
          Next »
        </button>
        <p>
          Powered by
          <a href="https://www.w3schools.com/w3css/default.asp">
            w3.css
          </a>
        </p>
      </footer>
    </>
  );
}
