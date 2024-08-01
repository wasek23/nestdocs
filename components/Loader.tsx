import Image from 'next/image';

const Loader = () => {
	return <div className='loader'>
		<Image className='animate-spin' src='/assets/icons/loader.svg' alt='Loader' width={32} height={32} />

		Loading...
	</div>
}
export default Loader;