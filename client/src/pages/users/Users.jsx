import { useSelector, useDispatch } from "react-redux";
import { allUsers, userActions } from "./../../store/UserSlice";
import { useEffect } from 'react';

function Users() {
  const dispatch = useDispatch()

  useEffect(() => {
      dispatch(userActions.setUsers([{
        user_id: 1,
        name: 'Rahul'
      },
      {
        user_id: 2,
        name: 'Sobin'
      }]))
  }, [dispatch]);

  const userState = useSelector(allUsers)
  
  let renderUsers = <p>Sorry! No users</p>;
  if (userState && userState.users && userState.users.length) {
    renderUsers = userState.users.map((user) => (
      <li key={user.user_id}>
        {user.name}
      </li>
    ));
  }

  return (
    <>
      <h1>Users</h1>
      {renderUsers}
    </>
  )
}

export default Users
