        function getWeather() {
            const apiKey = '3652719b430b5b7602ae27015fab39a5'; // Thay thế bằng API key của bạn
            const city = 'Hanoi, VN'; // Thành phố Hà Nội
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

            fetch(url)
                .then(response => response.json())
                .then(data => {
                    if (data.cod === 200) {
                        const cityName = data.name;
                        const temp = data.main.temp;
                        const description = data.weather[0].description;
                        const weatherIcon = getWeatherIcon(description);

                        document.getElementById('weather-icon').src = weatherIcon;
                        document.getElementById('city').textContent = cityName;
                        document.getElementById('description').textContent = description.charAt(0).toUpperCase() + description.slice(1);

                        animateTemperature(0, temp);
                    } else {
                        handleWeatherError();
                    }
                })
                .catch(handleWeatherError);
        }

        function getWeatherIcon(description) {
        // Kiểm tra mô tả thời tiết để chọn biểu tượng phù hợp
            if (description.includes('rain')) {
                return 'https://tongxuantrung.github.io/Blogger/SVG/rain.svg';
            } else if (description.includes('cloud')) {
                return 'https://tongxuantrung.github.io/Blogger/SVG/cloud.svg';
            } else if (description.includes('clear')) {
                return 'https://tongxuantrung.github.io/Blogger/SVG/clear.svg';
            }
        }

        function animateTemperature(start, end) {
            const duration = 2000; // Thời gian chạy hiệu ứng (2 giây)
            const startTime = performance.now();

            function updateTemperature(currentTime) {
                const elapsedTime = currentTime - startTime;
                const progress = Math.min(elapsedTime / duration, 1);
                const currentTemp = Math.floor(start + (end - start) * progress);

                document.getElementById('temperature').innerHTML = `${currentTemp}<sup>°C</sup>`;

                if (progress < 1) {
                    requestAnimationFrame(updateTemperature);
                }
            }

            requestAnimationFrame(updateTemperature);
        }

        function handleWeatherError() {
            document.getElementById('temperature').textContent = 'Error retrieving weather data';
            document.getElementById('description').textContent = 'Error retrieving weather data';
            document.getElementById('city').textContent = 'Error retrieving weather data';
        }

        document.addEventListener('DOMContentLoaded', getWeather);
