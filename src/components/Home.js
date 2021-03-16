import React from 'react';

import css from './Home.module.css';
import { findComments, findLikes, findUser } from 'utils/find';
import publicUrl from 'utils/publicUrl';

import Post from './Post';

function Home(props) {
    const {store} = props;

    return (
        <div>
            {store.posts.sort((a, b) => new Date(b.datetime) - new Date(a.datetime)).map(post => (
                <Post
                    key={post.id}
                    user={findUser(post.userId, store)}
                    likes={findLikes(post, store)}
                    post={post}
                    comments={findComments(post, store)}
                    onLike={props.onLike} 
                    onUnlike={props.onUnlike}
                />
            ))}
        </div>
    );
}

export default Home;
