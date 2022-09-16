import React, { useState } from 'react';
import { dbService, authService } from '../fbase';
import { collection, addDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

function RegisterCoach() {
  const navigate = useNavigate();
  const [nameInput, setNameInput] = useState('');
  const selectedGenres: string[] = [];
  const genres = ['Pilates', 'Weight Training'];

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNameInput(event.target.value);
  };

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

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await addDoc(collection(dbService, 'coaches'), {
        name: nameInput,
        email: authService.currentUser?.email,
        genre: selectedGenres,
      });
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        required
        value={nameInput}
        onChange={handleChange}
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
