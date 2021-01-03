let portret = document.querySelectorAll(".portrait");
let parentPortret = document.querySelector(".wrap-stn__3");
parentPortret.addEventListener("mousemove", function (e) {
   let target = e.target;
   if (target) {
      if (target.closest('.portrait')) {
         portret.forEach((item, i) => {
            if (target.closest('.portrait') === item) {
               let a = e.offsetX;
               let b = e.offsetY;
               let c = item.offsetWidth;
               let d = item.offsetHeight;
               let x = a / c;
               let y = b / d;
               let move_x = x > 0.5 ? "10px" : "-10px";
               let move_y = y > 0.5 ? "10px" : "-10px";
               portret[i].style.setProperty("--translate-x", move_x);
               portret[i].style.setProperty("--translate-y", move_y);
            }
         })
      }
   }
})
