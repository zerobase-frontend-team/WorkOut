import { FunctionComponent, useState } from 'react';
import styled from 'styled-components';

interface CalendarProps {}

const Calendar: FunctionComponent<CalendarProps> = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [date, setDate] = useState(new Date().getDate());
  const [currday, setDay] = useState(new Date(year, month, 0));
  const [lastDay, setLastDay] = useState(new Date(year, month, 0));
  
  const prevClickhandle = () => {    
    let prevMonth = month - 1;
    setMonth(prevMonth === 0 ? 12 : prevMonth);
  }
  
  
  return (
    <section className="Calendar">
      <div className="flex justify-between">
        <div onClick={prevClickhandle}>&lt;</div>
        <div>
          {year}년 {month}월
        </div>
        <div>&gt;</div>
      </div>

      <div className="week grid grid-cols-7">
        <div className="flex justify-center">MON</div>
        <div className="flex justify-center">TUE</div>
        <div className="flex justify-center">WED</div>
        <div className="flex justify-center">THU</div>
        <div className="flex justify-center">FRI</div>
        <div className="flex justify-center">SAT</div>
        <div className="flex justify-center text-red-500">SUN</div>
      </div>
      <div className="dates grid grid-cols-7">
        {getLastDate(lastDay)}
        {getCurrDays(currday)}
      </div>
    </section>
  );
};

export default Calendar;

function getLastDate(lastMonthDate: Date) {  
  let dates = [];
  let lastDay = lastMonthDate.getDay();
  let lastDate = lastMonthDate.getDate();

  for(let i = lastDay - 1 ; i > 0; i--){
    dates[i] = (
      <div key={i} className="flex justify-center text-slate-400">
        {lastDate.toString()}
      </div>
    )
    lastDate--;
  }

  return dates;
}

function getCurrDays(currMonthDate: Date){
  let days = [];
  let currday = currMonthDate.getDate();
  let date = 1;

  for(let i = 0 ; i < currday ; i++){
    days[i] = (
      <div key={i} className='flex justify-center'>
        {date.toString()}
      </div>
    )
    date++;
  }

  return days;
}