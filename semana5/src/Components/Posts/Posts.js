import React from 'react';
import PostOfTheMonth from '../Context/PostOfTheMonth';

const Posts = () => {
	return (
		<PostOfTheMonth.Consumer>
			{(posts) =>
				posts && (
					<>
						<h2>Publicación del Mes</h2>
						<div>
							<h2>{posts.id}</h2>
							<p>{posts.title}</p>
							<p>{posts.body}</p>
						</div>
					</>
				)
			}
		</PostOfTheMonth.Consumer>
	);
};

export default Posts;
