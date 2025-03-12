// JSON Data Example
const user = {
    firstName: "Joe",
    lastName: "Greyson",
};

// Template Strings Example
document.getElementById("greeting").innerHTML = `Hi, I'm <span>${user.firstName} ${user.lastName}</span>`;

// Display Current Date
document.getElementById("current-date").innerText = new Date().toDateString();

// Navigation Links using Iteration
const navItems = ["Home", "About", "Portfolio", "Blog", "Contact"];
const navContainer = document.getElementById("nav-links");
navItems.forEach(item => {
    let link = document.createElement("a");
    link.href = "#";
    link.innerText = item;
    navContainer.appendChild(link);
});

// Interval Example - Blinking Contact Button
setInterval(() => {
    document.querySelector(".btn-talk").classList.toggle("blink");
}, 1000);


function displaysmething (){
    document.getElementById("newpagedetails").innerHTML="i am a boy";
}

