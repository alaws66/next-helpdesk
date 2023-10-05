import { User } from '@supabase/supabase-js';

import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/public/logo.png';
import LogoutButton from './LogoutButton';

type TUser = {
  user: User
}

const Navbar = ({ user }: TUser) => {
  return (
    <nav>
      <Image
        src={Logo}
        alt="Helpdesk logo"
        width={70}
        placeholder="blur"
        quality={100}
      />
      <h1>Helpdesk</h1>
      <Link href="/">Dashboard</Link>
      <Link href="/tickets">Tickets</Link>
      <Link href="/tickets/create" className="mr-auto">Create</Link>

      {user && <span>Hello, {user.email}</span>}
      <LogoutButton />
    </nav>
  );
}

export default Navbar;