import { FunctionComponent, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { authService } from '../fbase';
import { RootState, useAppDispatch } from '../store';
import { userActions } from '../store/User';

const Header: FunctionComponent = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const userObj = useSelector((state: RootState) => state.userStore.userObj);

  const dispatch = useAppDispatch();

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        const userData = {
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
        };
        dispatch(userActions.setUserObj(userData));
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });
  }, []);

  const handleLogout = () => {
    authService.signOut();
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          daisyUI
        </Link>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered"
          />
        </div>
        {isLoggedIn ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://placeimg.com/80/80/people" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">{userObj.displayName} Profile</a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a onClick={handleLogout}>Logout</a>
              </li>
            </ul>
          </div>
        ) : (
          <Link to="/auth" className="btn">
            JOIN
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
