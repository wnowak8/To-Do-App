import { notFound, redirect } from 'next/navigation';
import { db } from '@/app/db-connector';
import Link from 'next/link';

interface TaskShowPageProps{
    params:{
        id: string;
    };
}
export default async function TasksShowPage(props: TaskShowPageProps){
    // await new Promise(r=> setTimeout(r, 5000));
    const task = await db.toDo.findFirst({
        where: {id: parseInt(props.params.id)},
    });
    if (!task) return notFound();


      
    return <div>
    <div className='flex m-2 justify-between items center'>
      <h1 className='text-xl font-bold'>{task.title}</h1>
      <div className='m-2'>
      <Link href={`/to-do/${task.id}/edit`} className='border p-2 m-2 rounded'>Edit</Link>
      <a href={`/to-do/${task.id}/delete`} className="cursor-pointer border p-2 rounded">Delete</a>
        </div>
    </div>
      <div className='flex flex-col gap-2'>{task.description}</div>
    </div>
}

