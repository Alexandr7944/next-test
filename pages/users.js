import A from "../components/A";
import MainContainer from "../components/MainContainer";
import styles from "../styles/users.module.scss";


const Users = ({users}) => {

  return (
    <MainContainer className={styles.users}>
      <h1>Список пользователей</h1>
      <ul>
        {users.map(user => 
          <li key={user.id}>
            <A text={user.name} href={`/users/${user.id}`} />
          </li>
        )}
      </ul>
    </MainContainer>
  )
}

export default Users

export async function getStaticProps(context) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const users = await response.json();

  return {
    props: {users},
  }
}