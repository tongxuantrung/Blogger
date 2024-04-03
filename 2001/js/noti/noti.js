    <script>
  document.addEventListener('DOMContentLoaded', function() {
    // Lấy ngày hiện tại
    var today = new Date();
    // Lấy giá trị ngày trong tuần (0 = Chủ nhật, 1 = Thứ 2, ..., 6 = Thứ 7)
    var dayOfWeek = today.getDay();

    // Mảng các màu cho từng ngày trong tuần
    var colors = ["#ffebee", "#e0f2f1", "#e2f1fc", "#fff8e1", "#eceff1", "#fbe9e7", "#e8eaf6"];

    // Lấy tất cả các phần tử có class "noti-ads"
    var elements = document.querySelectorAll('.noti-ads');

    // Đặt màu nền dựa trên ngày trong tuần cho từng phần tử
    elements.forEach(function(element, index) {
      element.style.backgroundColor = colors[dayOfWeek];
    });

    // Hiển thị ngày trong tuần
    var days = ['Chủ nhật', 'Thứ hai', 'Thứ ba', 'Thứ tư', 'Thứ năm', 'Thứ sáu', 'Thứ bảy'];
    var dayDisplay = document.getElementById('day-of-week');
    dayDisplay.textContent = 'Hôm nay là ' + days[dayOfWeek];
  });
</script>
