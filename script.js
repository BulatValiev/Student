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
