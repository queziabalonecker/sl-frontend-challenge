import './index.css';
import useRequest from '../../hooks/useRequest';
import { useEffect, useState } from 'react';

type User = {
  id: string;
  name: string;
  email: String;
  phone: String;
  password: String;
  avatar: String;
};

function Home() {
  const {useGetUsers} = useRequest();
  const [users, setUsers] = useState(Array<User>)

  const isFetched = useGetUsers().isFetched;
  const {data} = useGetUsers();
  
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
          <li>{user.name}</li>
        );
      }) }
    </div>
  );
}

export default Home;
