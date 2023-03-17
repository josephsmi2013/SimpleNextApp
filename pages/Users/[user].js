
export async function getStaticPaths() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/');
    const data = await response.json();

    const paths = data.map(user => {
        return {
           params: { user: user.id.toString() } //Prop name must match the file name [user].js
        }
    })

    return {
        paths,fallback: false
    }

}


export async function getStaticProps(context) {
    const id = context.params.user; //Grab whatever prop you created above to hold the ID
    const response = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    const data = await response.json();

    return {
        props: {user: data}
    }
}



export default function User({user}) {
  return (
    <div>
        <h1>User Page</h1>
        <p>{user.name}</p>
        <p>{user.email}</p>
        <p>{user.website}</p>
    </div>
  )
}
