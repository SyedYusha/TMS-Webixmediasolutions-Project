function sendMessage() {
            const input = document.getElementById('messageInput');
            const message = input.value.trim();

            if (message) {
                const chatMessages = document.getElementById('chatMessages');
                const now = new Date();
                const time = now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });

                const messageDiv = document.createElement('div');
                messageDiv.className = 'message sent';
                messageDiv.innerHTML = `
                    <div class="message-content">
                        <div class="message-bubble">${message}</div>
                        <div class="message-time">${time}</div>
                    </div>
                `;

                chatMessages.appendChild(messageDiv);
                chatMessages.scrollTop = chatMessages.scrollHeight;
                input.value = '';
            }
        }

        document.getElementById('messageInput').addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });

        document.querySelectorAll('.contact-item').forEach(item => {
            item.addEventListener('click', function () {
                document.querySelectorAll('.contact-item').forEach(i => i.classList.remove('active'));
                this.classList.add('active');
            });
        });