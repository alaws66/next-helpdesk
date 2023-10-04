import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/public/logo.png';

const Navbar = () => {
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
      <Link href="/tickets/create">Create</Link>
    </nav>
  );
}

export default Navbar;