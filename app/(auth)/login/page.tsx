'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';

// components
import AuthForm from '../AuthForm';

export default function Login() {
  const router = useRouter();
  const [formError, setFormError] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>, email: string, password: string) => {
    e.preventDefault();
    setFormError('');

    const supabase = createClientComponentClient();
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password
    });

    if (error) {
      setFormError(error.message);
    } else {
      router.push('/');
    }
  }

  return (
    <main>
      <h2 className="text-center">Log in</h2>

      <AuthForm handleSubmit={handleSubmit} />

      {formError &&
        <div className="error">{formError}</div>
      }
    </main>
  );
}