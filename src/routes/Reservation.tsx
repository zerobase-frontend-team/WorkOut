import { FunctionComponent } from 'react';
import Calendar from '../components/Calendar';

interface ReservationProps {}

const Reservation: FunctionComponent<ReservationProps> = () => {
  return (
    <section>
      <section className="">
        Reservation
        <div className="Calendar flex items-center">
          <Calendar/>
        </div>
      </section>
    </section>
  );
};

export default Reservation;
