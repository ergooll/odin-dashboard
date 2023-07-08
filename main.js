let favoriteColor = '#efe77e';
let toggle = 0;

const favoriteButton = document.querySelectorAll('.favorite');
const favoritePath = document.querySelectorAll('.favoritePath');

favoriteButton.forEach((btn, id) => {
    btn.addEventListener('click', (e) => {
        favoriteToggle(id);
    });
});

function favoriteToggle(index) {
    let favoriteID = favoritePath[index];
    if (toggle === 0) {
        favoriteID.style.fill = favoriteColor;
        toggle += 1;
    } else {
        favoriteID.style.fill = 'none';
        toggle -= 1;
    }
}