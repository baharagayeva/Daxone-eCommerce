

const table = document.querySelector('table');
const rows = table.getElementsByTagName('tbody')[0].rows;

Array.from(rows).forEach(row => {
    const plusBtn = row.querySelector('.count-down');
    const minusBtn = row.querySelector('.count-up');

    const decrease = (event) => {
        let item = event.target.parentElement;
        let input = item.querySelector('input');
        let curValue = parseInt(input.value);
        input.value = ++curValue;

    }

    const increase = (event) => {
        let item = event.target.parentElement;
        let input = item.querySelector('input');
        let curValue = parseInt(input.value);
        input.value = --curValue;

    }

    plusBtn.addEventListener('click', increase);
    minusBtn.addEventListener('click', decrease);

})





