if (localStorage.getItem("email")===null) {
        document.getElementById('email').textContent = sessionStorage.getItem("email");
      }else {
        document.getElementById('email').textContent = localStorage.getItem("email");
      }
$(document).on("click", "#salir", function () {
      alert("storage limpio")
      localStorage.removeItem("email");
      sessionStorage.removeItem("email");
});
