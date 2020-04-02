'use strict';

let textareaLayout = `<div class="textarea-wrap">
<textarea name="textfield" id="textfield" readonly>
</textarea>
</div>`;

let keyboardLayout = `<div class="keyboard" id="keyboard"></div>`;

let englishLayout = `
<div class="container">
  <div>
    <div class="double">~<br>\`</div>
    <div class="double">!<br>1</div>
    <div class="double">@<br>2</div>
    <div class="double">#<br>3</div>
    <div class="double">$<br>4</div>
    <div class="double">%<br>5</div>
    <div class="double">^<br>6</div>
    <div class="double">&<br>7</div>
    <div class="double">*<br>8</div>
    <div class="double">(<br>9</div>
    <div class="double">)<br>0</div>
    <div class="double">_<br>-</div>
    <div class="double">+<br>=</div>
    <div>&#8592;</div>
  </div>
  <div>
    <div>
      &#8633;
    </div>
    <div>q</div>
    <div>w</div>
    <div>e</div>
    <div>r</div>
    <div>t</div>
    <div>y</div>
    <div>u</div>
    <div>i</div>
    <div>o</div>
    <div>p</div>
    <div class="double">{<br>[</div>
    <div class="double">}<br>]</div>
    <div class="double">|<br>\</div>
  </div>
  <div>
    <div>&#8682;</div>
    <div>a</div>
    <div>s</div>
    <div>d</div>
    <div>f</div>
    <div>g</div>
    <div>h</div>
    <div>j</div>
    <div>k</div>
    <div>l</div>
    <div class="double">:<br>;</div>
    <div class="double">"<br>'</div>
    <div>&#8629;</div>
  </div>
  <div>
    <div>&#8679;</div>
    <div>z</div>
    <div>x</div>
    <div>c</div>
    <div>v</div>
    <div>b</div>
    <div>n</div>
    <div>m</div>
    <div>,</div>
    <div>.</div>
    <div class="double">?<br>/</div>
    <div>&#8679;</div>
  </div>
  <div>
    <div>Ctrl</div>
    <div>Win</div>
    <div>Alt</div>
    <div>&nbsp;</div>
    <div>Alt</div>
    <div>Win</div>
    <div>Ctrl</div>
    <div>&#8592;</div>
    <div>
      <div>&#8593;</div>
      <div>&#8595;</div>
    </div>
    <div>&#8594;</div>
  </div>
</div>`;

let russianLayout = `
<div class="container">
  <div>
    <div>ё</div>
    <div class="double">!<br>1</div>
    <div class="double">"<br>2</div>
    <div class="double">№<br>3</div>
    <div class="double">;<br>4</div>
    <div class="double">%<br>5</div>
    <div class="double">:<br>6</div>
    <div class="double">?<br>7</div>
    <div class="double">*<br>8</div>
    <div class="double">(<br>9</div>
    <div class="double">)<br>0</div>
    <div class="double">_<br>-</div>
    <div class="double">+<br>=</div>
    <div>&#8592;</div>
  </div>
  <div>
    <div>
      &#8633;
    </div>
    <div>й</div>
    <div>ц</div>
    <div>у</div>
    <div>к</div>
    <div>е</div>
    <div>н</div>
    <div>г</div>
    <div>ш</div>
    <div>щ</div>
    <div>з</div>
    <div>х</div>
    <div>ъ</div>
    <div class="double">/<br>\\</div>
  </div>
  <div>
    <div>&#8682;</div>
    <div>ф</div>
    <div>ы</div>
    <div>в</div>
    <div>а</div>
    <div>п</div>
    <div>р</div>
    <div>о</div>
    <div>л</div>
    <div>д</div>
    <div>ж</div>
    <div>э</div>
    <div>&#8629;</div>
  </div>
  <div>
    <div>&#8679;</div>
    <div>я</div>
    <div>ч</div>
    <div>с</div>
    <div>м</div>
    <div>и</div>
    <div>т</div>
    <div>ь</div>
    <div>б</div>
    <div>ю</div>
    <div class="double">,<br>.</div>
    <div>&#8679;</div>
  </div>
  <div>
    <div>Ctrl</div>
    <div>Win</div>
    <div>Alt</div>
    <div>&nbsp;</div>
    <div>Alt</div>
    <div>Win</div>
    <div>Ctrl</div>
    <div>&#8592;</div>
    <div>
      <div>&#8593;</div>
      <div>&#8595;</div>
    </div>
    <div>&#8594;</div>
  </div>
</div>`;

let keyCodesElements = {
  "Backquote":".container > div:first-child > div:first-child",
  "Digit1": ".container > div:first-child > div:nth-child(2)",
  "Digit2": ".container > div:first-child > div:nth-child(3)",
  "Digit3": ".container > div:first-child > div:nth-child(4)",
  "Digit4": ".container > div:first-child > div:nth-child(5)",
  "Digit5": ".container > div:first-child > div:nth-child(6)",
  "Digit6": ".container > div:first-child > div:nth-child(7)",
  "Digit7": ".container > div:first-child > div:nth-child(8)",
  "Digit8": ".container > div:first-child > div:nth-child(9)",
  "Digit9": ".container > div:first-child > div:nth-child(10)",
  "Digit0": ".container > div:first-child > div:nth-child(11)",
  "Minus": ".container > div:first-child > div:nth-child(12)",
  "Equal": ".container > div:first-child > div:nth-child(13)",
  "Backspace": ".container > div:first-child > div:nth-child(14)",
  "Tab": ".container > div:nth-child(2) > div:first-child",
  "KeyQ": ".container > div:nth-child(2) > div:nth-child(2)",
  "KeyW": ".container > div:nth-child(2) > div:nth-child(3)",
  "KeyE": ".container > div:nth-child(2) > div:nth-child(4)",
  "KeyR": ".container > div:nth-child(2) > div:nth-child(5)",
  "KeyT": ".container > div:nth-child(2) > div:nth-child(6)",
  "KeyY": ".container > div:nth-child(2) > div:nth-child(7)",
  "KeyU": ".container > div:nth-child(2) > div:nth-child(8)",
  "KeyI": ".container > div:nth-child(2) > div:nth-child(9)",
  "KeyO": ".container > div:nth-child(2) > div:nth-child(10)",
  "KeyP": ".container > div:nth-child(2) > div:nth-child(11)",
  "BracketLeft": ".container > div:nth-child(2) > div:nth-child(12)",
  "BracketRight": ".container > div:nth-child(2) > div:nth-child(13)",
  "Backslash": ".container > div:nth-child(2) > div:nth-child(14)",
  "CapsLock": ".container > div:nth-child(3) > div:first-child",
  "KeyA": ".container > div:nth-child(3) > div:nth-child(2)",
  "KeyS": ".container > div:nth-child(3) > div:nth-child(3)",
  "KeyD": ".container > div:nth-child(3) > div:nth-child(4)",
  "KeyF": ".container > div:nth-child(3) > div:nth-child(5)",
  "KeyG": ".container > div:nth-child(3) > div:nth-child(6)",
  "KeyH": ".container > div:nth-child(3) > div:nth-child(7)",
  "KeyJ": ".container > div:nth-child(3) > div:nth-child(8)",
  "KeyK": ".container > div:nth-child(3) > div:nth-child(9)",
  "KeyL": ".container > div:nth-child(3) > div:nth-child(10)",
  "Semicolon": ".container > div:nth-child(3) > div:nth-child(11)",
  "Quote": ".container > div:nth-child(3) > div:nth-child(12)",
  "Enter": ".container > div:nth-child(3) > div:nth-child(13)",
  "ShiftLeft": ".container > div:nth-child(4) > div:first-child",
  "KeyZ": ".container > div:nth-child(4) > div:nth-child(2)",
  "KeyX": ".container > div:nth-child(4) > div:nth-child(3)",
  "KeyC": ".container > div:nth-child(4) > div:nth-child(4)",
  "KeyV": ".container > div:nth-child(4) > div:nth-child(5)",
  "KeyB": ".container > div:nth-child(4) > div:nth-child(6)",
  "KeyN": ".container > div:nth-child(4) > div:nth-child(7)",
  "KeyM": ".container > div:nth-child(4) > div:nth-child(8)",
  "Comma": ".container > div:nth-child(4) > div:nth-child(9)",
  "Period": ".container > div:nth-child(4) > div:nth-child(10)",
  "Slash": ".container > div:nth-child(4) > div:nth-child(11)",
  "ShiftRight": ".container > div:nth-child(4) > div:nth-child(12)",
  "ControlLeft": ".container > div:nth-child(5) > div:first-child",
  "MetaLeft": ".container > div:nth-child(5) > div:nth-child(2)",
  "AltLeft": ".container > div:nth-child(5) > div:nth-child(3)",
  "Space": ".container > div:nth-child(5) > div:nth-child(4)",
  "AltRight": ".container > div:nth-child(5) > div:nth-child(5)",
  "MetaRight": ".container > div:nth-child(5) > div:nth-child(6)",
  "ControlRight": ".container > div:nth-child(5) > div:nth-child(7)",
  "ArrowLeft": ".container > div:nth-child(5) > div:nth-child(8)",
  "ArrowUp": ".container > div:nth-child(5) > div:nth-child(9) > div:first-child",
  "ArrowDown": ".container > div:nth-child(5) > div:nth-child(9) > div:last-child",
  "ArrowRight": ".container > div:nth-child(5) > div:nth-child(10)",
};

let storage = window.localStorage;

function createKeyboardLanguage() {
  if (storage.getItem("language") === null) storage.setItem("language", "en");
}

function insertHTML() {
  if (storage.getItem("language") === "en") {
    document.body.insertAdjacentHTML("afterbegin", textareaLayout + keyboardLayout);
    document.getElementById("keyboard").innerHTML = englishLayout;
  }
  if (storage.getItem("language") === "ru") {
    document.body.insertAdjacentHTML("afterbegin", textareaLayout + keyboardLayout);
    document.getElementById("keyboard").innerHTML = russianLayout;
  }
}

function clickKeyAnimation(key, element) {
  document.addEventListener("keydown", (event) => {
    if (event.code === key) {
      document.querySelector(element).classList.add("clicked");
    }
  });
  document.addEventListener("keyup", (event) => {
    if (event.code === key) {
      document.querySelector(element).classList.remove("clicked");
    }
    });
  document.addEventListener("visibilitychange", () => {
    document.querySelector(element).classList.remove("clicked");
  });
}

function clickKeyAnimationForEachButton() {
  for (let value in keyCodesElements) {
    clickKeyAnimation(value, keyCodesElements[value])
  }
}

function runOnKeys(func, ...codes) {
  let pressed = new Set();

  document.addEventListener('keydown', function(event) {
    pressed.add(event.code);

    for (let code of codes) {
      if (!pressed.has(code)) {
        return;
      }
    }

    pressed.clear();

    func();
  });

  document.addEventListener('keyup', function(event) {
    pressed.delete(event.code);
  });

}

function changeLanguage() {
  function changeToRussian() {
    storage.setItem("language", "ru");
    document.getElementById("keyboard").innerHTML = russianLayout;
  }
  function changeToEnglish() {
    storage.setItem("language", "en");
    document.getElementById("keyboard").innerHTML = englishLayout;
  }

  if (storage.getItem("language") === "en") {
    changeToRussian();
    return;
  }
  if (storage.getItem("language") === "ru") {
    changeToEnglish();
    return;
  }

}

window.onload = function() {

  createKeyboardLanguage()
  insertHTML()

  runOnKeys(changeLanguage, "AltLeft", "ShiftLeft")
  clickKeyAnimationForEachButton()

}
