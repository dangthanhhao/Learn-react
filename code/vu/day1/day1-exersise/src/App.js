import './App.css';
import DynamicGreeting from './DynamicGreeting';
import WelcomeCard from "./WelcomeCard";
import UserProfile from "./UserProfile";
import BookCard from "./BookCard";  // ← THÊM DÒNG NÀY

function App() {
  const users = [
    {
      name: "Barry Smith",
      email: "barry@example.com",
      city: "San Francisco",
      bio: "Full-stack developer",
      joinDate: "Nov 2024",
    },
    {
      name: "Alice Johnson",
      email: "alice@example.com",
      city: "New York",
      bio: "Frontend specialist",
      joinDate: "Oct 2024",
    },
    {
      name: "Bob Wilson",
      email: "bob@example.com",
      city: "Austin",
      bio: null,
      joinDate: "Dec 2024",
    },
  ];

  // ========== THÊM DỮ LIỆU SÁCH ========== 
  const books = [
    {
      title: "abc123",
      author: "vu",
      rating: 5,
      description: "I am a .net web programmer with more than 4 years of experience",
    },
    {
      title: "xyz456",
      author: "hao",
      rating: 5,
      description: "I am a .net web programmer with more than 4 years of experience",
    },
    {
      title: "You Don't Know JS",
      author: "Kyle Simpson",
      rating: 4,
      description: "I am a .net web programmer with more than 4 years of experience",
    },
    {
      title: "Eloquent JavaScript",
      author: "Marijn Haverbeke",
      rating: 4,
      description: "I am a .net web programmer with more than 4 years of experience",
    },
    {
      title: "JavaScript The Good Parts",
      author: "Douglas Crockford",
      rating: 3,
      description: "I am a .net web programmer with more than 4 years of experience",
    },
  ];

  return (
    <div style={{ padding: "20px", backgroundColor: "#f0f2f5", minHeight: "100vh" }}>
      {/* ========== EXERCISE 1 ========== */}
      <section style={styles.section}>
        <h1 style={{ color: "#007bff" }}>📝 Exercise 1: Dynamic Greeting</h1>
        <DynamicGreeting name="Vũ" time={new Date().getHours()} />
      </section>

      <hr style={styles.divider} />
      
      {/* ========== EXERCISE 2 ========== */}
      <section style={styles.section}>
        <h1 style={{ color: "#28a745" }}>👥 Exercise 2: Team Members</h1>
        <WelcomeCard 
          username="Barry" 
          role="Developer" 
          status="Learning React" 
          email="abc@gmail.com" 
          location="New York" 
        />
        <WelcomeCard 
          username="Sarah" 
          role="Designer" 
          status="Building UIs" 
          email="xyz@gmail.com" 
          location="Canada"
        />
        <WelcomeCard 
          username="John" 
          role="PM" 
          status="Planning features" 
          email="aaaaa111@gmail.com" 
          location="Italy"
        />
      </section>

      <hr style={styles.divider} />

      {/* ========== EXERCISE 3 ========== */}
      <section style={styles.section}>
        <h1 style={{ color: "#dc3545" }}>📋 Exercise 3: User Directory</h1>
        {users.map((user, index) => (
          <UserProfile key={index} user={user} />
        ))}
      </section>

      <hr style={styles.divider} />

      {/* ========== CHALLENGE: BOOK CARD SYSTEM ========== */}
      <section style={styles.section}>
        <div style={styles.challengeHeader}>
          <h1 style={{ color: "#6c5ce7", marginBottom: "10px" }}>
            📚 Challenge: Book Card System
          </h1>
          <p style={{ color: "#666", fontSize: "16px", marginBottom: "20px" }}>
            Displaying {books.length} programming books with ratings
          </p>
        </div>

        {/* Render tất cả sách */}
        <div style={styles.bookContainer}>
          {books.map((book, index) => (
            <BookCard
              key={index}
              title={book.title}
              author={book.author}
              rating={book.rating}
              description={book.description}
            />
          ))}
        </div>

       
      </section>
    </div>
  );
}

// Styles cho App
const styles = {
  section: {
    marginBottom: "40px",
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
  },
  divider: {
    margin: "40px 0",
    border: "none",
    borderTop: "3px solid #ddd",
  },
  challengeHeader: {
    textAlign: "center",
    marginBottom: "30px",
    padding: "20px",
    backgroundColor: "#f8f9fa",
    borderRadius: "10px",
    border: "2px dashed #6c5ce7",
  },
  bookContainer: {
    flexDirection: "column",
    alignItems: "center",
  },
  bookStats: {
    marginTop: "30px",
    padding: "20px",
    backgroundColor: "#e8f5e9",
    borderRadius: "10px",
    border: "2px solid #4caf50",
  },
};

export default App;