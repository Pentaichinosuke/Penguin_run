// main.js - terms modal logic
(function () {
  const overlay = document.getElementById('terms-overlay');
  const agreedKey = 'termsAccepted_v1';

  function hideModal() {
    if (overlay) overlay.style.display = 'none';
    document.body.classList.remove('locked');
  }

  function showModal() {
    if (overlay) overlay.style.display = 'flex';
    document.body.classList.add('locked');
  }

  // 同意ボタンから呼ばれる関数
  window.agreeTerms = function () {
    localStorage.setItem(agreedKey, 'true'); // ← ★必須
    hideModal();
  };

  document.addEventListener('DOMContentLoaded', function () {
    if (!overlay) return;

    if (localStorage.getItem(agreedKey) === 'true') {
      hideModal();
    } else {
      showModal();
    }
  });
})();


// image viewer
document.addEventListener("DOMContentLoaded", () => {
  const viewer = document.getElementById("image-viewer");
  const viewerImg = document.getElementById("viewer-img");

  if (!viewer || !viewerImg) return;

  document.querySelectorAll(".gallery img").forEach(img => {
    img.addEventListener("click", () => {
      viewerImg.src = img.src;
      viewer.style.display = "flex";
    });
  });

  viewer.addEventListener("click", () => {
    viewer.style.display = "none";
  });
});
