import Link from "next/link";
import styles from "../../styles/Users.module.css"

export const getStaticProps = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();

    return {
        props: {users: data}
    }
}



const Users = ({users}) => {
  return (
    <div>
        <h1>Users Page</h1>
        {users.map(user => (
            <Link href={'/Users/' + user.id} key={user.id}>
                <p className={styles.single}>{user.name}</p>
            </Link>
        ))}    
    </div>
  );
}

export default Users;
