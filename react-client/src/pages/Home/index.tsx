import './index.css';
import { useGetUsers } from '../../hooks/useRequest';

function Home() {
  const { data } = useGetUsers();
  console.log(data);
  return (
    <div className='container-home'>
      <h1>Esta é a home</h1>
    </div>
  );
}

export default Home;
