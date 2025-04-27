+++
date = '2025-04-22T11:55:13+07:00'
title = 'Đào mộ bút kí: Tự xây dựng tiện ích cho trình duyệt'
tags = ['chuyện nghề', 'yate']
series = ['yate']
series_weight = 1
+++

Như đã nói ở bài viết [đầu tiên](../../random-stuff/hello-world), mình sẽ bắt đầu lục lại những dự án cũ để phát triển tiếp, và dự án được lên thớt trước là [`yate`](https://kien5436.github.io/yate/) - tiện ích dịch trên trình duyệt. Mình dùng nó thường xuyên mà 3 năm rồi không cập nhật gì cả, phần vì ít người dùng, phần nữa cũng do bên Edge phê duyệt lằng nhằng quá, hay bị từ chối nên mình ngại làm chứ không phải tại mình lười đâu. Sẵn tuần này đang thất nghiệp nên quyết lôi ra sửa.

Nói sơ qua lí do thì tiện ích dịch không thiếu, trước khi làm ra `yate` mình đã dùng một cái khá ưng cả về giao diện lẫn chức năng, lại có mặt trên đủ các trình duyệt. Nhu cầu của mình không nhiều, trộm vía tiếng Anh cũng đủ dùng nên chỉ cần dịch nhanh một vài từ thôi. Mà ghét cái là thỉnh thoảng nó hiện quảng cáo mua gói pro. Đối với mình thì tính năng pro cũng không hấp dẫn lắm: thêm chế độ tối và đồng bộ lịch sử dịch. Mình thích màu đen nên ứng dụng nào hỗ trợ nền tối mình đều bật hết, nhưng phải trả tiền để được bôi đen thì hơi bực nên mình quyết định tự làm luôn một cái. Tiện ích dịch thì phần quan trọng nhất là phải có API dịch rồi, vấn đề là dùng của bên nào. Tiêu chí của mình là làm miễn phí nên sau khi tham khảo một vài nguồn, mình chọn cách hơi tội lỗi là "mượn" API của Google. Có API rồi, giờ làm giao diện nữa thôi. Khoảng thời gian ấy mình đang viết `React` nên không ngần ngại chọn luôn nó. Có điều chỉ là tiện ích cùi cùi mà dùng `React` thì nặng quá, mình đổi sang một thằng anh em của nó là `Preact`, nguyên lí hoạt động tương tự nhưng nhẹ hơn rất nhiều. Nếu bạn nào thích `React` thì mình rất khuyến nghị dùng thử nhé. Sau khoảng một tháng mò mẫm thì tiện ích của mình được lên kệ. Tính năng cũng không thua kém hàng nhà người ta mấy: dịch, phát âm, tìm từ đồng nghĩa, vv. Ban đầu mình cũng chăm sửa lỗi nhưng rồi lượng người dùng ít, mình lại bận đi làm nên bỏ ngỏ. Được cái là dù sau 3 năm nhưng khi mở mã nguồn ra mình không phải thốt lên "thằng nào viết ra cái đống 💩 này?".

Cập nhật là một phần tất yếu của phát triển phần mềm. Một phần mềm quá lâu không có gì mới sẽ dễ bị lãng quên hoặc thay thế. Hiện giờ không thấy ai ngoài mình dùng `yate` nữa. Vậy sao mình còn chọn quay lại bảo trì nó? Vì dạo này mình hơi rảnh, lỗi thì vẫn còn, và mỗi lần gặp lỗi mình cũng thấy khó chịu. Mình không muốn mất công tìm kiếm tiện ích khác. Tóm lại là đã muốn thì cần gì lí do, cứ làm thôi!

Viết tới đây thì buồn ngủ quá, máy cũng sắp hết pin. Mình bắt đầu viết từ 2 giờ chiều và giờ là gần 11 giờ đêm, có một đoạn ngắn thôi mà vừa viết vừa sửa cũng tốn thời gian phết. Dốt văn cũng khổ 😂. Mai mình sẽ duyệt lại lần nữa rồi mới đăng được. Quá trình cập nhật mã nguồn để kì tới vậy, hẹn gặp lại các bạn.
