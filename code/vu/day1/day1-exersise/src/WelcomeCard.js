function WelcomeCard({ username, role, status, email, location }) {
  return (
    <div style={styles.card}>
      <h2 style={styles.title}>{username}</h2>
      <p>
        <strong>Role:</strong> {role}
      </p>
      <p>
        <strong>Status:</strong> {status}
      </p>
      <p>
        <strong>📧 Email:</strong> {email}
      </p>
      <p>
        <strong>📍 Location:</strong> {location}
      </p>
    </div>
  );
}

const styles = {
  card: {
    border: "3px dashed #ff6347",
    borderRadius: "15px",
    borderShadow: "2px 2px 12px rgba(0,0,0,0.1)",
    padding: "20px",
    margin: "10px",
    backgroundColor: "#f9f9f9",
    maxWith: "300px",
  },
  title: {
    color: "#28a745",
    marginBottom: "10px",
  },
};

export default WelcomeCard;
