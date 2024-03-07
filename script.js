let root = document.documentElement;
let select = document.getElementById('select');

select.addEventListener('change', function () {
    if (select.value === 'black') {
        root.style.setProperty('--bg-color', 'black');
        root.style.setProperty('--nav-color', 'rgb(29, 27, 27)');
    } else {

        root.style.setProperty('--bg-color', '#040430');
        root.style.setProperty('--nav-color', 'rgb(24, 24, 82)');
    }
});
