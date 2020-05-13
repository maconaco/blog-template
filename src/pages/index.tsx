import * as React from "react";

import HeadLine from "../components/HeadLine";
import Profile from "../components/Profile";
import Tags from "../components/Tags";
import { Article, Tag } from "../types";
import PopularPosts from "../components/PopularPosts";

const title = "プリンの世界";
const name = "異世界転生プリン";

const articles: Article[] = [
  {
    id: "article1",
    title: "Next.js と microCMSでブログ作成",
    content: `
Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl.
Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim,
ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue
ullam corper.
Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum,
porta lectus vitae, ultricies congue gravida diam non fringilla.`,
    createdAt: "May 9, 2020",
    image: "/media/nextjs.png",
    likes: 0,
  },
  {
    id: "article2",
    title: "w3.css でサイト制作",
    content: `
w3.css は cssフレームワーク。React のコンポーネントを提供するスタイルのデザインフレームワークよりこのシンプルなCSSフレームワークでの開発は拡張性が高くデザインが自由。`,
    createdAt: "May 9, 2019",
    image: "media/w3css.jpg",
    likes: 2,
  },
];

const posts: Article[] = [
  ...articles,
  {
    id: "article3",
    title: "Scala が夫妻になりやすい話",
    content: "弊社にも負債と言うにふさわしい Scala のアピがある。",
    createdAt: "",
    image: "media/pudding3.jpg",
    likes: 1,
  },
  {
    id: "article3",
    title: "異世界転生できるプリンBest3",
    content: "プリンで異世界転生が流行っています！",
    createdAt: "",
    image: "media/pudding2.jpg",
    likes: 4,
  },
];

const tags: Tag[] = [
  {
    id: "1",
    name: "Next.js",
    color: "#000",
  },
  {
    id: "2",
    name: "w3.css",
    color: "#32a852",
  },
  {
    id: "3",
    name: "microCMS",
    color: "#111",
  },
];

export default function Index() {
  return (
    <>
      <div className="w3-content" style={{ maxWidth: "1400px" }}>
        <header className="w3-container w3-center w3-padding-32">
          <h1>
            <b>{title}</b>
          </h1>
          <p>
            <span className="w3-tag">{name}</span>&nbsp;のブログ
          </p>
        </header>
        <div className="w3-row">
          <div className="w3-col l8 s12">
            {articles.map((article) => (
              <HeadLine key={article.id} {...article} />
            ))}
          </div>
          <div className="w3-col l4">
            <Profile />
            <hr />
            <PopularPosts posts={posts} />
            <hr />
            <Tags tags={tags} />
          </div>
        </div>
        <br />
      </div>
      <footer className="w3-container w3-dark-grey w3-padding-32 w3-margin-top">
        <button className="w3-button w3-black w3-disabled w3-padding-large w3-margin-bottom">
          Previous
        </button>
        <button className="w3-button w3-black w3-padding-large w3-margin-bottom">
          Next »
        </button>
        <p>
          Powered by
          <a href="https://www.w3schools.com/w3css/default.asp">w3.css</a>
        </p>
      </footer>
    </>
  );
}
