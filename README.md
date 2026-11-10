# Bida 8 Bi

Trò chơi bida 8 bi (pool) chạy trên trình duyệt, cho **2 người chơi chung một máy**: người này đánh xong thì tới lượt người kia.

## Chạy

Mở thẳng `index.html` bằng trình duyệt, hoặc:

```bash
python3 -m http.server 8000
# rồi mở http://localhost:8000
```

## Cách chơi

Giao diện ưu tiên điện thoại: khi cầm máy dọc, bàn được xoay đứng cho to (đầu bàn phá bi ở phía dưới).

- **Ngắm:** chạm hoặc kéo trên bàn. Dùng nút ↺ / ↻ để ngắm tinh (giữ để xoay liên tục).
- **Lực:** kéo thanh lực xuống (bên phải bàn khi cầm dọc, bên trái khi xoay ngang), kéo tới đâu lực tới đó, thả tay là đánh. Kéo ngược về 0 rồi thả để huỷ. Mỗi lượt lực bắt đầu lại từ 0.
- **Chuột:** rê để ngắm; nhấn giữ trên bàn và kéo ra xa để lấy lực, thả để đánh. Phím `←`/`→` ngắm tinh, `↑`/`↓` chỉnh lực, `Space` đánh.

## Luật (rút gọn)

- Sau cú phá bàn vẫn mở. Người đầu tiên đưa bi vào lỗ hợp lệ sẽ nhận nhóm đó: **bi trơn (1–7)** hoặc **bi sọc (9–15)**.
- Đưa được bi của mình vào lỗ thì đánh tiếp; không thì đổi lượt.
- **Lỗi** (đối thủ được đặt bi cái ở bất kỳ đâu):
  - bi cái rơi xuống lỗ,
  - bi cái không chạm bi nào,
  - chạm bi của nhóm khác trước (hoặc chưa chạm bi 8 trước khi đã sạch nhóm).
- Sạch nhóm rồi đưa bi 8 vào lỗ đúng luật → **thắng**. Đưa bi 8 vào lỗ sớm hoặc kèm lỗi → **thua**.
- Bi 8 rơi khi phá bàn được đặt lại vào điểm chân bàn.
- Hai người luân phiên phá bàn qua mỗi ván; tỉ số được cộng dồn.

Toàn bộ game nằm trong một file `index.html` (HTML + CSS + JavaScript canvas, không cần thư viện).
