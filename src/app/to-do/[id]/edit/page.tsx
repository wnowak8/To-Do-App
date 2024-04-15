import { db } from '@/app/db-connector';
import { redirect } from 'next/navigation';
 
interface TaskShowPageProps{
  params:{
      id: string;
  };
}
export default async function editTaskPage(props: TaskShowPageProps){
  async function editTask(formData: FormData) {
    'use server';
    const title = formData.get('title') as string;
    const description = formData.get('description') as string;
 
    const updatedTask = await db.toDo.update({
      where: { id: parseInt(props.params.id) },
      data: {
        title,
        description,
      },
    });
    console.log(updatedTask);
    console.log(title);
    console.log(description);
 
    redirect('/');
  }
  const task = await db.toDo.findFirst({
    where: {id: parseInt(props.params.id)},
});
    return (
      <form action={editTask}>
        <h3 className="font-bold m-3">Edit task</h3>
        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <label className="w-36" htmlFor="title">
              Title
            </label>
            <input
              name="title"
              id="title"
              className="border rounded p-2 w-full"
              value={task.title}
            />
          </div>
          <div className="flex gap-4">
            <label className="w-36" htmlFor="description">
              Description
            </label>
            <textarea
              name="description"
              id="description"
              className="border rounded p-2 w-full"
              value={task?.description}
            />
          </div>
   
          <button type="submit" className="rounded p-2 bg-blue-200">
            Add
          </button>
        </div>
      </form>
    );
  }