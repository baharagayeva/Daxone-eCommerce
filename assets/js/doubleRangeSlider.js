var slider = document.getElementById("slider");
        var thumb1 = document.getElementById("thumb1");
        var thumb2 = document.getElementById("thumb2");
    
        var range = slider.querySelector(".range");
        var min = 0;
        var max = 100;
        var thumbWidth = thumb1.offsetWidth;
    
        // Initial positions of the thumbs
        var thumb1Pos = 20;
        var thumb2Pos = 80;
    
        // Set initial positions
        thumb1.style.left = thumb1Pos + "%";
        thumb2.style.left = thumb2Pos + "%";
        range.style.left = thumb1Pos + "%";
        range.style.width = (thumb2Pos - thumb1Pos) + "%";
    
        // Event listeners for dragging the thumbs
        thumb1.addEventListener("mousedown", startDrag);
        thumb2.addEventListener("mousedown", startDrag);
    
        function startDrag(event) {
          var thumb = event.target;
          var startX = event.clientX;
    
          document.addEventListener("mousemove", drag);
          document.addEventListener("mouseup", stopDrag);
    
          function drag(event) {
            var newX = event.clientX - slider.getBoundingClientRect().left;
            var minPos = 0;
            var maxPos = slider.offsetWidth - thumbWidth;
    
            if (thumb === thumb1) {
              newX = Math.min(newX, thumb2Pos - thumbWidth);
              newX = Math.max(newX, minPos);
              thumb1Pos = (newX / slider.offsetWidth) * 100;
              thumb.style.left = thumb1Pos + "%";
              range.style.left = thumb1Pos + "%";
              range.style.width = (thumb2Pos - thumb1Pos) + "%";
            } else if (thumb === thumb2) {
              newX = Math.max(newX, thumb1Pos + thumbWidth);
              newX = Math.min(newX, maxPos);
              thumb2Pos = (newX / slider.offsetWidth) * 100;
              thumb.style.left = thumb2Pos + "%";
              range.style.width = (thumb2Pos - thumb1Pos) + "%";
            }
          }
    
          function stopDrag() {
            document.removeEventListener("mousemove", drag);
            document.removeEventListener("mouseup", stopDrag);
          }
        }