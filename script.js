document.querySelector('button').addEventListener('click', () => {
    let input = document.querySelector('#userInput').value;
    document.querySelector(`#savedValue`).innerText = "Oluşturulacak div sayısı " + input;
    

    let container = document.querySelector('.container');
    container.innerHTML = '';

    for(let i = 0; i < input; i++){
        let newDiv = document.createElement('div');
        newDiv.innerText = `Div ${i+1}`;
        newDiv.style.border = '1px solid black';
        newDiv.className = 'kutu';
        container.appendChild(newDiv);
    }

    document.addEventListener('DOMContentLoaded', function () {
        createGrid(16); // Create 16x16 grid initially

        document.querySelector('button').addEventListener('click', () => {
            let input = document.querySelector('#userInput').value;
            document.querySelector('#savedValue').innerText = "Oluşturulacak div sayısı " + input;
            createGrid(input);
        });
    }
    );
});