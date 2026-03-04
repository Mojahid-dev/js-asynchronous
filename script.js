function createToaster(config) {
    const parent = document.querySelector(".parent");

    if (!parent) {
        throw new Error('Toaster container ".parent" not found');
    }

    parent.className = `${config.positionX === "left" ? "items-start" : config.positionX === "right" ? "items-end" : "items-center"} ${config.positionY === "top" ? "justify-start" : config.positionY === "bottom" ? "justify-end" : "justify-center"} fixed inset-0 flex flex-col gap-4 p-4 pointer-events-none`;

    return function (str) {
        const div = document.createElement("div");
        div.textContent = str;
        div.className = `inline-block ${config.theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-100 text-black"} shadow-lg rounded px-6 py-3 duration-300 animate-fade-in pointer-events-auto`;

        parent.appendChild(div);

        setTimeout(() => {
            if (div.parentNode === parent) {
                parent.removeChild(div);
            }
        }, config.duration * 1000);
    };
}

const toaster = createToaster({
    positionX: "left",
    positionY: "top",
    duration: 2,
    theme: "dark",
});

toaster("hello there is something");
setTimeout(() => {
    toaster("This is another toaster message");
}, 1000);
