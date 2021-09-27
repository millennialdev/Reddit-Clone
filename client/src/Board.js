import BoardHeader from './BoardHeader';
import PostForm from './PostForm';
import PostsListing from './PostsListing';

function Board({ value }) {
	return (
		<div>
			<BoardHeader />
			<PostForm />
			<PostsListing value={value} />
		</div>
	);
}

export default Board;
