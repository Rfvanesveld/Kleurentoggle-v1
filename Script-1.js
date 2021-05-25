let toggleNavStatus = false;

let toggleNav = function () {
    let getSidebar = document.querySelector(".nav-sidebar");
    let getSidebarUl = document.querySelector('.nav-sidebar ul');

    if (toggleNavStatus === false) {
        getSidebarUl.style.visibility = "visible";
        // getSidebar.style.width = "50px";
        toggleNavStatus = true;
    }

    else if (toggleNavStatus === true) {
        getSidebarUl.style.visibility = "hidden";
        toggleNavStatus = false;
    }
}

function Silver() {
    document.bgColor = "Silver";
    getSidebarUl.style.visibility = "hidden";
}

function Blue() { document.bgColor = "Cornflowerblue" }
function Orange() { document.bgColor = "Orange" }
function Red() { document.bgColor = "Red" }
function Green() { document.bgColor = "Green" }

document.addEventListener('mouseup', function (event) {

    let x = document.querySelector('.nav-sidebar ul');
    if (event.target != x) {
        x.style.visibility = "hidden";;
    }
});