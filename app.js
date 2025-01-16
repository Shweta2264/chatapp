document.addEventListener('DOMContentLoaded', () => {
    const sendButton = document.getElementById('sendButton');
    const messageInput = document.getElementById('messageInput');
    const messagesContainer = document.getElementById('messages');

    // Default responses (simulating a basic "bot")
    const defaultReplies = {
        "hi": "hello!How can I assist you today?",
        "hello": "Hi! How can I assist you today?",
        "how are you": "I'm doing well, thank you for asking!",
        "what is your name?": "I am an AI tool designed for your help.I dont have any name.",
        "ok.thank you": "It's my pleasure",
        "thank you": "It's my pleasure",
        "bye": "Goodbye! Have a great day!",
        "default": "I'm sorry, I didn't understand that. Can you ask something else?"
    };

    // Function to add message to chat
    const addMessage = (text, sender) => {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', sender);
        messageDiv.textContent = text;
        messagesContainer.appendChild(messageDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight; // Scroll to bottom
    };

    // Function to get bot's response
    const getBotResponse = (userInput) => {
        const normalizedInput = userInput.toLowerCase().trim();
        return defaultReplies[normalizedInput] || defaultReplies["default"];
    };

    // Function to handle sending a message
    const sendMessage = () => {
        const userMessage = messageInput.value.trim();
        if (userMessage !== '') {
            // Add user message
            addMessage(userMessage, 'user');
            messageInput.value = ''; // Clear input field

            // Get bot response and add bot's message after a short delay
            const botResponse = getBotResponse(userMessage);
            setTimeout(() => {
                addMessage(botResponse, 'bot');
            }, 1000); // Simulate a delay for bot response
        }
    };

    // Event listener for send button
    sendButton.addEventListener('click', sendMessage);

    // Optional: Send message when Enter key is pressed
    messageInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
});
