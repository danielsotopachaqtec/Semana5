import React, { Component } from 'react';
import PostOfTheMonth from '../Context/PostOfTheMonth';

export default class PostOfTheMonthProvider extends Component {
	constructor(props) {
		super(props);
		this.state = {
			post: [],
		};
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/comments?postId=1')
			.then((response) => response.json())
			.then((post) =>
				this.setState({
					post,
				})
			)
			.catch((error) => console.log('error', error));
	}
	render() {
		const { post } = this.state;
		const { children } = this.props;
		return (
			<PostOfTheMonth.Provider value={post}>
				{children}
			</PostOfTheMonth.Provider>
		);
	}
}
