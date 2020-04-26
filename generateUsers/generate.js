starting = 'xX';
ending = 'Xx';
username = '';

maxLength = 16;

keywords = ['xBoX', 'gAM3R', 'EM0', '3M0', 'MCR', 'luv', 'l33t', '420', 'stoner', 'weed', 'dope', 'rawr', 'x3', 'xD', 'grr', 'zim', 'owo', 'Inuyasha', 'Kagome', 'Light', 'Misa', 'Ryuk', 'PS3', 'onegai', 'sensei', 'fck', 'sh1t', '666', '69', '123', 'dino', 'kitty', 'Atreyu']

temp = '';
for (i = 0; i<12; i++){
    if (temp.length == 12 || (temp.length > 9 && temp.length < 12))
    {
        break;
    }
    else if(temp.length > 12) {
        temp = temp.slice(0,11);
        break;
    }
    temp += keywords[Math.floor(Math.random()*keywords.length)];
}

username = starting + temp + ending;