// main.js
document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     利用規約モーダル
  ========================= */
  const overlay = document.getElementById("terms-overlay");

  if (overlay) {
    // 初期表示（毎回表示）
    overlay.style.display = "flex";
    document.body.classList.add("locked");

    // 同意ボタン用関数
    window.agreeTerms = function () {
      overlay.style.display = "none";
      document.body.classList.remove("locked");
    };
  }

  /* =========================
     画像拡大ビュー
  ========================= */
  const viewer = document.getElementById("image-viewer");
  const viewerImg = document.getElementById("viewer-img");

  if (viewer && viewerImg) {
    document.querySelectorAll(".gallery img").forEach(img => {
      img.addEventListener("click", () => {
        viewerImg.src = img.src;
        viewer.style.display = "flex";
      });
    });

    viewer.addEventListener("click", () => {
      viewer.style.display = "none";
    });
  }

});
