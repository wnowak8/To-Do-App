import { notFound, redirect } from 'next/navigation';
import { db } from '@/app/db-connector';
import Link from 'next/link';

interface TaskShowPageProps{
    params:{
        id: string;
    };
}
export default async function TasksShowPage(props: TaskShowPageProps){
    const task = await db.toDo.findFirst({
        where: {id: parseInt(props.params.id)},
    });
    if (!task) return notFound();

    return <div className='bg-purple-100 p-2 m-4 rounded'>
    <div className='flex ml-2 my-2 justify-between items center'>
      <h1 className='text-xl font-bold'>{task.title}</h1>
      <div className='my-2 '>
      <Link href={`/to-do/${task.id}/edit`} className='border p-2 m-2 rounded bg-purple-400'>Edit</Link>
      <Link href={`/to-do/${task.id}/delete`} className='cursor-pointer border p-2 rounded bg-purple-400'>Delete</Link>
        </div>
    </div>
      <div className='flex flex-col gap-2 bg-purple-200 p-2'>{task.description}</div>
    </div>
}

