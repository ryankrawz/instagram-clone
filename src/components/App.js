import React from 'react';

import css from './App.module.css';
import initialStore from 'utils/initialStore';

import Activity from './Activity';
import Explore from './Explore';
import Header from './Header';
import Home from './Home';
import Navbar from './Navbar';
import NewPost from './NewPost';
import Profile from './Profile';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'home',
      store: initialStore
    };
    this.addLike = this.addLike.bind(this);
		this.removeLike = this.removeLike.bind(this);
    this.setPage = this.setPage.bind(this);
  }

  addLike(postId) {
    const like = {
        userId: this.state.store.currentUserId, 
        postId,
        datetime: new Date().toISOString()
    };
    
    this.setState(state => ({
      store: {
        ...state.store,
        likes: state.store.likes.concat(like)
      }
    }));
  }

  removeLike(postId) {
    this.setState(state => ({
      store: {
        ...state.store,
        likes: state.store.likes.filter(like => !(like.userId === state.store.currentUserId && like.postId === postId))
      }
    }));
  }

  renderMain(page) {
    switch (page) {
      case 'explore': return <Explore/>;
      case 'newpost': return <NewPost/>;
      case 'activity': return <Activity/>;
      case 'profile': return <Profile store={this.state.store}/>;
      default: return <Home
        store={this.state.store}
        onLike={this.addLike} 
        onUnlike={this.removeLike}
      />;
    }
  }

  setPage(page) {
    this.setState({
      page: page
    });
  }

  render() {
    return (
      <div className={css.container}>
        <Header/>
        <main className={css.content}>
          {this.renderMain(this.state.page)}
        </main>
        <Navbar onNavChange={this.setPage}/>
      </div>
    );
  }
}

export default App;
