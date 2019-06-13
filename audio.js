$(function () {
    $(".playback").click(function (e) {
        e.preventDefault();

        // This next line will get the audio element
        // adjacent to button clicked.
        var clip = $(this).next('audio').get(0);
        if (clip.paused)
            clip.play();
        else
            clip.pause();
    });
});
//
// courtesy of @jessicadavey (github) / @jessicadavey (Discord) Thank you Jessica!
//
const buttons = [...document.querySelectorAll("buttons")];
buttons.map(button => button.addEventListener("click", function (e) {

    const nameOfClip = ($(this).next('audio').get(0).id);
    const display = document.getElementById("display");
    display.innerHTML = nameOfClip;

}));