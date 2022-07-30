import { User } from '../../types/User';

function UserCard({ user }: { user: User }) {
  return (
    <div className='user-card'>
      <li>{user.name}</li>
    </div>
  );
}

export default UserCard;
