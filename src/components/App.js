import React, { useState } from 'react';

import css from './App.module.css';
import { findFollowers, findFollowing, findPosts, findUser } from 'utils/find';
import initialStore from 'utils/initialStore';

import Activity from './Activity';
import Explore from './Explore';
import Header from './Header';
import Home from './Home';
import Navbar from './Navbar';
import NewPost from './NewPost';
import Profile from './Profile';

function App() {
  const [page, setPage] = useState('home');
  const [store, setStore] = useState(initialStore);

  function addComment(postId, text) {
    const comment = {
      userId: store.currentUserId, 
      postId,
      text,
      datetime: new Date().toISOString()
    };

    setStore({
      ...store,
        comments:store.comments.concat(comment)
    });
  }

  function addLike(postId) {
    const like = {
      userId: store.currentUserId, 
      postId,
      datetime: new Date().toISOString()
    };
    
    setStore({
      ...store,
      likes: store.likes.concat(like)
    });
  }

  function removeLike(postId) {
    setStore({
      ...store,
      likes: store.likes.filter(like => !(like.userId === store.currentUserId && like.postId === postId))
    });
  }

  function renderMain(page) {
    switch (page) {
      case 'explore': return <Explore/>;
      case 'newpost': return <NewPost/>;
      case 'activity': return <Activity/>;
      case 'profile': return <Profile
        user={findUser(store.currentUserId, store)}
        followers={findFollowers(store.currentUserId, store)}
        following={findFollowing(store.currentUserId, store)}
        posts={findPosts(store.currentUserId, store)}
      />;
      default: return <Home
        store={store}
        onLike={addLike} 
        onUnlike={removeLike}
        onComment={addComment}
      />;
    }
  }

  return (
    <div className={css.container}>
      <Header/>
      <main className={css.content}>
        {renderMain(page)}
      </main>
      <Navbar onNavChange={setPage}/>
    </div>
  );
}

export default App;
