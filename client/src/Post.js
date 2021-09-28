import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PostContent from './PostContent';
import axios from 'axios';

function Post(props) {
	let postClasses =
		'block border rounded-md ' +
		(props.open ? '' : 'hover:border-reddit_text cursor-pointer');
	if (props.isListing) {
		postClasses +=
			' bg-reddit_dark-brighter p-3 mx-6 border-2 border-reddit_border';
	} else {
		postClasses += ' border-none';
	}

	function handleDelete() {
		axios
			.delete('http://localhost:4000/comments/' + props._id)
			.then(() => window.location.reload());
		return false;
	}

	function handleEdit() {
		let data = 'hello world';
		axios
			.put('http://localhost:4000/comments/' + props._id, data)
			.then(() => window.location.reload());
		return false;
	}

	return (
		<div id={props.id} className='text-reddit_text pb-4'>
			{props.open && (
				<div className={postClasses}>
					<PostContent {...props} />
				</div>
			)}
			{!props.open && (
				<Link
					to={{
						pathname: '/comments/' + props._id,
						state: { commentId: props._id },
					}}
					className={postClasses}>
					<PostContent {...props} />
				</Link>
			)}
			<div class='flex flex-row justify-evenly w-28 ml-auto mr-auto'>
				<svg
					onClick={() => handleEdit()}
					xmlns='http://www.w3.org/2000/svg'
					class='h-8 w-8 ml-auto mr-auto mt-5 cursor-pointer'
					fill='none'
					viewBox='0 0 24 24'
					stroke='currentColor'>
					<path
						stroke-linecap='round'
						stroke-linejoin='round'
						stroke-width='2'
						d='M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z'
					/>
				</svg>
				<svg
					onClick={() => handleDelete()}
					xmlns='http://www.w3.org/2000/svg'
					className='h-8 w-8 ml-auto mr-auto mt-5 cursor-pointer'
					fill='none'
					viewBox='0 0 24 24'
					stroke='currentColor'>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth={2}
						d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
					/>
				</svg>
			</div>
		</div>
	);
}

export default Post;
