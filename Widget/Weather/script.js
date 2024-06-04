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
                        document.getElementById('temperature').textContent = `${temp}°C`;
                        document.getElementById('description').textContent = description.charAt(0).toUpperCase() + description.slice(1);
                        document.getElementById('city').textContent = cityName;
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
                return '<i class="fad fa-cloud-drizzle" style="--fa-primary-color: #c9e7fd; --fa-secondary-color: #4eb4fd; --fa-secondary-opacity: 1;"></i>';
            } else if (description.includes('cloud')) {
                return '<i class="fad fa-clouds" style="--fa-primary-color: #bdebff; --fa-secondary-color: #6da2fd; --fa-secondary-opacity: 1;"></i>';
            } else {
                return '<i class="fad fa-cloud-sun" style="--fa-primary-color: #a3d7f4; --fa-secondary-color: #ffe270; --fa-secondary-opacity: 1;"></i>';
            }
        }

        document.addEventListener('DOMContentLoaded', () => {
            getWeather();
        });