import { db } from '@/app/db-connector';
import Link from 'next/link';

export default async function Home() {
  const tasks = await db.toDo.findMany();

  const renderedTasks= tasks.map((task) => {
    return (
      <Link
        key={task.id}
        href={`/to-do/${task.id}`}
        className="flex justify-between items-center p-2 border rounded">
          <div>{task.title}</div>
          <div>Details</div>
      </Link>
    )
  })
  return (
    <div>
      <div className='flex m-2 justify-between items-center'>
        <h1 className='text-xl font-bold'>Tasks</h1>
        <Link href="/to-do/new" className='border p-2 rounded'>Add</Link>
      </div>
        <div className='flex flex-col gap-2'>{renderedTasks}</div>
      </div>
  )
}
