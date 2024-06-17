document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('input');
    let currentInput = '';

    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const id = button.id;
            if (id === 'clr') {
                currentInput = '';
            } else if (id === 'ans') {
                try {
                    currentInput = eval(currentInput);
                } catch (error) {
                    currentInput = 'Error';
                }
            } else {
                const value = button.innerText;
                currentInput += value;
            }
            input.value = currentInput;
        });
    });
});
