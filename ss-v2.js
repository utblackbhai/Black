(function () {
  // ⏳ Splash Screen
  var splash = document.createElement("div");
  splash.id = "splash-protection";
  splash.innerHTML = "<div class='splash-text'>🚫 সাইটটি সুরক্ষিত</div>";
  splash.style.cssText = `
    position:fixed;top:0;left:0;width:100%;height:100%;
    background:#000;z-index:99999;display:flex;
    align-items:center;justify-content:center;
    color:#fff;font-size:24px;font-family:kalpurush,siyamrupali,sans-serif;
    animation: fadeIn 0.5s ease-in-out
  `;
  document.body.appendChild(splash);
  setTimeout(function () {
    splash.remove();
    if (window.dataLayer) {
      window.dataLayer.push({ event: "protection_started" });
    }
  }, 1000);

  // ⛔ Keyboard Block
  ['keydown', 'keypress', 'keyup'].forEach(function (evt) {
    document.addEventListener(evt, function (e) {
      e.preventDefault();
    }, true);
  });

  // 🖱️ Right-click Block
  document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
  });

  // 📸 Screenshot Block (blur effect)
  window.addEventListener('keyup', function (e) {
    if (e.key === 'PrintScreen') {
      document.body.style.filter = 'blur(10px)';
      setTimeout(function () {
        document.body.style.filter = 'none';
      }, 3000);
    }
  });

  // 📷 Image drag/select/copy Block
  ['dragstart', 'selectstart'].forEach(function (evt) {
    document.addEventListener(evt, function (e) {
      e.preventDefault();
    });
  });

  // 🛠️ DevTools Detection
  function detectDevTools() {
    const threshold = 160;
    setInterval(function () {
      if (
        window.outerWidth - window.innerWidth > threshold ||
        window.outerHeight - window.innerHeight > threshold
      ) {
        document.documentElement.requestFullscreen().catch(() => {});
        alert("⚠️ ডেভটুলস চালু করা নিষেধ!");
      }
    }, 1500);
  }

  detectDevTools();

})();
