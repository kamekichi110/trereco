document.addEventListener("DOMContentLoaded", () => {
  const bootMessages = [
    "ZUN(C) TOHO-DOS(C) Version 5.0.0",
    "Copyright (c) TOBU8 2024.",
    "",
    "C:\\>boot Z:",
    "Z:\\> Loading TOHO-DOS...",
    "Z:\\> Initializing...",
    "Z:\\> Ready.",
    "Z:\\> TOHO.BAT",
  ];

  const mainMessages = [
    "Welcome to TOHO-DOS!",
    "This web site is Touhou old games emulator.",
    "The games included on this site are as follows.",
    "-------------------------------------------",
    
    "<p>:> <a href='./TH2/'>TH2.BAT</a>(PC and mobile supported.)</p>",
    "<p>:> <a href='./TH3/'>TH3.BAT</a>(PC and mobile supported.)</p>",
    "<p>:> <a href='./TH4/'>TH4.BAT</a>(PC and mobile supported.)</p>",
    "<p>:> <a href='./TH5/'>TH5.BAT</a>(PC and mobile supported.)</p>",
    "-------------------------------------------",
    "全画面表示ボタン「FullScreen[4:3]」または<br>「FullScreen[16:9]」を押してプレイしてください。<br>コントローラーが表示されます。"
  ];

  const bootElement = document.getElementById("bootText");
  const cmdElement = document.getElementById("cmdText");
  let messageIndex = 0;
  let charIndex = 0;
  const typingSpeed = 2
  let memoryCheckComplete = false;
  let memoryAmount = 0;
  const maxMemory = 64000;

  function typeBootMessage() {
    if (!memoryCheckComplete) {
      performMemoryCheck();
    } else if (messageIndex < bootMessages.length) {
      const currentMessage = bootMessages[messageIndex];
      if (charIndex < currentMessage.length) {
        bootElement.innerHTML += currentMessage[charIndex];
        charIndex++;
        setTimeout(typeBootMessage, typingSpeed);
      } else {
        bootElement.innerHTML += "<br>";
        messageIndex++;
        charIndex = 0;
        setTimeout(typeBootMessage, typingSpeed);
      }
    } else {
      // ブートメッセージが終わったらメインコンテンツ表示
      messageIndex = 0;
      charIndex = 0;
      displayMainContent();
    }
  }

  function performMemoryCheck() {
    if (memoryAmount < maxMemory) {
      bootElement.innerHTML = `Memory Test : ${memoryAmount} KB OK<br>`;
      memoryAmount += 1024;
      setTimeout(performMemoryCheck, 50);
    } else {
      bootElement.innerHTML += `Memory Test : ${maxMemory} KB OK<br>`;
      memoryCheckComplete = true;
      setTimeout(typeBootMessage, typingSpeed);
    }
  }

  function displayMainContent() {
    document.getElementById("cmd").style.display = "block";
    typeMainMessage();
  }

  function typeMainMessage() {
    if (messageIndex < mainMessages.length) {
      const currentMessage = mainMessages[messageIndex];
      if (charIndex < currentMessage.length) {
        // HTMLタグをそのまま表示するために、正規表現を使ってチェック
        if (currentMessage.slice(charIndex).startsWith("<p")) {
          const endIdx = currentMessage.indexOf("</p>", charIndex) + 4;
          cmdElement.innerHTML += currentMessage.slice(charIndex, endIdx);
          charIndex = endIdx;
        } else {
          cmdElement.innerHTML += currentMessage[charIndex];
          charIndex++;
        }
        setTimeout(typeMainMessage, typingSpeed);
      } else {
        cmdElement.innerHTML += "<br>";
        messageIndex++;
        charIndex = 0;
        setTimeout(typeMainMessage, typingSpeed);
      }
    }
  }

  document.getElementById("cmd").style.display = "none";

  // タイピングエフェクト開始
  typeBootMessage();
});
