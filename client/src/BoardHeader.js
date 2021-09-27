function BoardHeader() {
	return (
		<>
			<div
				className='h-40 bg-cover'
				style={{
					backgroundImage:
						'url("https://preview.redd.it/xw6wqhhjubh31.jpg?width=2400&format=pjpg&auto=webp&s=32690f33b69e599ed11ea3e7c0e6286c0770245e")',
					backgroundPosition: 'center center',
				}}></div>
			<div className='bg-reddit_dark-brighter'>
				<div className='mx-6 relative flex'>
					<div className='h-20 w-20 rounded-full overflow-hidden relative -top-3 border-4 border-white bg-white'>
						<img
							src='https://avatars.githubusercontent.com/u/6439723?v=4'
							alt=''
						/>
					</div>
					<div className='pt-2 pl-4'>
						<h1 className='text-gray-300 text-3xl'>
							Spenser Zone: My own personal subreddit
						</h1>
						<p className='text-gray-300 text-1xl mt-1'>
							Hi, My Name is Spenser: This is my clone of Reddit
						</p>
						<h5 className='text-gray-500'>r/spenser-zone</h5>
					</div>
				</div>
			</div>
		</>
	);
}

export default BoardHeader;
