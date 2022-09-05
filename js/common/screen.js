const KEY_SCREEN_BREAKED = 'KEY_SCREEN_BREAKED';
const SCREEN_SIZE = 'SCREEN_SIZE';

var originalSetItem = localStorage.setItem;
localStorage.setItem = function (key, value) {
    var event = new Event(KEY_SCREEN_BREAKED);
    event.value = value; // Optional..
    event.key = key; // Optional..
    document.dispatchEvent(event);
    originalSetItem.apply(this, arguments);
};

function onScreenChanged(cb) {
    document.addEventListener(KEY_SCREEN_BREAKED, e => {
        if (e.key == SCREEN_SIZE) {
            cb(e);
        }
    }, false);
}

const screen_sizes = {
    'sm': { size: 640, value: 'sm' },
    'md': { size: 768, value: 'md' },
    'lg': { size: 1024, value: 'lg' },
    'xl': { size: 1280, value: 'xl' },
    '2xl': { size: 1536, value: '2xl' },
}
let current_size = screen_sizes.sm;

function getScreenSize() {
    const w = $(window).width();
    if (w <= screen_sizes.sm.size) {
        if (current_size.value != screen_sizes.sm.value) {
            current_size = screen_sizes.sm;
            localStorage.setItem(SCREEN_SIZE, current_size.value);
        }
    } else if (w <= screen_sizes.md.size) {
        if (current_size.value != screen_sizes.md.value) {
            current_size = screen_sizes.md;
            localStorage.setItem(SCREEN_SIZE, current_size.value);
        }
    } else if (w <= screen_sizes.lg.size) {
        if (current_size.value != screen_sizes.lg.value) {
            current_size = screen_sizes.lg;
            localStorage.setItem(SCREEN_SIZE, current_size.value);
        }
    } else if (w <= screen_sizes.xl.size) {
        if (current_size.value != screen_sizes.xl.value) {
            current_size = screen_sizes.xl;
            localStorage.setItem(SCREEN_SIZE, current_size.value);
        }
    } else if (w <= screen_sizes["2xl"].size) {
        if (current_size.value != screen_sizes['2xl'].value) {
            current_size = screen_sizes['2xl'];
            localStorage.setItem(SCREEN_SIZE, current_size.value);
        }
    } else {
        if (current_size.value != screen_sizes['2xl'].value) {
            current_size = screen_sizes['2xl'];
            localStorage.setItem(SCREEN_SIZE, current_size.value);
        }
    }
}

$(window).resize(function () {
    getScreenSize()
}.bind(this));

getScreenSize();