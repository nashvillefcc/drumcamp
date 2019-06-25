const display = document.getElementById("display");

$(".playback").click(function (e) {
    e.preventDefault();

    var clip = $(this).next('audio').get(0);

    display.innerHTML = clip.id;

    clip.currentTime = 0;
    clip.play();
});