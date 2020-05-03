import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { ReactComponent as BellIcon } from './assets/icons/bell.svg';
import Loading from './assets/icons/loading.gif';
import { Welcome } from './Components/Welcome/Welcome';
import PostList from './Components/PostList/PostList';
import { Modal } from './Components/Modal/Modal';
import Posts from './Components/Posts/Posts';
import PostOftheMonthProvider from './Components/Provider/PostOftheMonthProvider';
import { Navbar } from './Components/Navbar/Navbar';
import { NavItem } from './Components/NavItem/NavItem';
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			postId: '',
			posts: [],
			description: '',
			showModal: true,
			post: null,
		};
	}
	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then((response) => response.json())
			.then((posts) =>
				this.setState({
					posts: [...posts],
					showModal: false,
				})
			)
			.catch((err) => {
				console.log('error:', err);
				this.setState({
					posts: [
						{
							id: 0,
							title:
								'En estos momentos el servicio no se encuentra disponible.',
							body: 'Intentenuevamente en los próximos minutos.',
						},
					],
					showModal: false,
				});
			});
	}
	modalHandler = (e) => {
		e.preventDefault();
		this.setState({
			showModal: !this.state.showModal,
		});
	};
	render() {
		const { posts, postId, description, showModal, post } = this.state;
		return (
			<div className='App'>
				<Navbar>
					<NavItem icon={<BellIcon />} />
				</Navbar>
				<Welcome />
				<PostOftheMonthProvider>
					<Posts />
				</PostOftheMonthProvider>
				<PostList posts={posts} />
				<Modal visible={showModal} closeModal={this.modalHandler}>
					<div className='loading'>
						<img src={Loading} alt='loading...' />
					</div>
				</Modal>
			</div>
		);
	}
}

export default App;
