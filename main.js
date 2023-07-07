let favoriteColor = '#efe77e';
let toggle = 0;

const favoriteButton = document.querySelectorAll('.favorite');
const favoritePath = document.querySelectorAll('.favoritePath');

favoriteButton.forEach(btn => {
    btn.addEventListener('click', (e) => {
        favoriteToggle(e.target);
    });
});

function favoriteToggle(id) {
    if (toggle === 0) {
        favoritePath.forEach(e => {
            e.style.fill = favoriteColor;
        });
        toggle += 1;
    }
    else {
        favoritePath.forEach(e => {
            e.style.fill = 'none';
        });
        toggle -= 1;
    }
}