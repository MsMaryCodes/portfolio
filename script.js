// ham feature
const app = {};
const body = document.querySelector('body');

// init method
app.init = () => {
    app.hamBtnListener();
};

// method to listen for click on hamburger menu button
app.hamBtnListener = () => {
    // hamburger menu button element saved in a variable
    const hamButton = document.getElementById("hamBtn");
    // nav menu element saved in a variable
    const nav = document.getElementById("navBarList");

    // listen to click of menu
    hamButton.addEventListener('click', function () {
        // hamburger menu button element saved in a variable
        const hamButton = document.getElementById("hamBtn");
        // nav menu element saved in a variable
        const nav = document.getElementById("navBarList");
        
        // listen to click of menu
        hamButton.addEventListener('click', function () {
            // add/remove class to nav menu
            nav.classList.toggle('show');

            // disable scrolling when menu is visible
            if (nav.classList.contains('show') === true) {
                body.classList.add('removeScrolling');
            } else {
                body.classList.remove('removeScrolling');
            }
        })
        
        const navItems = document.querySelectorAll('.navItem');

        navItems.forEach((item) => {
            item.addEventListener('click', function () {
                nav.classList.remove('show');
                body.classList.remove('removeScrolling');
            })
        })

    })



}

app.init();