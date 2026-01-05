window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("loader").style.display = "none";
    document.querySelector(".dashboard").classList.remove("hidden");
  }, 1200);
});
