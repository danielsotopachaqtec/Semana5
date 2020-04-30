import React, { Component } from 'react';
// import './PostList.css';
import { styles } from './PostListStyles';

export default class PostList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			posts: [],
		};
	}
	componentDidMount() {
		this.setState({
			posts: this.props.posts,
		});
	}
	render() {
		const { posts } = this.props;
		const cardsPost = posts.map((post, index) => (
			<div key={post.id} style={styles.cardContainer}>
				<div style={styles.postId}>
					<h2 style={styles.postIdText}>{post.id}</h2>
				</div>
				<div style={styles.postDescription}>
					<div>
						<h2 style={styles.postTitleText}>{post.title}</h2>
					</div>
					<div>
						<p style={styles.postDescriptionText}>{post.body}</p>
					</div>
				</div>
			</div>
		));
		console.log('posts PostList', posts);
		return <div style={styles.containerList}>{cardsPost}</div>;
	}
}
