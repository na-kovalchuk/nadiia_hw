// варіант 1
function drawTriangle(height, symbol) {
    for (let i = 1; i <= height; i++) {
        let line = '';
        for (let x = 1; x <= i; x++) {
            line += symbol;
        }
        console.log(line);
    }
}

drawTriangle(9, '*');



// варіант 2
function drawTriangle(height, symbol) {
    let i = 1;
    while (i <= height) {
        let line = '';
        let x = 1;
        while (x <= i) {
            line += symbol;
            x++;
        }
        console.log(line);
        i++;
    }
}

drawTriangle(9, '*');
