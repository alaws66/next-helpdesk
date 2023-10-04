import { TTicket } from '@/app';
import { notFound } from 'next/navigation';

type TParams = {
  params: {
    id: string;
  }
}

export async function generateStaticParams() {
  const res = await fetch('http://localhost:4000/tickets');

  const tickets = await res.json();

  return tickets.map((ticket: TTicket) => ({
    id: ticket.id
  }));
}

// fetch json data
const getTicket = async (id: string) => {
  const res = await fetch('http://localhost:4000/tickets/' + id, {
    next: {
      revalidate: 60
    }
  });

  if (!res.ok) {
    notFound();
  }

  return res.json();
}

export default async function TicketDetails({ params }: TParams) {
  const ticket: TTicket = await getTicket(params.id);

  return (
    <main>
      <nav>
        <h2>Ticket Details</h2>
      </nav>

      <div className="card">
        <h3>{ticket.title}</h3>
        <small>Created by {ticket.user_email}</small>
        <p>{ticket.body}</p>
        <div className={`pill ${ticket.priority}`}>
          {ticket.priority} priority
        </div>
      </div>
    </main>
  );
}