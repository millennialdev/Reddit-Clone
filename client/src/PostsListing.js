import Post from './Post';
import { useState, useEffect } from 'react';
import axios from 'axios';

function PostsListing({ value }) {
	const [comments, setComments] = useState([]);

	useEffect(() => {
		if (value === '') {
			axios
				.get('http://localhost:4000/comments', { withCredentials: true })
				.then((response) => setComments(response.data));
		} else {
			setComments(
				comments.filter((i) => {
					return i.title.toLowerCase().startsWith(value.toLowerCase());
				})
			);
		}
	}, [value]);

	// console.log(comments);

	useEffect(() => {
		axios
			.get('http://localhost:4000/comments', { withCredentials: true })
			.then((response) => setComments(response.data));
	}, []);

	return (
		<div className='bg-reddit_dark'>
			{comments.map((comment) => (
				<Post {...comment} isListing={true} />
			))}
		</div>
	);
}

export default PostsListing;
