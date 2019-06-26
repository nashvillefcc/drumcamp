// Display audio element id
const display = document.getElementById("display");
display.innerHTML = 'Power Off';

// Disable audio buttons
$('.playback').attr('disabled', 'disabled');

// Power toggle ON and OFF
const powerToggle = document.getElementById("power-switch-input");
powerToggle.addEventListener('input', () => {
    if (powerToggle.checked) {
        display.innerHTML = "Power On";
        $(".playback").removeAttr('disabled');
        enableKeypresses();
    } else {
        display.innerHTML = 'Power Off';
        $(".playback").attr('disabled', 'disabled');
        disableKeypresses();
    }
});

const keyButtonMappings = [113, 97, 122, 119, 115, 120, 101, 100, 99];
const buttonElems = $('#drum-pad button');

function enableKeypresses() {
    $(document).keypress(function (event) {
        let buttonIndex = keyButtonMappings.indexOf(event.keyCode);
        if (buttonIndex > -1) {
            buttonElems[buttonIndex].click();
        }
    });
}

function disableKeypresses() {
    $(document).unbind('keypress');
}

// Bank toggle ON and OFF
const bankToggle = document.getElementById("bank-switch-input");
bankToggle.addEventListener('input', () => {
    if (bankToggle.checked) {
        display.innerHTML = 'Smooth Piano Kit';
        assignAudioBank(audioBank2);
    } else {
        display.innerHTML = 'Heater Kit';
        assignAudioBank(audioBank1);
    }
});

const audioBank1 = [{
    id: 'Heater 1',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
}, {
    id: 'Heater 4',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
}, {
    id: 'Kick Hat',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
}, {
    id: 'Heater 2',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
}, {
    id: 'Clap',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
}, {
    id: 'Kick',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
}, {
    id: 'Heater 3',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
}, {
    id: 'Open HH',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
}, {
    id: 'Closed HH',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
}];

const audioBank2 = [{
    id: 'Chord 1',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
}, {
    id: 'Shaker',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
}, {
    id: 'Punchy Kick',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
}, {
    id: 'Chord 2',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
}, {
    id: 'Open H',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
}, {
    id: 'Side Stick',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
}, {
    id: 'Chord 3',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
}, {
    id: 'Closed H',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
}, {
    id: 'Snare',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
}];

const audioElems = $('#drum-pad audio');

function assignAudioBank(audioBank) {
    audioElems.each((index, element) => {
        $(element).attr('id', audioBank[index].id);
        let audioSourceElem = $('source', element);
        audioSourceElem.attr('src', audioBank[index].src);
        element.load();
    });
}
assignAudioBank(audioBank1);

$(".playback").click(function (e) {
    e.preventDefault();

    let clip = $(this).next('audio').get(0);

    display.innerHTML = clip.id;

    clip.currentTime = 0;
    clip.play();
});