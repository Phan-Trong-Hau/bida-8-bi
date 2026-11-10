# Bida 8 Bi

Trò chơi bida 8 bi 3D (Three.js) chạy trên trình duyệt, ưu tiên điện thoại, cho 2 người chơi.

## Chơi ngay

**https://phan-trong-hau.github.io/bida-8-bi/**: bấm **Tạo phòng mới** để nhận mã phòng 4 số, gửi mã (hoặc link) cho bạn. Bạn kia mở trang, nhập mã vào ô **Mã phòng** rồi bấm **Vào phòng**.

## Các chế độ

- **Qua link GitHub Pages:** hai máy trao đổi qua máy chủ MQTT công cộng `broker.emqx.io` (WebSocket bảo mật), không cần tài khoản và không bị chặn bởi kiểu mạng. Người mở trang trước tạo phòng (ghế 1), mã phòng gồm 4 chữ số, link có dạng `.../#r-<mã>`; ai mở link đó vào ghế 2. Trạng thái ván được giữ trên máy chủ nên tải lại trang vẫn chơi tiếp. Chỉ người tới lượt mới đánh được, xếp lại bàn cần cả hai đồng ý. Mỗi tab trình duyệt là một người chơi.

- **Online (khi mở qua link claude.ai):** mỗi người chơi trên máy của mình. Người mở trước ngồi ghế 1, người thứ hai ngồi ghế 2, ai mở sau nữa chỉ được xem. Chỉ người tới lượt mới ngắm, kéo lực và đánh được. Người còn lại xem bi chạy trực tiếp. Xếp lại bàn hoặc chơi ván mới cần **cả hai đồng ý**. Trạng thái bàn được lưu bằng capability `db` của artifact (`tables/main`).
- **Chung một máy (mở `index.html` trực tiếp):** hai người thay phiên trên cùng một máy.

## Sảnh

Khi mở game sẽ có trang sảnh để nhập **tên**, chọn **avatar** (tải ảnh của bạn lên, hoặc chọn 1 trong 12 con vật hay 15 viên bi), **màu bàn** (navy, xanh lục bảo, đỏ rượu vang, xám than; do người tạo phòng chọn) và **gậy** (gỗ phong, đen carbon, đỏ ruby, vàng đồng, xanh sapphire, trắng ngà; có khung xem trước 3D). Tên và avatar được gửi sang máy bên kia. Trong ván bấm ⚙ để đổi lại. Lựa chọn được nhớ trên máy cho lần sau.

## Thêm

- **Cài như app (PWA):** trên Android/Chrome bấm “Cài lên màn hình chính” trong sảnh; trên iPhone mở bằng Safari → Chia sẻ → “Thêm vào MH chính”. App mở toàn màn hình, nằm ngang, luôn lấy bản mới nhất (có bản dự phòng khi mất mạng, chơi với máy được cả khi offline).
- **Thả biểu cảm:** nút 😀 ở cột phải, chọn 😂 👏 😱 😤 🔥 👍 😭 😎. Biểu cảm bay lên trên màn hình cả hai người.
- **Chơi với máy:** trong sảnh chọn 🤖 Dễ / Vừa / Khó. Máy tự tìm cú đánh (bóng ma, góc cắt, đường đi thoáng), tự đặt bi trắng khi được đặt, và thỉnh thoảng thả biểu cảm trêu.
- **Âm thanh không khí:** tiếng khán giả reo khi bạn thắng, tiếng “ding” khi tới lượt bạn.
- **Đường ngắm dài:** đường bi trắng bật băng tối đa 2 lần, đường đi của bi bị đánh và của bi trắng sau va chạm kéo tới băng. Có thể chuyển về đường ngắm ngắn trong sảnh.

## Thời gian & lịch sử

- **Thời gian mỗi lượt** (người tạo phòng chọn): không giới hạn, 15 giây, 30 giây, 1, 2, 3 hoặc 5 phút. Đồng hồ đếm ngược hiện dưới avatar người tới lượt, chỉ chạy khi đủ hai người. Hết giờ thì mất lượt, đối thủ được đặt bi trắng.
- **Lịch sử đấu** (lưu trên máy): tổng thắng/thua, thành tích với từng đối thủ và 15 ván gần nhất, xem trong sảnh hoặc bấm ⚙.

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

## Âm thanh

Tiếng bi va bi, cơ đánh, chạm băng và rơi lỗ là ghi âm thật từ bộ **Pool And Billiards SFX** của SURAJ KISPOTTA (giấy phép CC0, xem `sounds/LICENSE-sounds.txt`). Các file trong `sounds/` đã được chuyển sang mono 16-bit và cắt khoảng lặng, rồi nhúng sẵn vào `index.html` dưới dạng base64 nên game không cần tải file ngoài.
