import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Loading from './assets/icons/loading.gif';
import { Welcome } from './Components/Welcome/Welcome';
import PostList from './Components/PostList/PostList';
import { Modal } from './Components/Modal/Modal';
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			postId: '',
			posts: [],
			description: '',
			showModal: true,
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
		const { posts, postId, description, showModal } = this.state;
		return (
			<div className='App'>
				{/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
				<Welcome />
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
