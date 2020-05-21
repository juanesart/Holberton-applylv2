document.addEventListener("DOMContentLoaded", function(event) {
    var thumbnailElement = document.getElementById("smart_thumbnail");
    thumbnailElement.addEventListener("click", function() {
        if(thumbnailElement.className==""){
            thumbnailElement.className="small";
        }
            else{
                thumbnailElement.className="";
            }

        ;
      });
      var thumbnailElement2 = document.getElementById("smart_thumbnail2");
      thumbnailElement2.addEventListener("click", function() {
          if(thumbnailElement2.className==""){
              thumbnailElement2.className="small";
          }
              else{
                  thumbnailElement2.className="";
              }
  
          ;
        });  
});