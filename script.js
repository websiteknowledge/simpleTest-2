document.getElementById('send-btn').addEventListener('click', function () {
    const nameInput = document.getElementById('name');
    const messageInput = document.getElementById('message');

    const name = nameInput.value.trim();
    const message = messageInput.value.trim();

    if (name === '' || message === '') {
        alert('Please enter both name and message.');
        return;
    }

    // Create a new message element
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.innerHTML = `<span class="name">${name}:</span> <span class="text">${message}</span>`;

    // Append the message to the messages div
    const messagesDiv = document.getElementById('messages');
    messagesDiv.appendChild(messageElement);
    messagesDiv.scrollTop = messagesDiv.scrollHeight; // Scroll to the bottom

    // Clear the input fields
    nameInput.value = '';
    messageInput.value = '';
});
