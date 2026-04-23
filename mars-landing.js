const galleryImages = [...document.querySelectorAll(".photo-gallery img")];
const lightbox = document.querySelector("#photoLightbox");
const lightboxImage = document.querySelector("#lightboxImage");
const lightboxClose = document.querySelector("#lightboxClose");
const lightboxPrevious = document.querySelector("#lightboxPrevious");
const lightboxNext = document.querySelector("#lightboxNext");
const lightboxCounter = document.querySelector("#lightboxCounter");

let activePhotoIndex = 0;

function showPhoto(index) {
  activePhotoIndex = (index + galleryImages.length) % galleryImages.length;
  const image = galleryImages[activePhotoIndex];
  lightboxImage.src = image.src;
  lightboxImage.alt = image.alt;
  lightboxCounter.textContent = `${activePhotoIndex + 1} / ${galleryImages.length}`;
}

function openLightbox(index) {
  showPhoto(index);
  lightbox.hidden = false;
  document.body.classList.add("lightbox-open");
  lightboxClose.focus();
}

function closeLightbox() {
  lightbox.hidden = true;
  lightboxImage.src = "";
  document.body.classList.remove("lightbox-open");
}

galleryImages.forEach((image, index) => {
  image.addEventListener("click", () => openLightbox(index));
});

lightboxClose.addEventListener("click", closeLightbox);
lightboxPrevious.addEventListener("click", () => showPhoto(activePhotoIndex - 1));
lightboxNext.addEventListener("click", () => showPhoto(activePhotoIndex + 1));

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) closeLightbox();
});

window.addEventListener("keydown", (event) => {
  if (lightbox.hidden) return;

  if (event.key === "Escape") closeLightbox();
  if (event.key === "ArrowLeft") showPhoto(activePhotoIndex - 1);
  if (event.key === "ArrowRight") showPhoto(activePhotoIndex + 1);
});
