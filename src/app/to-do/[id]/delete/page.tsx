import { notFound, redirect } from 'next/navigation';
import { db } from '@/app/db-connector';

interface TaskDeletePageProps{
    params:{
        id: string;
    };
}
export default async function deleteTask(props: TaskDeletePageProps) {
    'use server';
    try {
         await db.toDo.delete({
            where: {id: parseInt(props.params.id)},
        });
        console.log('Delete row id:', parseInt(props.params.id));
    } catch (error) {
    console.error('Error while deleting:', error);
    }     
    redirect('/');

}