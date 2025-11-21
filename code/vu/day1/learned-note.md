Write your own notes here for Day 1 learning. You can include key concepts, code snippets, or anything you found important. English is preferred for wider accessibility.
E.g:

-Known how to create react app
-Learned jsx syntax, create class and function component
...

# Create react:  
    npx create-react-app my-react-learning
    cd my-react-learning
    npm start

# Day 1:
# Exercise 1: Dynamic Greeting Component
# DynamicGreeting.js
    - Tao file DynamicGreeting.js trong folder src
    - Tao component tên DynamicGreeting
    - Nhận 2 props: name (tên) và time (giờ)
    - { name, time } = Destructuring (tách props ra)
    - Khai báo biến greeting để lưu lời chào
    - Nếu time < 12 (trước 12h trưa) → Chào buổi sáng
    - Nếu không, nếu time < 18 (trước 6h chiều) → Chào buổi chiều
    - Nếu không (sau 6h chiều) → Chào buổi tối
    - Trả về JSX (HTML)
     + {greeting} = Hiển thị lời chào
     + {name} = Hiển thị tên
     + 👋 = Emoji vẫy tay
    - export default DynamicGreeting; để dùng ở file khác
# app.js
    - Import component DynamicGreeting từ file DynamicGreeting.js
    - ./ = Cùng thư mục
    - Sử dụng component
      name="Vũ" = Truyền tên "Vũ"
      time={new Date().getHours()} = Truyền giờ hiện tại
    -new Date() = Lấy ngày giờ hiện tại
    .getHours() = Lấy giờ (0-23)
    Ví dụ: 9h sáng → 9, 3h chiều → 15

# Exercise 2: Welcome Card Component
    - Tao file WelcomeCard.js
    - Nhận 3 props: username, role, status
    - style={} = Nhúng JavaScript
    - styles.card = Object chứa CSS
    - styles.card = Object chứa CSS
    - Thay đổi màu card (border: "2px solid #007bff" -> border: "2px solid #28a745",  backgroundColor: "#f9f9f9"-> backgroundColor: "#e8f5e9")
    - Thay đổi border style
    - Thêm fields mới (email)
    - Thêm fields mới (location)

## Exercise 3: Multiple User Profiles (Composition)
    - Tạo file UserProfile.js
    -  Kiểm tra user có tồn tại không:
        if (!user) {
        return <h2>No user found</h2>;
        }
    - Nếu user = null hoặc undefined → Hiển thị "No user found"
    - {user.bio && <p>Bio: {user.bio}</p>}
        Nếu user.bio tồn tại → Hiển thị <p>Bio: ...</p>
        Nếu user.bio = null → Không hiển thị gì

## Challenge: Build Your Own

### Create a "Book Card" System

    - Tao file bookCard.js
    - Props function BookCard({ title, author, rating, description })
    - Hàm renderStars() dùng vòng lặp for
    const renderStars = (rating) => {
        let stars = "";              // 1. Tạo chuỗi rỗng
        for (let i = 0; i < rating; i++) {  // 2. Lặp rating lần
            stars += "⭐";             // 3. Thêm sao mỗi lần
        }
    return stars;                // 4. Trả về kết quả
    };