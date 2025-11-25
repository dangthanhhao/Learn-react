## Day 1.5
## Exercise 1: Your First Hook - useState
- Tất cả các React hooks đều bắt đầu bằng từ "use"
- useState trả về một mảng gồm 2 phần tử:
   + Phần tử đầu tiên là giá trị trạng thái hiện tại (count)
   + Phần tử thứ hai là một hàm để cập nhật giá trị trạng thái (setCount).
  
# Quản lý state với useState:

- Khởi tạo state: const [count, setCount] = useState(10);.
- Cập nhật state bằng setCount.
  
# Sử dụng sự kiện trong React:
Gắn sự kiện onClick cho các nút để thay đổi giá trị state.

# Render lại giao diện:
Khi state thay đổi bằng setCount, React tự động render lại giao diện với giá trị mới.

# Cách hoạt động
- Component được render lần đầu với count = 0.
- Khi người dùng nhấn nút, hàm setCount được gọi để thay đổi giá trị count.
- React tự động render lại giao diện với giá trị count mới.

# useState (Hook)
- Dùng trong function components.
- Không cần this.
- Cập nhật bằng setCount.
- Có thể khai báo nhiều state độc lập.
# this.state (Class)
- Dùng trong class components.
- Phải sử dụng this.state.
- Cập nhật bằng this.setState().
- State là một object duy nhất.