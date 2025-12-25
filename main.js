// main.js - terms modal logic
(function(){
  const overlay = document.getElementById('terms-overlay');
  const agreedKey = 'termsAccepted_v1'; // バージョン管理可能
  function hideModal() {
    if (overlay) overlay.style.display = 'none';
    document.body.classList.remove('locked');
  }
  function showModal() {
    if (overlay) overlay.style.display = 'flex';
    document.body.classList.add('locked');
  }
  window.agreeTerms = function() {
    //localStorage.setItem(agreedKey, 'true');
    hideModal();
  };
  // 初期表示判定
  document.addEventListener('DOMContentLoaded', function(){
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
