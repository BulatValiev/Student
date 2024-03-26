// Получаем элементы чата
const messageForm = document.getElementById('messageForm');
const messageInput = document.getElementById('messageInput');
const messagesList = document.getElementById('messages');

// Функция для добавления сообщения в чат
function addMessage(message) {
    const li = document.createElement('li');
    li.textContent = message;
    messagesList.appendChild(li);
}

// Обработчик события отправки формы
messageForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const message = messageInput.value;
    if(message.trim() !== '') {
        addMessage(message);
        messageInput.value = '';
    }
});

window.onload = function() {
    // Инициализация карты Leaflet
    var map = L.map('map', { attributionControl: false }).setView([55.7558, 37.6173], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
    }).addTo(map);

    // Генерация случайных координат
    function getRandomCoordinates() {
        const minLat = -90;
        const maxLat = 90;
        const minLng = -180;
        const maxLng = 180;

        const lat = Math.random() * (maxLat - minLat) + minLat;
        const lng = Math.random() * (maxLng - minLng) + minLng;

        return { lat, lng };
    }

    // Создание маркера на случайной точке
    const marker = new maps.Marker({
        position: getRandomCoordinates(),
        map: map
    });
};
