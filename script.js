var form = document.getElementById("my-form");
    
    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("my-form-status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          status.innerHTML = "Thanks for your submission!";
          form.reset()
        } else {
          response.json().then(data => {
            if (Object.hasOwn(data, 'errors')) {
              status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
            } else {
              status.innerHTML = "Oops! There was a problem submitting your form"
            }
          })
        }
      }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form"
      });
    }
    form.addEventListener("submit", handleSubmit)

    
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