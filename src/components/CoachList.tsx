import { useEffect, useState } from 'react';
import { RootState, useAppDispatch, useAppSelector } from '../store';
import { fetchCoaches } from '../store/Coaches';

const CoachList = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useAppDispatch();
  const coachesList = useAppSelector(
    (state: RootState) => state.coachesStore.coaches,
  );

  useEffect(() => {
    dispatch(fetchCoaches());
    setLoading(false);
  }, []);

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {Object.values(coachesList).map((coach: any, idx) => (
            <div className="card shadow-xl w-96" key={idx}>
              <div className="card-body">
                <div className="card-title">{coach.name}</div>
                <div>{coach.introduce}</div>
                <ul>
                  {coach.genre.map((g: string, idx: number) => (
                    <li key={idx} className="badge">
                      {g}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default CoachList;
