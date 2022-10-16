window.onscroll = function () { scrollFunction() };
function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("Hero").style.transform = "scale(1.2)";
  } else {
      document.getElementById("Hero").style.transform = "scale(1)";
  }
}