'use client'

import { FormEvent, useState } from 'react';
import AuthForm from '../AuthForm';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';

export default function Signup() {
  const router = useRouter();
  const [formError, setFormError] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>, email: string, password: string) => {
    e.preventDefault();

    const supabase = createClientComponentClient();
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/api/auth/callback`
      }
    });

    if (error) {
      setFormError(error.message);
    } else {
      router.push('/verify');
    }
  }

  return (
    <main>
      <h2 className="text-center">Sign up</h2>

      <AuthForm handleSubmit={handleSubmit} />
      {formError &&
        <div>Error</div>
      }
    </main>
  );
}