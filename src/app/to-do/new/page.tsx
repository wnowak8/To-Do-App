import { db } from '@/app/db-connector';
import { redirect } from 'next/navigation';
 
export default function CreateTaskPage() {
  async function createTask(formData: FormData) {
    'use server';
    const title = formData.get('title') as string;
    const description = formData.get('description') as string;
 
    const task = await db.toDo.create({
      data: {
        title,
        description,
      },
    });
    console.log(task);
 
    redirect('/');
  }
    return (
      <form action={createTask}>
        <h3 className="font-bold text-center m-3">Add new task</h3>
        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <label className="w-36" htmlFor="title">
              Title
            </label>
            <input
              name="title"
              id="title"
              className="border rounded p-2 w-full"
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
            />
          </div>
   
          <button type="submit" className="rounded p-2 bg-purple-300">
            Add
          </button>
        </div>
      </form>
    );
  }