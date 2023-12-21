import { Route, Routes } from 'react-router-dom';
import { UserList } from './UserList';
import { User } from './User';

export const Users = () => (
  <Routes>
    <Route path="*" element={<UserList />} />
    <Route path="user/:id" element={<User />} />
  </Routes>
);
