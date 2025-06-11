<script>
(function(){
  let originalContent = '';
  let warningShown = false;

  function showWarningScreen() {
    if (warningShown) return;
    warningShown = true;

    // Save original content
    originalContent = document.body.innerHTML;

    // Style inject
    const style = document.createElement('style');
    style.id = 'visibility-style';
    style.innerHTML = `
      body {
        margin: 0;
        padding: 0;
        background-color: black;
        color: red;
        font-family: 'SolaimanLipi', sans-serif;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        text-align: center;
        font-size: 2.5rem;
        font-weight: bold;
        animation: blinkText 1s infinite alternate;
        overflow: hidden;
      }
      @keyframes blinkText {
        0% { color: red; background-color: black; }
        50% { color: yellow; background-color: #111; }
        100% { color: red; background-color: black; }
      }
    `;
    document.head.appendChild(style);

    // Replace content
    document.body.innerHTML = `
      ⚠️ সতর্কতা!<br>
      আপনি ট্যাবটি সরিয়েছেন বা মিনিমাইজ করেছেন।<br>
      অনুগ্রহ করে আবার পেজে ফিরে আসুন।
    `;
  }

  function restoreOriginalContent() {
    if (!warningShown) return;
    warningShown = false;

    // Restore previous content
    document.body.innerHTML = originalContent;

    // Remove style
    const style = document.getElementById('visibility-style');
    if (style) style.remove();
  }

  // Listen to tab visibility change
  document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
      showWarningScreen();
    } else {
      restoreOriginalContent();
    }
  });
})();
</script>
