// Toggle class active hamburger menu
const navbarNav = document.querySelector('.navbar-nav');
// ketika hamburger menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

// Toggle class active untuk search flowFrom
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');

document.querySelector('#search-button').onclick =(e) => {
    searchForm.classList.toggle('active');
    searchBox.focus();
    e.preventDefault();
}

// Toggle class active untuk Shopping caretColor
const shoppingCart = document.querySelector ('.shopping-cart');
document.querySelector('#shopping-cart-button').onclick =(e) =>{
    shoppingCart.classList.toggle('active');
    e.preventDefault();
}


// Klik diluar elemen
const hm = document.querySelector('#hamburger-menu');
const sb = document.querySelector('#search-button');
const sc = document.querySelector('#shopping-cart-button')

document.addEventListener('click', function (e) {
if(!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
}

if(!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove('active');
}


if(!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove('active');
}
});

// Modal Box

const itemDetailModal = document.querySelector('#item-detail-modal');
const itemDetailButtons = document.querySelectorAll('.item-detail-button');

itemDetailButtons.forEachl((btn) => {
    btn.onclick = (e) => {
        itemDetailButtons.style.display = 'flex';
        e.preventDefault ();
    };
});

itemDetailButtons.onclick = (e) => {
    itemDetailButton.style.display = 'flex';
    e.preventDefault();
};

//klik tombol close

document.querySelector('.modal .close-icon').onclick = (e) => {
    itemDetailModal.style.display = 'none';
    e.preventDefault();
};

//klik di luar modal
const modal = document.querySelector('#item-detail-modal');
window.onclick = (e) => {
    if (e.target === itemDetailModal) {
        modal.style.display = 'none'
    }
};