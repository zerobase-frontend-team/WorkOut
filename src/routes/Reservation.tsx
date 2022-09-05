import { FunctionComponent } from 'react';
import Calendar from '../components/Calendar';

interface ReservationProps {}

const Reservation: FunctionComponent<ReservationProps> = () => {
  return (
    <section>
      <section className="">
        Reservation
        <section className="Calendar flex items-center bg-green-500 md:bg-red-500 lg:bg-green-500">
          <div>
            <div className="flex">
              <div>&lt;</div>
              <div>{}</div>
              <div>&gt;</div>
            </div>
          </div>
          <div className="week"></div>
          <div className="dates"></div>
        </section>
      </section>
    </section>
  );
};

export default Reservation;
