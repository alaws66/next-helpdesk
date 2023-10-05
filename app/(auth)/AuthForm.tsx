'use client'

import { FormEvent, useState } from 'react';

type TParams = {
  handleSubmit: (
    // eslint-disable-next-line no-unused-vars
    e: FormEvent<HTMLFormElement>,
    // eslint-disable-next-line no-unused-vars
    email: string,
    // eslint-disable-next-line no-unused-vars
    password: string
  ) => Promise<void>
}

export default function AuthForm({ handleSubmit }: TParams) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <form onSubmit={e => handleSubmit(e, email, password)}>
      <label>
        <span>Email:</span>
        <input
          required
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </label>

      <label>
        <span>Password:</span>
        <input
          required
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </label>

      <button className="btn-primary">Submit</button>
    </form>
  );
}