# 🌐 Personal Digital CV & Portfolio Website (Vue 3 + Vite + Tailwind CSS)

Trang web Profile / CV điện tử cá nhân với phong cách thiết kế hiện đại, tinh tế (Glassmorphism, Dark/Light mode, Responsive trên mọi thiết bị và hỗ trợ xuất bản in chuẩn A4/PDF).

---

## 🚀 Hướng dẫn Chạy và Trải nghiệm Giao diện

### 1. Cài đặt các gói phụ thuộc (Dependencies)
Mở Terminal / PowerShell tại thư mục dự án `d:\LapTrinhDaNenTang` và chạy lệnh:
```bash
npm install
```
*(Nếu dùng PowerShell gặp lỗi chính sách bảo mật script, bạn có thể mở Command Prompt (cmd) hoặc dùng: `cmd /c "npm install"`)*

### 2. Khởi chạy máy chủ phát triển (Development Server)
```bash
npm run dev
```
Sau đó mở trình duyệt và truy cập đường dẫn xuất hiện trên màn hình (thường là: `http://localhost:5173`).

### 3. Đóng gói ứng dụng để đưa lên Internet (Build Production)
```bash
npm run build
```
Thư mục `dist/` được tạo ra có thể triển khai miễn phí cực kỳ nhanh chóng lên **Vercel**, **Netlify** hoặc **GitHub Pages**.

---

## ✍️ Hướng dẫn Thay đổi Thông tin Cá nhân thành của Bạn

Toàn bộ dữ liệu hiển thị trên website đã được gom gọn vào **một file duy nhất** tại:
👉 `src/data/profileData.js`

Bạn chỉ cần mở file này và cập nhật lại các trường:
- **Thông tin cơ bản (`personal`)**: Họ tên, chức danh, ảnh đại diện (avatar), email, số điện thoại, khu vực sinh sống, liên kết mạng xã hội (GitHub, LinkedIn, Facebook, Telegram), tóm tắt nghề nghiệp.
- **Thống kê (`stats`)**: Số năm kinh nghiệm, số dự án hoàn thành,...
- **Dịch vụ / Thế mạnh (`services`)**: Các mảng bạn nhận làm (Frontend, Backend, Mobile, UI/UX,...).
- **Kinh nghiệm làm việc (`experiences`)**: Các vị trí từng làm việc, công ty, thời gian, mô tả và kết quả nổi bật.
- **Học vấn & Chứng chỉ (`education`, `certifications`)**: Trường học, bằng cấp, GPA, chứng chỉ quốc tế.
- **Kỹ năng (`skillCategories`)**: Danh sách các kỹ năng kèm mức độ thành thạo (%).
- **Dự án tiêu biểu (`projects`)**: Tên dự án, hình ảnh demo, mô tả, công nghệ sử dụng và đường link trải nghiệm/mã nguồn.

---

## 🎨 Các Tính năng Đặc sắc

- 🌓 **Chế độ Sáng / Tối (Dark & Light Mode)**: Tự động ghi nhớ thiết lập của người dùng hoặc tuân theo chế độ hệ điều hành.
- 📱 **Tương thích hoàn hảo (Fully Responsive)**: Hiển thị đẹp mắt trên cả Điện thoại (iOS/Android), Máy tính bảng và Màn hình máy tính.
- 🖨️ **Bản in CV / Xuất file PDF Chuẩn A4**: Nút **"Xem & In CV"** trên thanh menu cho phép bạn xem trước bản CV tóm tắt chuẩn định dạng A4 và nhấn In hoặc lưu dưới dạng file PDF để gửi cho nhà tuyển dụng bất kỳ lúc nào.
- 📬 **Form liên hệ tương tác**: Hỗ trợ copy nhanh Email/SĐT và mô phỏng gửi tin nhắn phản hồi tức thì.
