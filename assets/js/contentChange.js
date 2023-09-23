function changeContent(contentId) {
    var contents = document.getElementsByClassName("product-section");
    
    for (var i = 0; i < contents.length; i++) {
        contents[i].classList.remove("active");
    }

    var content = document.getElementById(contentId);
    if (content) {
        content.classList.add("active");
    }
}