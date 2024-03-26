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
    
    var marker1 = L.marker([51.5, -0.09]).addTo(map);
    marker1.bindPopup("<b>Привет! </b><br>Я, увы, не здесь.").openPopup();
    
};
