function calculate(operation) {
    const num1Input = document.getElementById('num1');
    const num2Input = document.getElementById('num2');
    const output = document.getElementById('output');
    const errorMessage = document.getElementById('error-message');

    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);

    errorMessage.textContent = '';

    if (isNaN(num1) || isNaN(num2)) {
        errorMessage.textContent = 'Будь ласка, введіть коректні числа в обидва поля.';
        output.textContent = '0';
        return;
    }

    let result;
    switch (operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                errorMessage.textContent = 'Ділення на нуль неможливе.';
                output.textContent = '0';
                return;
            }
            result = num1 / num2;
            break;
        default:
            return;
    }

    output.textContent = Math.round(result * 100) / 100;
}
