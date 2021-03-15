import React from 'react';

import css from './Post.module.css';
import publicUrl from 'utils/publicUrl';
import timespan from 'utils/timespan';

import Response from './Response';

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.handleLike = this.handleLike.bind(this);
        this.handleUnlike = this.handleUnlike.bind(this);
    }

    handleLike() {
        this.props.onLike(this.props.post.id);
    }

    handleUnlike() {
        this.props.onUnlike(this.props.post.id);
    }

    render() {
        return (
            <section className={css.post}>
                <div className={css.postHeader}>
                    <img className={css.profilePhoto} src={publicUrl(this.props.user.photo)} alt={this.props.user.id}/>
                    <span className={css.bold}>{this.props.user.id}</span>
                </div>
                <img className={css.postPhoto} src={publicUrl(this.props.post.photo)} alt={this.props.post.desc}/>
                <div className={css.activityBar}>
                    <div>
                        {this.props.likes.self ?
                            <img className={css.postItem} src={publicUrl('/assets/unlike.svg')} alt={'Unlike'} onClick={this.handleUnlike}/> :
                            <img className={css.postItem} src={publicUrl('/assets/like.svg')} alt={'Like'} onClick={this.handleLike}/>
                        }
                        <img className={css.postItem} src={publicUrl('/assets/comment.svg')}/>
                    </div>
                    <span className={`${css.bold} ${css.postItem}`}>{this.props.likes.count} likes</span>
                </div>
                <div className={css.postItem}>
                    <Response username={this.props.user.id} text={this.props.post.desc}/>
                    {this.props.comments.map((c, i) => (
                        <Response key={i} username={c.userId} text={c.text}/>
                    ))}
                </div>
                <span className={`${css.postItem} ${css.postTimestamp}`}>{timespan(this.props.post.datetime)}</span>
            </section>
        );
    }
}

export default Post;
