var activeContent;
var contents;

window.onload = function() {
    contents = document.getElementsByClassName("content");
    activeContent = contents[0];
    for(let i = 1; i < contents.length; i++) {
        contents[i].style.display = "none";
    }
    var contentButtons = document.querySelectorAll(".nav *");
    for(let i = 0; i < contentButtons.length; i++) {
        contentButtons[i].addEventListener("click", function(event) {
            navOnClickSwitcher(event.target);
        });
    }

}
function navOnClickSwitcher(element) {
    if (activeContent.id.localeCompare(element.getAttribute("data-content-id"))) {
        activeContent.style.display = "none";
        activeContent = contents[element.getAttribute("data-content-id")];
        activeContent.style.display = "flex";
    }
}