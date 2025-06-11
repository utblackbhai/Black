(function () {
  var blurApplied = false;
  var devToolsOpen = false;

  // ========== Typing Animation ==========
  var typingWarning = "⚠️ আপনি অন্য ট্যাবে চলে গেছেন অথবা মিনি-মাইজ করেছেন! দয়া করে আবার পূর্ণ স্ক্রিনে ফিরে আসুন...";

  function showTypingAlert() {
    var overlay = document.createElement('div');
    overlay.id = 'minimize-warning-overlay';
    overlay.style = "position:fixed;top:0;left:0;width:100%;height:100%;z-index:999999;background:radial-gradient(#000000, #111111);display:flex;justify-content:center;align-items:center;flex-direction:column;color:white;font-family:'Noto Sans Bengali', sans-serif;text-align:center;padding:20px;";

    var textContainer = document.createElement('div');
    textContainer.id = 'typing-text';
    textContainer.style = "font-size:22px;white-space:pre-wrap;max-width:90%;animation: blink 1s step-start 0s infinite;";

    overlay.appendChild(textContainer);
    document.body.appendChild(overlay);

    var i = 0;
    function typeChar() {
      if (i < typingWarning.length) {
        textContainer.textContent += typingWarning.charAt(i);
        i++;
        setTimeout(typeChar, 60);
      }
    }
    typeChar();
  }

  function removeTypingAlert() {
    var overlay = document.getElementById('minimize-warning-overlay');
    if (overlay) overlay.remove();
  }

  document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
      showTypingAlert();
    } else {
      removeTypingAlert();
    }
  });

  // ========== DevTools Detection ==========
  var threshold = 160;
  setInterval(function () {
    var widthThreshold = window.outerWidth - window.innerWidth > threshold;
    var heightThreshold = window.outerHeight - window.innerHeight > threshold;
    if ((widthThreshold || heightThreshold) && !devToolsOpen) {
      devToolsOpen = true;
      var div = document.createElement('div');
      div.style = "position:fixed;top:0;left:0;width:100%;height:100%;background:black;z-index:999999;display:flex;justify-content:center;align-items:center;color:red;font-size:24px;font-family:'Noto Sans Bengali', sans-serif;text-align:center;";
      div.innerHTML = "⚠️ অনুগ্রহ করে DevTools বন্ধ করুন। এটি নিষিদ্ধ!";
      document.body.innerHTML = '';
      document.body.appendChild(div);
    }
  }, 1000);

  // ========== Screenshot Blur ==========
  window.addEventListener('keyup', function (e) {
    if (e.key === 'PrintScreen') {
      if (!blurApplied) {
        document.body.style.filter = "blur(20px)";
        blurApplied = true;
        setTimeout(function () {
          document.body.style.filter = "";
          blurApplied = false;
        }, 5000);
      }
    }
  });

})();
