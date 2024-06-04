 document.addEventListener(&quot;DOMContentLoaded&quot;, function() {
    // Danh sách các text ngẫu nhiên
    var textList = [
        &quot;z0dRnKSMVHN8CGk&quot;,
        &quot;gaFftJPAVg0BzU0&quot;,
        &quot;heh2P6mcFVWM663&quot;,
        &quot;BoiGnNfiR2Ecia4&quot;,
        &quot;p83b0FKxyk3osYt&quot;,
        &quot;k3KFBG6AMhiPLbX&quot;,
    ];

    // Hàm để lấy text ngẫu nhiên từ danh sách
    function getRandomText() {
        var randomIndex = Math.floor(Math.random() * textList.length);
        return textList[randomIndex];
    }

    // Lấy text và thời gian lưu trữ từ localStorage
    var storedText = localStorage.getItem(&#39;randomText&#39;);
    var storedTime = localStorage.getItem(&#39;randomTextTime&#39;);

    var now = new Date();
    var currentTime = now.getTime();

    // Kiểm tra nếu đã lưu text trước đó và đã qua 24 giờ chưa
    if (storedText &amp;&amp; storedTime) {
        var elapsedTime = currentTime - parseInt(storedTime, 10);
        var hoursElapsed = elapsedTime / (1000 * 60 * 60);

        if (hoursElapsed &gt;= 24) {
            // Đã qua 24 giờ, tạo text mới
            var newText = getRandomText();
            localStorage.setItem(&#39;randomText&#39;, newText);
            localStorage.setItem(&#39;randomTextTime&#39;, currentTime);
            document.getElementById(&quot;randomText&quot;).innerText = newText;
        } else {
            // Chưa qua 24 giờ, sử dụng text cũ
            document.getElementById(&quot;randomText&quot;).innerText = storedText;
        }
    } else {
        // Chưa lưu text trước đó, tạo text mới
        var initialText = getRandomText();
        localStorage.setItem(&#39;randomText&#39;, initialText);
        localStorage.setItem(&#39;randomTextTime&#39;, currentTime);
        document.getElementById(&quot;randomText&quot;).innerText = initialText;
    }
});
