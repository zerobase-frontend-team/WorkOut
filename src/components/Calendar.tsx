import { FunctionComponent, useState } from 'react';
import styled from 'styled-components';

interface CalendarProps {}

const Calendar: FunctionComponent<CalendarProps> = () => {
  const [fullDay, setFullDay] = useState(new Date().toString());
  return (
    <section className="Calendar w-3 m-10">
      <div>
        <div className="flex">
          <div>&lt;</div>
          <div>{fullDay}</div>
          <div>&gt;</div>
        </div>
      </div>
      <div className="week"></div>
      <div className="dates"></div>
    </section>
  );
};

export default Calendar;

const CalendarHeader = styled.div`
    /* .container{
        display: flex;
    } */
`;
