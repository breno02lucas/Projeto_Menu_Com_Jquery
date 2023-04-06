var btnOpen = $("#btn-open");
var btnClose = $("#btn-close");
var menu = $("#menu");

btnOpen.click(function() {
    menu.fadeIn(500);
    btnOpen.css("display", "none");
    btnClose.css("display", "initial");
});

btnClose.click(function() {
    menu.fadeOut(500);
    btnOpen.css("display", "initial");
    btnClose.css("display", "none");
});



