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
                        const weatherIcon = getWeatherIcon(description);
                        document.getElementById('weather-icon').innerHTML = weatherIcon;
                        document.getElementById('city').textContent = cityName;
                        document.getElementById('temperature').textContent = `${temp}°C`;
                        document.getElementById('description').textContent = description.charAt(0).toUpperCase() + description.slice(1);
                    } else {
                        document.getElementById('temperature').textContent = 'Error retrieving weather data';
                        document.getElementById('description').textContent = 'Error retrieving weather data';
                        document.getElementById('city').textContent = 'Error retrieving weather data';
                    }
                })
                .catch(error => {
                    console.error('Error fetching weather data:', error);
                    document.getElementById('temperature').textContent = 'Error retrieving weather data';
                    document.getElementById('description').textContent = 'Error retrieving weather data';
                    document.getElementById('city').textContent = 'Error retrieving weather data';
                });
        }

        // Hàm để lấy biểu tượng thời tiết từ Font Awesome tương ứng với trạng thái thời tiết
        function getWeatherIcon(description) {
            if (description.includes('rain')) {
                return 'https://tongxuantrung.github.io/Blogger/SVG/weather.svg';
            } else if (description.includes('cloud')) {
                return 'https://tongxuantrung.github.io/Blogger/SVG/weather.svg';
            } else {
                return 'https://tongxuantrung.github.io/Blogger/SVG/weather.svg';
            }
        }

        document.addEventListener('DOMContentLoaded', () => {
            getWeather();
        });
