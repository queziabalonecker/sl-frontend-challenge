import './index.css';
import useRequest from '../../hooks/useRequest';
import { useEffect, useState } from 'react';
import UserCard from '../../components/UserCard';

type User = {
  id: string;
  name: string;
  email: string;
  phone: string;
  password: string;
  avatar: string;
};

function Home() {
  const { useGetUsers } = useRequest();
  const [users, setUsers] = useState(Array<User>)

  //fetching data with react-query
  const isFetched = useGetUsers().isFetched;
  const { data } = useGetUsers();
  useEffect(() => {
    if (isFetched) {
      setUsers(data);
    }
//eslint-disable-next-line
  }, [isFetched])

  return (
    <div className='container-home'>
      {isFetched && users.map((user) => {
        return (
          <UserCard user={user}/>
        );
      }) }
    </div>
  );
}

export default Home;
