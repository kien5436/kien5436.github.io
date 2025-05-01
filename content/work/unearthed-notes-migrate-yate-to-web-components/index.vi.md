+++
date = '2025-04-27T20:35:34+07:00'
title = 'Đào mộ bút kí: Chuyển đổi yate sang nền tảng Phần tử web'
tags = ['chuyện nghề', 'yate']
series = ['yate']
series_weight = 2
+++

Gần một tuần đã trôi qua và mình cũng chuyển đổi được phần lớn mã nguồn sang nền tảng mới. Hi vọng sang tuần sau có thể hoàn thành. Trong [bài viết trước](../unearthed-notes-building-my-own-browser-extension/), các bạn đã biết mình sử dụng `Preact` để làm giao diện. Đáng lẽ để tiết kiệm thời gian, mình nên sửa lỗi thay vì xây dựng lại như thế này, nhưng có hai nguyên nhân khiến mình muốn đổi nền tảng. 

Thứ nhất, để làm tính năng dịch trên trang web, mình cần nhúng mã của mình vào trang. Một số trang web bị xung đột CSS với tiện ích của mình nên hiển thị không được tốt. Để khắc phục, mình sử dụng kĩ thuật [Shadow DOM](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_shadow_DOM) nhằm đảm bảo tách biệt hẳn phần tử của mình với các phần tử của trang web gốc. `Preact` không hỗ trợ kĩ thuật này. 

Thứ hai, các thư viện sinh phần tử như `Preact`, `React`, vv đều sử dụng `innerHTML` ở đâu đó trong mã nguồn. Dù mình không sử dụng đến nhưng khi đóng gói tiện ích sẽ bị cảnh báo phương pháp này không an toàn. Đây cũng là một trong số các lí do có thể khiến tiện ích bị từ chối phê duyệt, mình thường phải thêm một đoạn giải thích để họ thông qua cho.

Vậy nên mình chuyển sang `Web components` để giải quyết các vấn đề trên. Đổi lại mình không thể dùng được `jsx` nữa. Nhiều người không thích `React` vì cho rằng viết `jsx` phá hỏng các ngữ nghĩa của web và khiến mã nguồn lộn xộn vì trộn giữa JS và HTML. Theo mình thì điều này chỉ đúng đối với các tay mơ học lập trình. Thay vì học từ gốc thì họ nhảy thẳng vào các thư viện và bộ khung nên không hiểu bản chất, dẫn tới mã nguồn tệ. Dù sao cái gì cũng có tính hai mặt, được cái này mất cái kia là chuyện thường. So với lợi ích đạt được thì hi sinh một chút trải nghiệm lập trình cũng đáng.

`Phần tử web` là công nghệ được hỗ trợ sẵn bởi trình duyệt cho phép bạn đóng gói các thành phần trong một trang web theo hướng phần tử, tương tự như cách các thư viện đang làm. Ưu điểm là mình có thể tương tác trực tiếp với DOM mà không cần tới các cơ chế quản lý trạng thái phức tạp. Nhờ thế logic xử lí của mình giảm đi nhiều mà mã nguồn cũng không thay đổi mấy. Việc của mình chỉ là bê các phần tử từ `Preact` sang, tiện thể cải tiến luôn những gì còn thiếu sót trong phiên bản trước.

Chẳng hạn, phần tử `chọn ngôn ngữ` trước đây chỉ dùng chuột để chọn được, giờ có thể chọn bằng bàn phím. Phần xử lí không quá phức tạp nhưng tại thời điểm làm ra `yate`, mình cũng chưa vững lắm về quản lí trạng thái trong `React` nên loay hoay mãi không xong. Kế đến là phần nhập chữ, nếu gõ nhanh quá thì có thể mất chữ, dẫn tới dịch thiếu. Nguyên do là mình sử dụng kĩ thuật [debounce (chống nảy)](https://css-tricks.com/debouncing-throttling-explained-examples/) để giảm bớt số lượng sự kiện phải xử lí. Sau khi bỏ đi mớ trạng thái của `Preact`, mình chỉ cần tập trung vào sự kiện chính là lấy các từ mới đem đi dịch, nhờ thế hiệu suất tăng lên rõ rệt 😁.

Một lưu ý nhỏ cho bạn nào mới làm quen với `phần tử web`: nếu cần xử lí sự kiện riêng (CustomEvent) của phần tử, đừng đặt tên sự kiện trùng với các sự kiện có sẵn của trình duyệt và đảm bảo nó chỉ xảy ra trong phần tử đó (đặt thuộc tính `bubbles = false`). Nếu không bạn sẽ gặp phải tình huống không biết phần tử nào phát đi sự kiện hay sự kiện bị gọi nhiều lần như mình đã dính phải [d3c62ee](https://github.com/kien5436/yate/commit/d3c62ee49891fe87702f23430bc16daeaf0972d7).

Tạm thời tuần này kết thúc với việc hoàn thành chức năng dịch bằng cửa sổ thu nhỏ, tuần tới mình sẽ làm nốt dịch trên trang. Hẹn gặp lại!
