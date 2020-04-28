import React, { Component } from 'react';
import './PostList.css';

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
		console.log('posts PostList', posts);
		return <ul></ul>;
	}
}
