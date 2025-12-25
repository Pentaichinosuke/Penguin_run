// main.js
document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     利用規約モーダル
  ========================= */
  const overlay = document.getElementById("terms-overlay");

  if (overlay) {

    // localStorage から同意期限を取得
    const acceptedUntil = localStorage.getItem("termsAcceptedUntil");
    const now = new Date();

    if (!acceptedUntil || now > new Date(acceptedUntil)) {
      // 同意していない、または期限切れ → モーダル表示
      overlay.style.display = "flex";
      document.body.classList.add("locked");
    }

    // 同意ボタン用関数
    window.agreeTerms = function () {
      overlay.style.display = "none";
      document.body.classList.remove("locked");

      // 24時間後まで同意済みとして保存
      const expire = new Date(now.getTime() + 24 * 60 * 60 * 1000);
      localStorage.setItem("termsAcceptedUntil", expire);
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

      // 画像のタイトルも表示したい場合
      const caption = img.alt;
      viewer.querySelector(".caption")?.remove(); // 前のキャプション削除
      const capDiv = document.createElement("div");
      capDiv.className = "caption";
      capDiv.textContent = caption;
      capDiv.style.color = "white";
      capDiv.style.marginTop = "10px";
      capDiv.style.textAlign = "center";
      viewer.appendChild(capDiv);

      viewer.style.display = "flex";
    });
  });

  viewer.addEventListener("click", () => {
    viewer.style.display = "none";
  });
}

