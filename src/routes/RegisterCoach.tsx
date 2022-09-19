import React, { useState } from 'react';
import { dbService, authService } from '../fbase';
import { collection, addDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { RootState, useAppDispatch, useAppSelector } from '../store';

function RegisterCoach() {
  const navigate = useNavigate();
  const [introduce, setIntroduce] = useState('');
  const selectedGenres: string[] = [];
  const genres = ['Pilates', 'Weight Training', 'Yoga'];
  const userObj = useAppSelector((state: RootState) => state.userStore.userObj);

  const checkGenre = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { id, checked },
    } = event;
    if (checked) {
      selectedGenres.push(id);
    } else {
      const idx = selectedGenres.findIndex((el) => el === id);
      selectedGenres.splice(idx, 1);
    }
  };

  const handleIntroduce = (event: any) => {
    const {
      target: { value },
    } = event;
    setIntroduce(value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await addDoc(collection(dbService, 'coaches'), {
        introduce: introduce,
        email: authService.currentUser?.email,
        genre: selectedGenres,
        id: userObj.id,
        name: userObj.displayName,
      });
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        name="introduce"
        placeholder="Introduce"
        className="textarea textarea-bordered"
        onInput={handleIntroduce}
      />
      <ul>
        {genres.map((genre, idx) => (
          <li key={idx}>
            <label htmlFor={genre}>{genre}</label>
            <input
              type="checkbox"
              name="genre"
              id={genre}
              onChange={checkGenre}
            />
          </li>
        ))}
      </ul>
      <input type="submit" value="Register" className="btn" />
    </form>
  );
}

export default RegisterCoach;
