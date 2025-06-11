(function () {
  // 🔐 Full keyboard block
  ['keydown', 'keypress', 'keyup'].forEach(function (evt) {
    document.addEventListener(evt, function (e) {
      e.preventDefault();
    }, true);
  });

  // 🖱️ Right-click block
  document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
  });

  // 📸 Screenshot protection (blur effect on PrintScreen)
  window.addEventListener('keyup', function (e) {
    if (e.key === 'PrintScreen') {
      document.body.style.filter = 'blur(10px)';
      setTimeout(function () {
        document.body.style.filter = 'none';
      }, 3000);
    }
  });

  // 🖼️ Drag/Drop/Image protection
  document.addEventListener('dragstart', function (e) {
    e.preventDefault();
  });
  document.addEventListener('selectstart', function (e) {
    e.preventDefault();
  });

  // 🔎 DevTools detection
  function detectDevTools() {
    const threshold = 160;
    setInterval(function () {
      const widthThreshold = window.outerWidth - window.innerWidth > threshold;
      const heightThreshold = window.outerHeight - window.innerHeight > threshold;
      if (widthThreshold || heightThreshold) {
        document.documentElement.requestFullscreen().catch(() => {});
        alert("⚠️ ডেভটুলস চালু করা নিষেধ!");
      }
    }, 1500);
  }

  detectDevTools();

  // ✅ Typing animation (optional)
  var titleText = "🚫 সাইটটি সুরক্ষিত!";
  var i = 0;
  function typeTitle() {
    if (i < titleText.length) {
      document.title = titleText.substring(0, i + 1);
      i++;
      setTimeout(typeTitle, 200);
    }
  }
  typeTitle();
})();
