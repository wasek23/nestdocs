'use client';
import { useRouter } from 'next/navigation';

import Image from 'next/image';
import { Button } from './ui/button';
import { createDocument } from '@/lib/actions/room.actions';

const AddDocumentBtn = ({ userId, email }: AddDocumentBtnProps) => {
	const router = useRouter();

	const addDocumentHandler = async () => {
		try {
			const room = await createDocument({ userId, email });

			if (room) router.push(`/documents/${room.id}`);
		} catch (error) {
			console.log(error);
		}
	}

	return <Button className='gradient-blue flex gap-1 shadow-md' type='submit' onClick={addDocumentHandler}>
		<Image src='/assets/icons/add.svg' alt='Add' width={24} height={24} />

		<p className='hidden sm:block'>Start a blank document</p>
	</Button>
}
export default AddDocumentBtn;