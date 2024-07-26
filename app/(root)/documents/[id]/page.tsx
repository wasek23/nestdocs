import { Editor } from '@/components/editor/Editor';
import Header from '@/components/ui/Header';

const Document = () => {
	return <div className='document'>
		<Header>
			<div className='flex w-fit items-center justify-center gap-2'>
				<p className='document-title'>This is a fake document title</p>
			</div>
		</Header>

		<Editor />
	</div>
}
export default Document;