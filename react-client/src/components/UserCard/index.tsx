type Props = {
  user: {
    id: string;
    name: string;
    email: string;
    phone: string;
    password: string;
    avatar: string;
  };
};

function UserCard(props: Props) {
  return (
    <div className='user-card'>
      <li>{props.user.name}</li>
    </div>
  );
}

export default UserCard;
