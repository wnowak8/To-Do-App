// src/app/to-do/[id]/edit/index.tsx

import { db } from '@/app/db-connector';
import { redirect } from 'next/navigation';
import EditTaskForm from './EditTaskForm'; // Importujemy komponent EditTaskForm

interface TaskShowPageProps {
  params: {
    id: string;
  };
}

export default async function EditTaskPage(props: TaskShowPageProps) {
  const task = await db.toDo.findFirst({
    where: { id: parseInt(props.params.id) },
  });

  async function editTask(formData: { title: string; description: string }) {
    'use server';
    const { title, description } = formData;

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

  return <EditTaskForm onSubmit={editTask} task={task} />;
}
