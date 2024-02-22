//#1

const emojiArray = ['\u{1F60A}', '\u{1F355}', '\u{26BD}', '\u{1F388}', '\u{1F3B6}', '\u{1F4DA}','\u{1F5A5}', '\u{26F0}', '\u{1F30A}', '\u{1F3A8}', '\u{1F3B8}', '\u{1F31E}'];

// console.log(emojiArray);

//#2
const emojiSection = document.getElementById('emoji');

const emojiList = [];

for (const emoji of emojiArray) {
    emojiList.push(`
    <div class="each-emoji">
        <div  class="emoji-style">${emoji}</div>
        <code class="code">${emoji.codePointAt(0).toString(16)}</code>
    </div>
    `);
}

//#3

emojiSection.innerHTML = emojiSection.innerHTML + emojiList.join('');




