import { useRouter } from "next/router";
import MainContainer from "../../components/MainContainer";

const User = ({ user }) => {
  const { query } = useRouter();

  return (
    <MainContainer>
      Пользователь c id: { query.id }
      <h5>Имя пользователя: {user.name}</h5>
    </MainContainer>
  )
}

export default User

export async function getServerSideProps({params}) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
  const user = await response.json();

  return {
    props: {user},
  }
}