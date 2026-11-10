# Bida 8 Bi

Trò chơi bida 8 bi 3D (Three.js) chạy trên trình duyệt, ưu tiên điện thoại, cho 2 người chơi.

## Hai chế độ

- **Online (khi mở qua link claude.ai):** mỗi người chơi trên máy của mình. Người mở trước ngồi ghế 1, người thứ hai ngồi ghế 2, ai mở sau nữa chỉ được xem. Chỉ người tới lượt mới ngắm, kéo lực và đánh được. Người còn lại xem bi chạy trực tiếp. Xếp lại bàn hoặc chơi ván mới cần **cả hai đồng ý**. Trạng thái bàn được lưu bằng capability `db` của artifact (`tables/main`).
- **Chung một máy (mở `index.html` trực tiếp):** hai người thay phiên trên cùng một máy.

## Điều khiển

- **Ngắm:** chạm hoặc kéo trên bàn. Kéo thanh xoay (bên phải khi xoay ngang, góc dưới bên phải khi cầm dọc) để ngắm tinh.
- **Lực:** kéo thanh lực (bên trái khi xoay ngang, góc dưới bên trái khi cầm dọc), kéo tới đâu lực tới đó, thả tay là đánh. Kéo ngược về 0 rồi thả để huỷ.
- **Điểm chạm cơ:** chạm viên bi trắng nhỏ (cạnh avatar người 2 khi xoay ngang, giữa hàng dưới khi cầm dọc) rồi kéo chấm đỏ: trên = bi trắng chạy theo, dưới = giật lùi, trái/phải = xoáy ngang khi bật băng. Chạm ra ngoài để đóng, chạm đúp để về giữa. Mỗi lượt mặc định ở chính giữa.
- **⟲:** xin xếp lại bàn. Đối thủ sẽ được hỏi đồng ý hay không.
- **Chuột/phím:** rê để ngắm, nhấn giữ trên bàn và kéo ra xa để lấy lực. `←`/`→` ngắm tinh, `↑`/`↓` chỉnh lực, `Space` đánh.

## Luật (rút gọn)

- Sau cú phá bàn vẫn mở. Người đầu tiên đưa bi vào lỗ hợp lệ sẽ nhận nhóm đó: **bi trơn (1–7)** hoặc **bi sọc (9–15)**.
- Đưa được bi của mình vào lỗ thì đánh tiếp; không thì đổi lượt.
- **Lỗi** (đối thủ được đặt bi cái ở bất kỳ đâu, kéo đổi chỗ bao nhiêu lần cũng được cho tới khi đánh): bi cái rơi xuống lỗ, bi cái không chạm bi nào, hoặc chạm bi của nhóm khác trước.
- Sạch nhóm rồi đưa bi 8 vào lỗ đúng luật → **thắng**. Đưa bi 8 vào lỗ sớm hoặc kèm lỗi → **thua**.
- Bi 8 rơi khi phá bàn được đặt lại vào điểm chân bàn. Hai người luân phiên phá bàn qua mỗi ván.
