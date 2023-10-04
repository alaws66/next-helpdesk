import { Suspense } from 'react';
import { Metadata } from 'next';

import Loading from '../../loading';
import TicketList from './TicketList';

export const metadata: Metadata = {
  title: 'Helpdesk | Tickets',
}

export default function Tickets() {
  return (
    <main>
      <nav>
        <div>
          <h2>Tickets</h2>
          <p><small>Currently open tickets</small></p>
        </div>
      </nav>

      <Suspense fallback={<Loading />}>
        <TicketList />
      </Suspense>
    </main>
  );
}