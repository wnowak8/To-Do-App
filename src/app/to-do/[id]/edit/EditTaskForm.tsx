'use client'
import { useState } from 'react'; 

interface EditTaskFormProps {
  onSubmit: (formData: { title: string; description: string }) => Promise<void>;
  task: { title: string; description: string };
}

export default function EditTaskForm({ onSubmit, task }: EditTaskFormProps) {
  const [formData, setFormData] = useState({
    title: task.title || '',
    description: task.description || '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3 className="font-bold text-center m-3">Edit task</h3>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <label className="w-36" htmlFor="title">
            Title
          </label>
          <input
            name="title"
            id="title"
            className="border rounded p-2 w-full"
            value={formData.title}
            onChange={handleChange}
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
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="rounded p-2 bg-purple-400">
          Add
        </button>
      </div>
    </form>
  );
}
