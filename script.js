const textareaLayout = `<div class="textarea-wrap">
<textarea name="textfield" id="textfield" readonly>
</textarea>
</div>`;

const keyboardLayout = '<div class="keyboard" id="keyboard"></div>';

const englishLayout = `
<div class="container">
  <div>
    <div class="Backquote button double">~<br>\`</div>
    <div class="Digit1 button double">!<br>1</div>
    <div class="Digit2 button double">@<br>2</div>
    <div class="Digit3 button double">#<br>3</div>
    <div class="Digit4 button double">$<br>4</div>
    <div class="Digit5 button double">%<br>5</div>
    <div class="Digit6 button double">^<br>6</div>
    <div class="Digit7 button double">&<br>7</div>
    <div class="Digit8 button double">*<br>8</div>
    <div class="Digit9 button double">(<br>9</div>
    <div class="Digit0 button double">)<br>0</div>
    <div class="Minus button double">_<br>-</div>
    <div class="Equal button double">+<br>=</div>
    <div class="Backspace button">&#8592;</div>
  </div>
  <div>
    <div class="Tab button">
      &#8633;
    </div>
    <div class="KeyQ button">q</div>
    <div class="KeyW button">w</div>
    <div class="KeyE button">e</div>
    <div class="KeyR button">r</div>
    <div class="KeyT button">t</div>
    <div class="KeyY button">y</div>
    <div class="KeyU button">u</div>
    <div class="KeyI button">i</div>
    <div class="KeyO button">o</div>
    <div class="KeyP button">p</div>
    <div class="BracketLeft button double">{<br>[</div>
    <div class="BracketRight button double">}<br>]</div>
    <div class="Backslash button double">|<br>\\</div>
  </div>
  <div>
    <div class="CapsLock button">&#8682;</div>
    <div class="KeyA button">a</div>
    <div class="KeyS button">s</div>
    <div class="KeyD button">d</div>
    <div class="KeyF button">f</div>
    <div class="KeyG button">g</div>
    <div class="KeyH button">h</div>
    <div class="KeyJ button">j</div>
    <div class="KeyK button">k</div>
    <div class="KeyL button">l</div>
    <div class="Semicolon button double">:<br>;</div>
    <div class="Quote button double">"<br>'</div>
    <div class="Enter button">&#8629;</div>
  </div>
  <div>
    <div class="ShiftLeft button">&#8679;</div>
    <div class="KeyZ button">z</div>
    <div class="KeyX button">x</div>
    <div class="KeyC button">c</div>
    <div class="KeyV button">v</div>
    <div class="KeyB button">b</div>
    <div class="KeyN button">n</div>
    <div class="KeyM button">m</div>
    <div class="Comma button">,</div>
    <div class="Period button">.</div>
    <div class="Slash button double">?<br>/</div>
    <div class="ShiftRight button">&#8679;</div>
  </div>
  <div>
    <div class="ControlLeft button">Ctrl</div>
    <div class="MetaLeft button">Win</div>
    <div class="AltLeft button">Alt</div>
    <div class="Space button">&nbsp;</div>
    <div class="AltRight button">Alt</div>
    <div class="MetaRight button">Win</div>
    <div class="ControlRight button">Ctrl</div>
    <div class="ArrowLeft button">&#8592;</div>
    <div>
      <div class="ArrowUp button">&#8593;</div>
      <div class="ArrowDown button">&#8595;</div>
    </div>
    <div class="ArrowRight button">&#8594;</div>
  </div>
</div>`;

const russianLayout = `
<div class="container">
  <div>
    <div class="Backquote button">ё</div>
    <div class="Digit1 button double">!<br>1</div>
    <div class="Digit2 button double">"<br>2</div>
    <div class="Digit3 button double">№<br>3</div>
    <div class="Digit4 button double">;<br>4</div>
    <div class="Digit5 button double">%<br>5</div>
    <div class="Digit6 button double">:<br>6</div>
    <div class="Digit7 button double">?<br>7</div>
    <div class="Digit8 button double">*<br>8</div>
    <div class="Digit9 button double">(<br>9</div>
    <div class="Digit0 button double">)<br>0</div>
    <div class="Minus button double">_<br>-</div>
    <div class="Equal button double">+<br>=</div>
    <div class="Backspace button">&#8592;</div>
  </div>
  <div>
    <div class="Tab button">
      &#8633;
    </div>
    <div class="KeyQ button">ц</div>
    <div class="KeyW button">й</div>
    <div class="KeyE button">у</div>
    <div class="KeyR button">к</div>
    <div class="KeyT button">е</div>
    <div class="KeyY button">н</div>
    <div class="KeyU button">г</div>
    <div class="KeyI button">ш</div>
    <div class="KeyO button">щ</div>
    <div class="KeyP button">з</div>
    <div class="BracketLeft button">х</div>
    <div class="BracketRight button">ъ</div>
    <div class="Backslash button double">/<br>\\</div>
  </div>
  <div>
    <div class="CapsLock button">&#8682;</div>
    <div class="KeyA button">ф</div>
    <div class="KeyS button">ы</div>
    <div class="KeyD button">в</div>
    <div class="KeyF button">а</div>
    <div class="KeyG button">п</div>
    <div class="KeyH button">р</div>
    <div class="KeyJ button">о</div>
    <div class="KeyK button">л</div>
    <div class="KeyL button">д</div>
    <div class="Semicolon button">ж</div>
    <div class="Quote button">э</div>
    <div class="Enter button">&#8629;</div>
  </div>
  <div>
    <div class="ShiftLeft button">&#8679;</div>
    <div class="KeyZ button">я</div>
    <div class="KeyX button">ч</div>
    <div class="KeyC button">с</div>
    <div class="KeyV button">м</div>
    <div class="KeyB button">и</div>
    <div class="KeyN button">т</div>
    <div class="KeyM button">ь</div>
    <div class="Comma button">б</div>
    <div class="Period button">ю</div>
    <div class="Slash button double">,<br>.</div>
    <div class="ShiftRight button">&#8679;</div>
  </div>
  <div>
    <div class="ControlLeft button">Ctrl</div>
    <div class="MetaLeft button">Win</div>
    <div class="AltLeft button">Alt</div>
    <div class="Space button">&nbsp;</div>
    <div class="AltRight button">Alt</div>
    <div class="MetaRight button">Win</div>
    <div class="ControlRight button">Ctrl</div>
    <div class="ArrowLeft button">&#8592;</div>
    <div>
      <div class="ArrowUp button">&#8593;</div>
      <div class="ArrowDown button">&#8595;</div>
    </div>
    <div class="ArrowRight button">&#8594;</div>
  </div>
</div>`;

const keyCodesElements = {
  Backquote: '.container > div:first-child > div:first-child',
  Digit1: '.container > div:first-child > div:nth-child(2)',
  Digit2: '.container > div:first-child > div:nth-child(3)',
  Digit3: '.container > div:first-child > div:nth-child(4)',
  Digit4: '.container > div:first-child > div:nth-child(5)',
  Digit5: '.container > div:first-child > div:nth-child(6)',
  Digit6: '.container > div:first-child > div:nth-child(7)',
  Digit7: '.container > div:first-child > div:nth-child(8)',
  Digit8: '.container > div:first-child > div:nth-child(9)',
  Digit9: '.container > div:first-child > div:nth-child(10)',
  Digit0: '.container > div:first-child > div:nth-child(11)',
  Minus: '.container > div:first-child > div:nth-child(12)',
  Equal: '.container > div:first-child > div:nth-child(13)',
  Backspace: '.container > div:first-child > div:nth-child(14)',
  Tab: '.container > div:nth-child(2) > div:first-child',
  KeyQ: '.container > div:nth-child(2) > div:nth-child(2)',
  KeyW: '.container > div:nth-child(2) > div:nth-child(3)',
  KeyE: '.container > div:nth-child(2) > div:nth-child(4)',
  KeyR: '.container > div:nth-child(2) > div:nth-child(5)',
  KeyT: '.container > div:nth-child(2) > div:nth-child(6)',
  KeyY: '.container > div:nth-child(2) > div:nth-child(7)',
  KeyU: '.container > div:nth-child(2) > div:nth-child(8)',
  KeyI: '.container > div:nth-child(2) > div:nth-child(9)',
  KeyO: '.container > div:nth-child(2) > div:nth-child(10)',
  KeyP: '.container > div:nth-child(2) > div:nth-child(11)',
  BracketLeft: '.container > div:nth-child(2) > div:nth-child(12)',
  BracketRight: '.container > div:nth-child(2) > div:nth-child(13)',
  Backslash: '.container > div:nth-child(2) > div:nth-child(14)',
  CapsLock: '.container > div:nth-child(3) > div:first-child',
  KeyA: '.container > div:nth-child(3) > div:nth-child(2)',
  KeyS: '.container > div:nth-child(3) > div:nth-child(3)',
  KeyD: '.container > div:nth-child(3) > div:nth-child(4)',
  KeyF: '.container > div:nth-child(3) > div:nth-child(5)',
  KeyG: '.container > div:nth-child(3) > div:nth-child(6)',
  KeyH: '.container > div:nth-child(3) > div:nth-child(7)',
  KeyJ: '.container > div:nth-child(3) > div:nth-child(8)',
  KeyK: '.container > div:nth-child(3) > div:nth-child(9)',
  KeyL: '.container > div:nth-child(3) > div:nth-child(10)',
  Semicolon: '.container > div:nth-child(3) > div:nth-child(11)',
  Quote: '.container > div:nth-child(3) > div:nth-child(12)',
  Enter: '.container > div:nth-child(3) > div:nth-child(13)',
  ShiftLeft: '.container > div:nth-child(4) > div:first-child',
  KeyZ: '.container > div:nth-child(4) > div:nth-child(2)',
  KeyX: '.container > div:nth-child(4) > div:nth-child(3)',
  KeyC: '.container > div:nth-child(4) > div:nth-child(4)',
  KeyV: '.container > div:nth-child(4) > div:nth-child(5)',
  KeyB: '.container > div:nth-child(4) > div:nth-child(6)',
  KeyN: '.container > div:nth-child(4) > div:nth-child(7)',
  KeyM: '.container > div:nth-child(4) > div:nth-child(8)',
  Comma: '.container > div:nth-child(4) > div:nth-child(9)',
  Period: '.container > div:nth-child(4) > div:nth-child(10)',
  Slash: '.container > div:nth-child(4) > div:nth-child(11)',
  ShiftRight: '.container > div:nth-child(4) > div:nth-child(12)',
  ControlLeft: '.container > div:nth-child(5) > div:first-child',
  MetaLeft: '.container > div:nth-child(5) > div:nth-child(2)',
  AltLeft: '.container > div:nth-child(5) > div:nth-child(3)',
  Space: '.container > div:nth-child(5) > div:nth-child(4)',
  AltRight: '.container > div:nth-child(5) > div:nth-child(5)',
  MetaRight: '.container > div:nth-child(5) > div:nth-child(6)',
  ControlRight: '.container > div:nth-child(5) > div:nth-child(7)',
  ArrowLeft: '.container > div:nth-child(5) > div:nth-child(8)',
  ArrowUp: '.container > div:nth-child(5) > div:nth-child(9) > div:first-child',
  ArrowDown: '.container > div:nth-child(5) > div:nth-child(9) > div:last-child',
  ArrowRight: '.container > div:nth-child(5) > div:nth-child(10)',
};

const keyCodeActionEnglish = {
  Backquote: '`',
  Digit1: '1',
  Digit1Shift: '!',
  Digit2: '2',
  Digit2Shift: '@',
  Digit3: '3',
  Digit3Shift: '#',
  Digit4: '4',
  Digit4Shift: '$',
  Digit5: '5',
  Digit5Shift: '%',
  Digit6: '6',
  Digit6Shift: '^',
  Digit7: '7',
  Digit7Shift: '&',
  Digit8: '8',
  Digit8Shift: '*',
  Digit9: '9',
  Digit9Shift: '(',
  Digit0: '0',
  Digit0Shift: ')',
  Minus: '-',
  MinusShift: '_',
  Equal: '=',
  EqualShift: '+',
  Backspace: '',
  Tab: '  ',
  KeyQ: 'q',
  KeyW: 'w',
  KeyE: 'e',
  KeyR: 'r',
  KeyT: 't',
  KeyY: 'y',
  KeyU: 'u',
  KeyI: 'i',
  KeyO: 'o',
  KeyP: 'p',
  BracketLeft: '[',
  BracketLeftShift: '{',
  BracketRight: ']',
  BracketRightShift: '}',
  Backslash: '\\',
  BackslashShift: '|',
  CapsLock: '',
  KeyA: 'a',
  KeyS: 's',
  KeyD: 'd',
  KeyF: 'f',
  KeyG: 'g',
  KeyH: 'h',
  KeyJ: 'j',
  KeyK: 'k',
  KeyL: 'l',
  Semicolon: ';',
  SemicolonShift: ':',
  Quote: "'",
  QuoteShift: '"',
  Enter: '&#10;',
  ShiftLeft: '',
  KeyZ: 'z',
  KeyX: 'x',
  KeyC: 'c',
  KeyV: 'v',
  KeyB: 'b',
  KeyN: 'n',
  KeyM: 'm',
  Comma: ',',
  CommaShift: '<',
  Period: '.',
  PerioaShift: '>',
  Slash: '/',
  SlashShift: '?',
  ShiftRight: '',
  ControlLeft: '',
  MetaLeft: '',
  AltLeft: '',
  Space: '&#32;',
  AltRight: '',
  MetaRight: '',
  ControlRight: '',
  ArrowLeft: '',
  ArrowUp: '',
  ArrowDown: '',
  ArrowRight: '',
};

const keyCodeActionRussian = {
  Backquote: 'ё',
  Digit1: '1',
  Digit1Shift: '!',
  Digit2: '2',
  Digit2Shift: '"',
  Digit3: '3',
  Digit3Shift: '№',
  Digit4: '4',
  Digit4Shift: ';',
  Digit5: '5',
  Digit5Shift: '%',
  Digit6: '6',
  Digit6Shift: ':',
  Digit7: '7',
  Digit7Shift: '?',
  Digit8: '8',
  Digit8Shift: '*',
  Digit9: '9',
  Digit9Shift: '(',
  Digit0: '0',
  Digit0Shift: ')',
  Minus: '-',
  MinusShift: '_',
  Equal: '=',
  EqualShift: '+',
  Backspace: '',
  Tab: '&ensp;&ensp;',
  KeyQ: 'й',
  KeyW: 'ц',
  KeyE: 'у',
  KeyR: 'к',
  KeyT: 'е',
  KeyY: 'н',
  KeyU: 'г',
  KeyI: 'ш',
  KeyO: 'щ',
  KeyP: 'з',
  BracketLeft: 'х',
  BracketRight: 'ъ',
  Backslash: '\\',
  BackslashShift: '/',
  CapsLock: '',
  KeyA: 'ф',
  KeyS: 'ы',
  KeyD: 'в',
  KeyF: 'а',
  KeyG: 'п',
  KeyH: 'р',
  KeyJ: 'о',
  KeyK: 'л',
  KeyL: 'д',
  Semicolon: 'ж',
  Quote: 'э',
  Enter: '&#10;',
  ShiftLeft: '',
  KeyZ: 'я',
  KeyX: 'ч',
  KeyC: 'с',
  KeyV: 'м',
  KeyB: 'и',
  KeyN: 'т',
  KeyM: 'ь',
  Comma: 'б',
  Period: 'ю',
  Slash: '.',
  SlashShift: ',',
  ShiftRight: '',
  ControlLeft: '',
  MetaLeft: '',
  AltLeft: '',
  Space: '&#32;',
  AltRight: '',
  MetaRight: '',
  ControlRight: '',
  ArrowLeft: '',
  ArrowUp: '',
  ArrowDown: '',
  ArrowRight: '',
};

const storage = window.localStorage;

let currentCodes;

let capslock = false;

function createKeyboardLanguage() {
  if (storage.getItem('language') === null) {
    storage.setItem('language', 'en');
    currentCodes = keyCodeActionEnglish;
  }
}

function loadCurrentKeyboardCodes() {
  if (storage.getItem('language') === 'en') {
    currentCodes = keyCodeActionEnglish;
  } else if (storage.getItem('language') === 'ru') {
    currentCodes = keyCodeActionRussian;
  }
}

function insertHTML() {
  if (storage.getItem('language') === 'en') {
    document.body.insertAdjacentHTML('afterbegin', textareaLayout + keyboardLayout);
    document.getElementById('keyboard').innerHTML = englishLayout;
  }
  if (storage.getItem('language') === 'ru') {
    document.body.insertAdjacentHTML('afterbegin', textareaLayout + keyboardLayout);
    document.getElementById('keyboard').innerHTML = russianLayout;
  }
}

function clickKeyAnimation() {
  document.addEventListener('keydown', (event) => {
    if (event.code in keyCodesElements) {
      document.querySelector(keyCodesElements[event.code]).classList.add('clicked');
    }
  });
  document.addEventListener('keyup', (event) => {
    if (event.code in keyCodesElements) {
      document.querySelector(keyCodesElements[event.code]).classList.remove('clicked');
    }
  });
  window.addEventListener('blur', () => {
    Object.keys(keyCodesElements).forEach((value) => {
      document.querySelector(keyCodesElements[value]).classList.remove('clicked');
    });
  });
}

function runOnKeys(func, ...codes) {
  const pressed = new Set();

  document.addEventListener('keydown', (event) => {
    pressed.add(event.code);

    if (pressed.has(...codes)) {
      pressed.clear();
      func();
    }
  });

  document.addEventListener('keyup', (event) => {
    pressed.delete(event.code);
  });
}

function changeLanguage() {
  function changeToRussian() {
    storage.setItem('language', 'ru');
    currentCodes = keyCodeActionRussian;
    document.getElementById('keyboard').innerHTML = russianLayout;
  }

  function changeToEnglish() {
    storage.setItem('language', 'en');
    currentCodes = keyCodeActionEnglish;
    document.getElementById('keyboard').innerHTML = englishLayout;
  }

  if (storage.getItem('language') === 'en') {
    changeToRussian();
    return;
  }
  if (storage.getItem('language') === 'ru') {
    changeToEnglish();
  }
}

function isLetter(sign) {
  if (storage.getItem('language') === 'en') {
    return /[a-z]/i.test(sign);
  }
  if (storage.getItem('language') === 'ru') {
    return /[а-яё]/i.test(sign);
  }
  return false;
}

function pasteSymbolToTextarea() {
  document.addEventListener('keydown', (ev) => {
    const field = document.getElementById('textfield');
    if (ev.code === 'Backspace') {
      field.textContent = document.getElementById('textfield').textContent.slice(0, -1);
    } else if (ev.code in currentCodes && capslock === true && isLetter(currentCodes[ev.code])) {
      field.textContent += currentCodes[ev.code].toUpperCase();
    } else if (ev.code in currentCodes) {
      field.innerHTML += currentCodes[ev.code];
    }
  });
}

function makeUppercase() {
  const elements = '.container > div:first-child > div:first-child, .container > div:nth-child(2) > div, .container > div:nth-child(3) > div, .container > div:nth-child(4) > div';

  function makeBigKeyboard() {
    document.querySelectorAll(elements).forEach((elem) => {
      elem.classList.add('uppercase');
    });
  }

  function makeSmallKeyboard() {
    document.querySelectorAll(elements).forEach((elem) => {
      elem.classList.remove('uppercase');
    });
  }

  function makeCapslock() {
    document.addEventListener('keydown', (event) => {
      if (event.code === 'CapsLock' && capslock === false) {
        capslock = true;
        makeBigKeyboard();
      } else if (event.code === 'CapsLock' && capslock === true) {
        capslock = false;
        makeSmallKeyboard();
      }
    });
  }

  function makeShift() {
    document.addEventListener('keydown', (event) => {
      if (event.code === 'ShiftLeft') {
        capslock = true;
        makeBigKeyboard();
      }
    });
    document.addEventListener('keyup', (event) => {
      if (event.code === 'ShiftLeft') {
        capslock = false;
        makeSmallKeyboard();
      }
    });
  }

  makeCapslock();
  makeShift();
}

function clickByMouse() {
  function pasteSymbol(value) {
    const field = document.getElementById('textfield');
    if (value === 'Backspace') {
      field.textContent = document.getElementById('textfield').textContent.slice(0, -1);
    } else if (value in currentCodes && capslock === true && isLetter(currentCodes[value])) {
      field.document.getElementById('textfield').textContent += currentCodes[value].toUpperCase();
    } else if (value in currentCodes) {
      field.document.getElementById('textfield').innerHTML += currentCodes[value];
    }
  }

  let clicked;
  document.getElementById('keyboard').addEventListener('mousedown', (event) => {
    clicked = event.target;
    if (clicked.classList.contains('button')) {
      currentCodes.forEach((value) => {
        if (clicked.classList.contains(value)) {
          pasteSymbol(value);
          clicked.classList.add('clicked');
        }
      });
    }
  });
  document.getElementById('keyboard').addEventListener('mouseup', () => {
    clicked.classList.remove('clicked');
  });
}

window.onload = () => {
  createKeyboardLanguage();
  insertHTML();
  loadCurrentKeyboardCodes();

  runOnKeys(changeLanguage, 'AltLeft', 'ShiftLeft');
  clickKeyAnimation();

  pasteSymbolToTextarea();

  makeUppercase();
  clickByMouse();
};
