import { Suspense, useEffect, useState } from 'react';
import { UserContent } from './UserContent';
import { UserStore } from './stores/UserStore';
import { useParams } from 'react-router-dom';

export const User = () => {
  const [store] = useState(() => new UserStore());
  const { id } = useParams<{ id: string }>();
  const { getUserData } = store;

  useEffect(() => {
    if (id) {
      getUserData(id);
    }
  }, [id, getUserData]);

  return (
    <Suspense>
      <UserContent store={store} />
    </Suspense>
  );
};
