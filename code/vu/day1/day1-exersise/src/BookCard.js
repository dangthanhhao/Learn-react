function BookCard({title, author, rating, description}){

    const renderStars = (rating) =>{
        let starts = '';
        for (let i = 0; i < rating; i++){
            starts += '⭐';
        }
        return starts;
    };
     return (
    <div style={styles.card}>
      {/* Tiêu đề sách */}
      <h2 style={styles.title}>{title}</h2>
      
      {/* Tác giả */}
      <p style={styles.author}>
        <strong>By:</strong> {author}
      </p>
      
      {/* Rating với ngôi sao */}
      <p style={styles.rating}>
        <strong>Rating:</strong> {renderStars(rating)}
      </p>
      
      {/* Mô tả ngắn */}
      <p style={styles.description}>{description}</p>
    </div>
  );

}

// CSS Styles
const styles = {
  card: {
    border: "2px solid #4a90e2",
    borderRadius: "12px",
    padding: "20px",
    margin: "15px 0",
    backgroundColor: "#f8f9fa",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    maxWidth: "500px",
    cursor: "pointer",
  },
  title: {
    color: "#2c3e50",
    fontSize: "24px",
    marginBottom: "10px",
    fontWeight: "bold",
  },
  author: {
    color: "#555",
    fontSize: "16px",
    marginBottom: "8px",
  },
  rating: {
    fontSize: "18px",
    marginBottom: "10px",
    color: "#f39c12",
  },
  description: {
    color: "#666",
    fontSize: "14px",
    lineHeight: "1.6",
    fontStyle: "italic",
  },
};

export default BookCard;