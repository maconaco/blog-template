import { Article, Tag } from './src/types';

const articles: Article[] = [
  {
    id: 'article1',
    title: 'Next.js と microCMSでブログ作成',
    content: `
  Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl.\n
  Sed mattis nunc id lorem euismod placerat.\n
  Vivamus porttitor magna enim, ac accumsan tortor cursus at. \n
  Phasellus sed ultricies mi non congue ullam corper.\n
  Praesent tincidunt sed tellus ut rutrum. \n
  Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.\n`,
    createdAt: 'May 9, 2020',
    image: '/media/nextjs.png',
    likes: 0,
  },
  {
    id: 'article2',
    title: 'w3.css でサイト制作',
    content: `
  w3.css は cssフレームワーク。React のコンポーネントを提供するスタイルのデザインフレームワークよりこのシンプルなCSSフレームワークでの開発は拡張性が高くデザインが自由。`,
    createdAt: 'May 9, 2019',
    image: 'media/w3css.jpg',
    likes: 2,
  }
];

const posts: Article[] = [
  ...articles,
  {
    id: 'article3',
    title: 'Scala が夫妻になりやすい話',
    content: '弊社にも負債と言うにふさわしい Scala のアピがある。',
    createdAt: '',
    image: 'media/pudding3.jpg',
    likes: 1,
  },
  {

    id: 'article3',
    title: '異世界転生できるプリンBest3',
    content: 'プリンで異世界転生が流行っています！',
    createdAt: '',
    image: 'media/pudding2.jpg',
    likes: 4,
  }
];

const tags: Tag[] = [
  {
    id: '1',
    name: 'Next.js',
    color: '#000',
  },
  {
    id: '2',
    name: 'w3.css',
    color: '#32a852',
  },
  {
    id: '3',
    name: 'microCMS',
    color: '#111',
  },
];

export { articles, posts, tags, };
