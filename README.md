# Bida 8 Bi

Trò chơi bida 8 bi (pool) chạy trên trình duyệt, cho **2 người chơi chung một máy**: người này đánh xong thì tới lượt người kia.

## Chạy

Mở thẳng `index.html` bằng trình duyệt, hoặc:

```bash
python3 -m http.server 8000
# rồi mở http://localhost:8000
```

## Cách chơi

- **Máy tính:** rê chuột để ngắm, bấm chuột hoặc `Space` để đánh. `←`/`→` chỉnh góc (giữ `Shift` để chỉnh nhỏ), `↑`/`↓` chỉnh lực.
- **Điện thoại:** chạm/kéo trên bàn để ngắm, kéo thanh *Lực*, bấm **Đánh**.
- Bấm vào tên người chơi để đổi tên.

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
