'use client'

import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';

export default function CreateForm() {
  const router = useRouter();

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [priority, setPriority] = useState('low');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const newTicket = { title, body, priority, user_email: 'yoshi@netninja.dev' }

    const res = await fetch('http://localhost:4000/tickets', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newTicket)
    });

    if (res.status === 201) {
      router.refresh();
      router.push('/tickets');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-1/2">
      <label>
        <span>Title:</span>
        <input
          required
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <label>
        <span>Body:</span>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
      </label>
      <label>
        <span>Priority:</span>
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="low">Low Priority</option>
          <option value="medium">Medium Priority</option>
          <option value="high">High Priority</option>
        </select>
      </label>
      <button
        disabled={isLoading}
        className="btn-primary"
      >
        <span>{isLoading ? 'Adding...' : 'Add Ticket'}</span>
      </button>
    </form>
  )
}
