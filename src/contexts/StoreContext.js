import firebase from 'firebase';
import 'firebase/database';
import React, { createContext, useEffect, useState } from 'react';

import uniqueId from 'utils/uniqueId';

const firebaseConfig = {
    apiKey: "AIzaSyDxA78Ih4iISd5wJgLBr7D0fV-p5FoiDDg",
    authDomain: "krawczry-csci2254.firebaseapp.com",
    projectId: "krawczry-csci2254",
    storageBucket: "krawczry-csci2254.appspot.com",
    messagingSenderId: "292846939114",
    appId: "1:292846939114:web:08162f5d2e394446e62093"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export const StoreContext = createContext();

function StoreContextProvider(props) {
    const [currentUserId, setCurrentUserId] = useState('judy');
    const [users, setUsers] = useState([]);
    const [posts, setPosts] = useState([]);
    const [likes, setLikes] = useState([]);
    const [followers, setFollowers] = useState([]);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        db.collection('users').get().then(snapshot => {
            const dbUsers = snapshot.docs.map(d => d.data());
            setUsers(dbUsers);
        });
        db.collection('posts').get().then(snapshot => {
            const dbPosts = snapshot.docs.map(d => d.data());
            setPosts(dbPosts);
        });
        db.collection('followers').get().then(snapshot => {
            const dbFollowers = snapshot.docs.map(d => d.data());
            setFollowers(dbFollowers);
        });
        db.collection('comments').get().then(snapshot => {
            const dbComments = snapshot.docs.map(d => d.data());
            setComments(dbComments);
        });
        db.collection('likes').get().then(snapshot => {
            const dbLikes = snapshot.docs.map(d => d.data());
            setLikes(dbLikes);
        });
    }, []);

    function addComment(postId, text) {
        const comment = {
            userId: currentUserId, 
            postId,
            text,
            datetime: new Date().toISOString()
        };

        setComments(comments.concat(comment));
        db.collection('comments').add(comment);
    }

    function addFollower(userId) {
        const newFollower = {
            userId,
            followerId: currentUserId
        }
        
        setFollowers(followers.concat(newFollower));
        db.collection('followers').add(newFollower);
    }

    function addPost(photo, desc) {
        if (!photo) {
            throw new TypeError('Photo required');
        }
        const newPost = {
            id: uniqueId('post'),
            userId: currentUserId,
            photo,
            desc,
            datetime: new Date().toISOString()
        };
        
        setPosts(posts.concat(newPost));
        db.collection('posts').add(newPost);
    }

    function addLike(postId) {
        const like = {
            userId: currentUserId, 
            postId,
            datetime: new Date().toISOString()
        };

        setLikes(likes.concat(like));
        db.collection('likes').add(like);
    }

    function removeFollower(userId) {
        setFollowers(followers.filter(follower => !(follower.followerId === currentUserId && follower.userId === userId)));
        db.collection('followers')
            .where('userId', '==', userId)
            .where('followerId', '==', currentUserId)
            .get()
            .then(snapshot => snapshot.forEach(doc => doc.ref.delete()));
    }

    function removeLike(postId) {
        setLikes(likes.filter(like => !(like.userId === currentUserId && like.postId === postId)));
        db.collection('likes')
            .where('userId', '==', currentUserId)
            .where('postId', '==', postId)
            .get()
            .then(snapshot => snapshot.forEach(doc => doc.ref.delete()));
    }

	return (
        <StoreContext.Provider value={{currentUserId, users, posts, likes, followers, comments,
        addComment, addFollower, addPost, addLike, removeFollower, removeLike}}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;
