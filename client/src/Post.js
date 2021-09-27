import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PostContent from './PostContent';

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

	let handleDelete = (e) => {
		e.currentTarget.parentNode.style.display = 'none';
	};

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
					<svg
						onClick={(e) => handleDelete(e)}
						xmlns='http://www.w3.org/2000/svg'
						className='h-8 w-8 float-right'
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
					<PostContent {...props} />
				</Link>
			)}
		</div>
	);
}

export default Post;
