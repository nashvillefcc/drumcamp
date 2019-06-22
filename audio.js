//Display audio element id
const display = document.getElementById("display");

//Power ON and OFF
let toggle = document.getElementById("power-switch-input");
display.innerHTML = 'Power Off';

$('.playback').attr('disabled', 'disabled'); //audio off

// console.log(typeof toggle.value);

toggle.addEventListener('input', () => {
    if ((toggle.value == '0' && bank.value == '0') || (toggle.value == '0' && bank.value == '1')) {
        toggle.value = '1';

        display.innerHTML = "Power On";

        async function keySounds(key, id) {
            if (event.keyCode == key) {
                let clip = document.getElementById(id);
                await clip;
                if (clip == null) {
                    // console.log('clip is null');
                    return 0;
                }
                // console.log(clip);
                // console.log(clip.id);
                display.innerHTML = clip.id;

                clip.currentTime = 0;

                let playPromise = clip.play();

                if (playPromise !== undefined) {
                    playPromise.then(_ => {
                        clip.play();
                        // console.log('play');
                    })
                        .catch(error => {
                            console.log(error);
                        })
                }
            }
        }

        // console.log('bank before if ' + bank.value);

        if (bank.value == '0') {
            // console.log('bank.value == 0');
            $(document).keypress(function (event) {
                // console.log(event.keyCode);
                keySounds(113, "Heater 1");
                keySounds(119, "Heater 2");
                keySounds(101, "Heater 3");
                keySounds(97, "Heater 4");
                keySounds(115, "Clap");
                keySounds(100, "Open HH");
                keySounds(122, "Kick Hat");
                keySounds(120, "Kick");
                keySounds(99, "Closed HH");
            });
        } else {
            $(document).keypress(function (event) {
                // console.log(event.keyCode);
                keySounds(113, "Chord 1");
                keySounds(119, "Chord 2");
                keySounds(101, "Chord 3");
                keySounds(97, "Shaker");
                keySounds(115, "Open H");
                keySounds(100, "Closed H");
                keySounds(122, "Punchy Kick");
                keySounds(120, "Side Stick");
                keySounds(99, "Snare");
            });
        }

        bank.addEventListener('input', () => {
            // console.log(bank.value);
            // console.log(toggle.value);
            switch (bank.value) {
                case '0':
                    // console.log('bank.value == 0');
                    if (toggle.value == '1') {
                        $(document).keypress(function (event) {
                            // console.log(event.keyCode);
                            keySounds(113, "Heater 1");
                            keySounds(119, "Heater 2");
                            keySounds(101, "Heater 3");
                            keySounds(97, "Heater 4");
                            keySounds(115, "Clap");
                            keySounds(100, "Open HH");
                            keySounds(122, "Kick Hat");
                            keySounds(120, "Kick");
                            keySounds(99, "Closed HH");
                        });
                    }
                    break;
                case '1':
                    // console.log('bank.value == 1');
                    if (toggle.value == '1') {
                        $(document).keypress(function (event) {
                            // console.log(event.keyCode);
                            keySounds(113, "Chord 1");
                            keySounds(119, "Chord 2");
                            keySounds(101, "Chord 3");
                            keySounds(97, "Shaker");
                            keySounds(115, "Open H");
                            keySounds(100, "Closed H");
                            keySounds(122, "Punchy Kick");
                            keySounds(120, "Side Stick");
                            keySounds(99, "Snare");
                        });
                    }
                    break;
                default:
                    console.log('switch');
            }
        });

        $(".playback").removeAttr('disabled'); //audio on

        $(".playback").click(function (e) {
            e.preventDefault();

            var clip = $(this).next('audio').get(0);

            if (clip === undefined) {
                display.innerHTML = '';
            } else {
                display.innerHTML = clip.id;
                clip.currentTime = 0;

                let playPromise = clip.play();

                if (playPromise !== undefined) {
                    playPromise.then(_ => {
                        clip.play();
                    })
                        .catch(error => {
                            console.log(error);
                        })
                }
            }
        });
    } else {
        toggle.value = '0';
        display.innerHTML = 'Power Off';
        $(document).unbind('keyup keydown keypress'); //keyboard off
        $(".playback").attr('disabled', 'disabled'); // audio off
    }
});

//Bank ON and OFF
let bank = document.getElementById("bank-switch-input");

// console.log(typeof bank.value);

bank.addEventListener('input', (event) => {
    event.preventDefault();

    if (bank.value == '0') {
        bank.value = '1';

        display.innerHTML = 'Smooth Piano Kit';

        let newQ = " <audio id='Chord 1' class='chord1' src='https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'></audio>";
        $('.heater1').replaceWith(newQ);

        let newW = " <audio id='Chord 2' class='chord2' src='https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'></audio>";
        $('.heater2').replaceWith(newW);

        let newE = " <audio id='Chord 3' class='chord3' src='https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'></audio>";
        $('.heater3').replaceWith(newE);

        let newA = " <audio id='Shaker' class='shaker' src='https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'></audio>";
        $('.heater4').replaceWith(newA);

        let newS = " <audio id='Open H' class='openH' src='https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'></audio>";
        $('.clap').replaceWith(newS);

        let newD = " <audio id='Closed H' class='closedH' src='https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'></audio>";
        $('.openHH').replaceWith(newD);

        let newZ = " <audio id='Punchy Kick' class='punchyKick' src='https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'></audio>";
        $('.kickHat').replaceWith(newZ);

        let newX = " <audio id='Side Stick' class='sideStick' src='https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'></audio>";
        $('.kick').replaceWith(newX);

        let newC = " <audio id='Snare' class='snare' src='https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'></audio>";
        $('.closedHH').replaceWith(newC);

    } else {
        bank.value = '0';

        display.innerHTML = 'Heater Kit';

        let oldQ = "<audio id='Heater 1' class='heater1' src='https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'></audio>"
        $('.chord1').replaceWith(oldQ);

        let oldW = "<audio id='Heater 2' class='heater2' src='https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'></audio>"
        $('.chord2').replaceWith(oldW);

        let oldE = "<audio id='Heater 3' class='heater3' src='https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'></audio>"
        $('.chord3').replaceWith(oldE);

        let oldA = "<audio id='Heater 4' class='heater4' src='https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'></audio>"
        $('.shaker').replaceWith(oldA);

        let oldS = "<audio id='Clap' class='clap' src='https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'></audio>"
        $('.openH').replaceWith(oldS);

        let oldD = "<audio id='Open HH' class='openHH' src='https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'></audio>"
        $('.closedH').replaceWith(oldD);

        let oldZ = "<audio id='Kick Hat' class='kickHat' src='https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'></audio>"
        $('.punchyKick').replaceWith(oldZ);

        let oldX = "<audio id='Kick' class='kick' src='https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'></audio>"
        $('.sideStick').replaceWith(oldX);

        let oldC = "<audio id='Closed HH' class='closedHH' src='https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'></audio>"
        $('.snare').replaceWith(oldC);
    }
});