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

## Exercise 2: Multiple State Variables (Medium)
# Quản lý nhiều trạng thái độc lập trong một component bằng useState.
# Cách hoạt động:
## useState:
Sử dụng nhiều lần useState để quản lý các trạng thái độc lập:

const [name, setName] = useState('');
const [age, setAge] = useState(0);
const [email, setEmail] = useState('');
const [country, setCountry] = useState('');
const [isLoggedIn, setIsLoggedIn] = useState(false);

## Cập nhật trạng thái:
Mỗi trường nhập liệu sử dụng hàm setter để cập nhật trạng thái theo thời gian thực.

## Hiển thị trạng thái:
Giao diện hiển thị giá trị của các trạng thái hiện tại.

## Mở rộng:

Thêm trường Country với useState.
Thêm nút Save Profile để ghi dữ liệu vào console hoặc gửi đến server.

## Ghi chú
Mỗi trạng thái cần một hàm setter riêng.
Nếu có quá nhiều trạng thái, cân nhắc sử dụng useReducer hoặc gộp thành một đối tượng duy nhất.
Thứ tự gọi useState rất quan trọng, không nên thay đổi giữa các lần render.

# Tóm tắt ngắn gọn:
Chức năng: Form nhập liệu với các trường Name, Age, Email, Country, và trạng thái đăng nhập.
Nút: Reset Form (đặt lại giá trị) và Save Profile (ghi dữ liệu vào console).
Mở rộng: Thêm logic gửi dữ liệu hoặc lưu trữ.
Lưu ý: Quản lý trạng thái độc lập với useState.

# Exercise 3: Understanding Hook Rules
## Các quy tắc quan trọng về hooks:
### 1.Chỉ gọi hooks ở cấp cao nhất của function component:
- Không gọi useState, useEffect, hoặc các hooks khác bên trong:
   + Điều kiện (if/else).
   + Vòng lặp (for, while).
   + Hàm lồng nhau (nested functions).
### 2.Chỉ gọi hooks từ:
- Function components (không được gọi trong các hàm thông thường).
- Custom hooks (các hàm tự định nghĩa bắt đầu bằng use).

# Không được gọi hooks trong điều kiện hoặc vòng lặp vì chúng phải được gọi theo cùng một thứ tự trong mỗi lần render để React có thể quản lý trạng thái một cách chính xác. Việc gọi hooks bên trong vòng lặp, điều kiện hoặc hàm lồng nhau sẽ vi phạm các quy tắc này, dẫn đến hành vi không thể đoán trước.

# React sẽ hiển thị lỗi:
React Hook "useState" is called conditionally. React Hooks must be called in the exact same order in every component render.

# Cách hoạt động nội bộ của hooks:

+ React duy trì một danh sách các hooks trong mỗi component.
+ Mỗi lần gọi useState, React thêm một mục mới vào danh sách và ánh xạ nó với giá trị trạng thái tương ứng.
+ Nếu thứ tự gọi hooks thay đổi, React không thể xác định đúng trạng thái nào thuộc về hook nào.

# Challenge: Build a Simple Todo Item Component

# 1. Chức năng chính :
- Quản lý trạng thái công việc (todos):

   + Dùng useState để lưu danh sách công việc.
   + Mỗi công việc gồm: id, title, priority, dueDate.
- Thêm công việc mới:

   + Form nhập liệu gồm:
      Tiêu đề (title): Input text.
      Mức độ ưu tiên (priority): Dropdown (high, medium, low).
      Ngày hết hạn (dueDate): Input kiểu date.
   + Khi nhấn Add Todo, công việc mới được thêm vào danh sách.
- Xóa công việc:

   + Hàm handleDelete lọc danh sách todos để loại bỏ công việc có id tương ứng.
- Chỉnh sửa công việc:

   + Sử dụng trạng thái isEditing để hiển thị input thay vì tiêu đề.
   + Hàm handleEdit cập nhật tiêu đề của công việc trong danh sách todos.
- Đánh dấu hoàn thành:

   + Dùng trạng thái isComplete để quản lý trạng thái hoàn thành của công việc.
   + Checkbox điều khiển trạng thái này.
# 2. Thành phần chính:
## a. <TodoItem /> (Component con):
- Props nhận vào:
   + id, title, priority, dueDate: Dữ liệu công việc.
   + onDelete, onToggle, onEdit: Hàm xử lý từ component cha.
- Trạng thái cục bộ:
   + isComplete: Quản lý trạng thái hoàn thành.
   + isEditing: Quản lý trạng thái chỉnh sửa.
   + newTitle: Tiêu đề mới khi chỉnh sửa.
b. <TodoList /> (Component cha):
- Trạng thái cục bộ:
   + todos: Danh sách công việc.
   + newTodo: Công việc mới đang nhập (dữ liệu từ form).
- Hành vi:
   + Quản lý thêm, xóa, chỉnh sửa, và đếm số công việc.
# 3. Code
## a. Thêm công việc mới:

const handleAddTodo = () => {
  const newId = todos.length > 0 ? todos[todos.length - 1].id + 1 : 1;
  setTodos([...todos, { id: newId, ...newTodo }]);
  setNewTodo({ title: "", priority: "medium", dueDate: "" });
};

## b. Xóa công việc:
const handleDelete = (id) => {
  setTodos(todos.filter((todo) => todo.id !== id));
};

## c. Chỉnh sửa công việc:
const handleEdit = (id, newTitle) => {
  setTodos(
    todos.map((todo) =>
      todo.id === id ? { ...todo, title: newTitle } : todo
    )
  );
};

## d. Đánh dấu hoàn thành:
const handleToggle = (id) => {
  console.log(`Todo with id ${id} toggled!`);
};

# 4. Lưu ý
- State quản lý từ component cha (TodoList):
   + Danh sách công việc (todos) được quản lý tại cha và truyền xuống con qua props.
- Component tái sử dụng:
   + <TodoItem /> được thiết kế để tái sử dụng cho bất kỳ danh sách công việc nào.
- Form thêm công việc:
   + Dữ liệu từ form được lưu trong trạng thái newTodo.
- ID tự động tăng:
   + id được tạo dựa trên công việc cuối cùng trong danh sách.