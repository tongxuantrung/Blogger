        function getWeather() {
            const apiKey = 'fb63540f2dbf97d229b3c7ceddc13b53'; // Thay thế bằng API key của bạn
            const city = 'Hanoi, VN'; // Thành phố Hà Nội
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

            fetch(url)
                .then(response => response.json())
                .then(data => {
                    if (data.cod === 200) {
                        const cityName = data.name;
                        const temp = data.main.temp;
                        const description = data.weather[0].description;
                        const weatherIcon = 'https://tongxuantrung.github.io/Blogger/SVG/weather.svg';

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

        function animateTemperature(start, end) {
            const duration = 2000; // Thời gian chạy hiệu ứng (2 giây)
            const startTime = performance.now();

            function updateTemperature(currentTime) {
                const elapsedTime = currentTime - startTime;
                const progress = Math.min(elapsedTime / duration, 1);
                const currentTemp = Math.floor(start + (end - start) * progress);

                document.getElementById('temperature').textContent = `${currentTemp}°C`;

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
