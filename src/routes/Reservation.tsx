import { FunctionComponent } from 'react';
import Calendar from '../components/Calendar';
import LessonList from '../components/LessonList';

interface ReservationProps {}

const Reservation: FunctionComponent<ReservationProps> = () => {
  return (
    <section>
      <section className="">
        Reservation
        <div className="w-2/3 m-auto flex-row items-center">
          <Calendar/>
          <LessonList/>
        </div>
      </section>
    </section>
  );
};

export default Reservation;
