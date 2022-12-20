import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";


import styles from "./App.module.css";

import "./global.css";

const post = [
  {
    id: 1,
    author:{
      avatarUrl:'https://github.com/thiagomv-ca.png',
      name:'Thiago Vieira',
      role:'Software Engineer'
    },
    content: [
      {type: 'paragraph', content:  'Hello There 👋'},
      {type: 'paragraph', content:  'I committed a new project to my portfolio'},
      {type: 'link', content:  'https://github.com/thiagomv-ca'},
    ],
    publishedAt: new Date('2022-10-26 20:00:00')
  },
  {
    id: 2,
    author:{
      avatarUrl:'https://github.com/diego3g.png',
      name:'Diego Fernandes',
      role:'CTO@Rocketseat'
    },
    content: [
      {type: 'paragraph', content:  'Hello There '},
      {type: 'paragraph', content:  'I committed a new project to my portfolio'},
      {type: 'link', content:  'https://github.com/diego3g'},
    ],
    publishedAt: new Date('2022-10-26 20:00:00')
  }
];

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
      <Sidebar />
      <main>
       {post.map( post => {
          return (
            <Post 
              key={post.id}
              author={post.author}
              content={post.content as []}
              publishedAt={post.publishedAt}
            
            />
          )
       })}
      </main>
      </div>

    </div>
  );
}

export default App;
