let form = document.querySelector("form");
let userName = document.querySelector("#name");
let bio = document.querySelector("#bio");
let role = document.querySelector("#role");
let photo = document.querySelector("#photo");


const userManager = {
    users: [],
    addUser: function () {
        this.users.push({
            userName: userName.value,
            bio: bio.value,
            role: role.value,
            photo: photo.value,
        });

        form.reset();
        this.renderUi();
    },

    removeUser: function () { },
    init: function () {
        form.addEventListener("submit", this.submitForm.bind(this));
    },
    submitForm: function (e) {
        e.preventDefault();
        this.addUser();
    },

    renderUi: function () {
        this.users.forEach(function (user) {
            // create main div
            const card = document.createElement("div");
            card.className = "bg-gray-800 border border-gray-700 rounded-xl p-6 text-center shadow";

            // create image
            const img = document.createElement("img");
            img.src = user.photo;
            img.className = "w-20 h-20 rounded-full mx-auto mb-4";
            card.appendChild(img);

            // create name
            const name = document.createElement("h3");
            name.className = "font-semibold text-lg";
            name.textContent = user.userName;
            card.appendChild(name);

            // create role
            const role = document.createElement("p");
            role.className = "text-blue-400 text-sm";
            role.textContent = user.role;
            card.appendChild(role);

            // create bio
            const bio = document.createElement("p");
            bio.className = "text-gray-400 text-sm mt-2";
            bio.textContent = user.bio;
            card.appendChild(bio);

            // append elements

            // add card to page
            document.querySelector(".users").appendChild(card);
        })
    },


}

userManager.init();