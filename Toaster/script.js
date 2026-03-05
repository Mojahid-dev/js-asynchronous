function createToaster(config){
    return function(str, icon){
        let div = document.createElement("div");
        div.className = `inline-block ${config.theme === "dark" ? "bg-gray-800 text-white": config.theme === "light" ? "bg-white text-gray-800" : ""} px-6 py-3 shadow-lg pointer-events-none rounded gap-3`;
        div.textContent = str;

        let parentElem = document.querySelector(".parent");
        parentElem.appendChild(div);

        
        if(icon) {
            let span = document.createElement("span");
            span.textContent = icon;
            span.className = "text-2xl";
            div.appendChild(span);
        }

        if(config.positionX === "left") {
            div.className += " left-5";
        }
        
        
        setTimeout(() => {
            parentElem.removeChild(div);
        }, config.duration * 1000);

    }
}

let toaster = createToaster({
    positionX: "left",
    positionY: "top",
    duration: 3,
    theme: "light",
});

toaster("Hello there, How are you", "😀");

setTimeout(() => {
    toaster("This is a toaster notification", "🔔");
}, 5000);

setTimeout(() => {
    toaster("This is another notification", "🚀");
}, 10000);