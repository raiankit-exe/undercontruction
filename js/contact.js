

function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}
function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}


const pupils = document.querySelectorAll(".eye .pupil");
window.addEventListener("mousemove", (e) => {
pupils.forEach((pupil) => {
    // get x and y postion of cursor
    var rect = pupil.getBoundingClientRect();
    var x = (e.pageX - rect.left) / 10 + "px";
    var y = (e.pageY - rect.top) / 20 + "px";
    pupil.style.transform = "translate3d(" + x + "," + y + ", 0px)";
});
});

var typed = new Typed(".auto-type", {
    strings: [ "Welcome to WebKys", "Let's Connect", "Connect Today!", "We're Happy to Assist!", "We're Just a Mail Away!" ],
    typeSpeed: 200,
    backSpeed: 60,
    loop: true
});


document.querySelector('#contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    e.target.elements.name.value = '';
    e.target.elements.email.value = '';
    e.target.elements.message.value = '';
  });