let who = ['The dog', 'My grandma', 'His turtle', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'the keys', 'the car'];
let when = ['before the class', 'right on time', 'when I finished', 'during my lunch', 'while I was praying'];

function ramdom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

let excuse = ramdom(who) + ' ' + ramdom(action) + ' ' +  ramdom(what) + ' ' +  ramdom(when);

console.log(excuse);