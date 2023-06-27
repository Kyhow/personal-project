function updateTime() {
    var currentTime = new Date()
    var hours = currentTime.getHours()
    var minutes = currentTime.getMinutes()
    if (minutes < 10) {
        minutes = "0" + minutes
    }
    var t_str = hours + ":" + minutes + " ";
    document.getElementById('actualHour').innerHTML = t_str;
}
setInterval(updateTime, 1000);



window.addEventListener('click', function (e) {
    if (document.getElementById('start-menu').contains(e.target)) {
        // Click du le bouton démarrer
        const startmenu = document.getElementById('start-menu')
        startmenu.style.borderBottom = "#f4fcff solid 3px";
        startmenu.style.borderRight = "#f4fcff solid 3px";
        startmenu.style.borderLeft = "black solid 3px";
        startmenu.style.borderTop = "black solid 3px";

        const menucontent = document.getElementById('menu-content');
        menucontent.style.display = "block";
    } else {
        // Click en dehors de la fenêtre du menu
        const startmenu = document.getElementById('start-menu')

        startmenu.style.borderBottom = "black solid 3px";
        startmenu.style.borderRight = "black solid 3px";
        startmenu.style.borderLeft = "#f4fcff solid 3px";
        startmenu.style.borderTop = "#f4fcff solid 3px";

        const menucontent = document.getElementById('menu-content');
        menucontent.style.display = "none";
    }

});

let myIcons = document.getElementsByClassName("icon");

for (let i = 0; i < myIcons.length; i++) {
    myIcons[i].addEventListener('click', function () {
        myIcons[i].lastElementChild.lastChild.style.backgroundColor = '#000078';
        myIcons[i].lastElementChild.lastChild.style.border = '1px white dotted'
        myIcons[i].firstElementChild.style.filter = "sepia(100%) hue-rotate(190deg) saturate(500%)";
    })
}

var divMenu = document.getElementsByClassName("menu-div");


for (let i = 0; i < divMenu.length; i++) {
    divMenu[i].addEventListener('click', function () {
        divMenu[i].style.backgroundColor = "#000078";
        for (const child of divMenu[i].children) {
            child.style.backgroundColor = "#000078";
            child.style.color = "whitesmoke";
        }
        let arrow = divMenu[i].getElementsByClassName("arrow-right");
        arrow.style.borderLeft = "10px solid whitesmoke";
        console.log('test');
    })
}

var shut = document.getElementById("shutdown");
shut.addEventListener('click',e =>{
console.log('test')
})

