const toggleClick = () => {
    const cat_img = document.querySelector('#cat1');
    const togglebtn = document.getElementById('toggle_btn');

    if (cat_img.style.display === 'none') {
        cat_img.style.display = 'inline';
        togglebtn.value = 'hide';
    } else {
        cat_img.style.display = 'none';
        togglebtn.value = 'show';
    }
}

const toggle_on = document.getElementById('toggle_btn');
toggle_on.addEventListener('click', toggleClick);

const toggleClick2 = () => {
    const dog_img = document.querySelector('#dog1');
    const togglebtn2 = document.getElementById('toggle_btn2');

    if (dog_img.style.display === 'none') {
        dog_img.style.display = 'inline';
        togglebtn2.value = 'hide';
    } else {
        dog_img.style.display = 'none';
        togglebtn2.value = 'show';
    }
}

const toggle_on2 = document.getElementById('toggle_btn2');
toggle_on2.addEventListener('click', toggleClick2);