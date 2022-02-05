const input = document.querySelector('#favchap');
const button = document.querySelector('.input button');
const list = document.querySelector('.list');

button.addEventListener('click', function() {
    if (input.value !== '') {
        const liElem = document.createElement('li');
        const btnEle = document.createElement('button');
        liElem.textContent = input.value;
        btnEle.textContent = '❌';

        liElem.appendChild(btnEle);
        list.appendChild(liElem);
        btnEle.addEventListener('click', function(event) {
            const parent = event.target.closest('li');
            parent.remove();
            input.value = '';
            input.focus();
        });
    }
});