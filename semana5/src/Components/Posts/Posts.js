import React from 'react';
import PostOfTheMonth from '../Context/PostOfTheMonth';

const Posts = () => {
	return (
		<PostOfTheMonth.Consumer>
			{(posts) =>
				posts && (
					<>
						{console.log('posts', posts)}
						<h2>Publicación del Mes</h2>
						{posts.map((post, index) => (
							<div key={post.id}>
								<h2>{post.id}</h2>
								<p>{post.name}</p>
								<p>{post.email}</p>
								<p>{post.body}</p>
							</div>
						))}
					</>
				)
			}
		</PostOfTheMonth.Consumer>
	);
};

export default Posts;
