function UserProfile({ user}){
    if (!user){
        return <h2> No user found</h2>;
    }

    return(
        <div style={styles.profile}>
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Location: {user.city}</p>
            {user.bio && <p>Bio: {user.bio}</p>}
            <p>Joined: {user.joinDate}</p>
        </div>
    );
}

const styles ={
    profile: {
    border: "2px solid #28a745",
    padding: "20px",
    borderRadius: "10px",
    margin: "15px",
    backgroundColor: "#f0f8f0",
    maxWidth: "500px",
  },
};

export default UserProfile;