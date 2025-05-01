+++
date = '2025-04-30T18:07:30+07:00'
title = 'Đào mộ bút kí: Chuyển đổi yate sang nền tảng Phần tử web 2'
tags = ['chuyện nghề', 'yate']
series = ['yate']
series_weight = 3
+++

Hôm nay nghỉ lễ, tranh thủ làm tiếp. Đi làm một cái là lại bận ngay 😮‍💨. Chưa có gì tiến triển nhiều vì mình gặp phải một vấn đề: Shadow DOM không hỗ trợ phông chữ nên mấy nút bấm chứa biểu tượng của mình biến mất tiêu. Cách chữa là định nghĩa phông bên ngoài phần tử ẩn.

Để tải phông thì có vài cách, phổ biến nhất là dùng luật `@font-face` trong tập tin CSS hoặc thẻ `link` trong HTML. Mình thường chọn cách thứ nhất. Dưới đây là tóm tắt cách làm:

```css
/* fonts.css */
@font-face {
  font-family: "Nunito";
  font-style: normal;
  font-weight: 400;
  src: url(res/fonts/Nunito-400.woff2) format("woff2");
}

@font-face {
  font-family: "Nunito";
  font-style: normal;
  font-weight: 700;
  src: url(res/fonts/Nunito-700.woff2) format("woff2");
}
```

```css
/* my-element.css */
/* Các luật áp dụng cho phần tử `my-element` */
```

```html
<head>
  <!-- phông cho phần tử ẩn -->
  <link rel="stylesheet" href="path/to/fonts.css">
</head>
<body>
  <!-- phần tử tự định nghĩa -->
  <my-element>
    <!-- các thuộc tính CSS khác có thể khai báo bình thường bên trong -->
    <link rel="stylesheet" href="path/to/my-element.css">
  </my-element>
</body>
```

Trong mã nguồn thì mình xử lí riêng đối với Webpack, cụ thể các bạn có thể xem tại cam kết [96a3f51](https://github.com/kien5436/yate/commit/96a3f51d1503e6acecb6b14f4d2a2ab60fb684d5). Cách làm thì đơn giản thôi, còn nguyên nhân tại sao thì mình chưa tìm được.

Thế thôi đã, nay 50 năm giải phóng đất nước cơ mà, chơi nốt mai làm tiếp 😁.
