let form = document.querySelector("form");


const userManager = {
    users: [],
    addUser: function () {},
    removeUsr: function () {},
    init: function () {
        form.addEventListener("submit", this.submitForm.bind(this));
    },
    submitForm: function (e) {
        e.preventDefault();
        console.log("Form submitted succesfully");
    }
}

userManager.init();