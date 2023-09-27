function changeContent(contentId) {
    var contents = document.getElementsByClassName("product-section");
    var icons = document.querySelectorAll('.icons-container div');

    for (var i = 0; i < contents.length; i++) {
        contents[i].classList.remove("active");
    }

    icons.forEach(x => x.classList.remove('active-btn'));

    var content = document.getElementById(contentId);
    if (content) {
        content.classList.add("active");
    }

    switch (contentId) {
        case 'shop1':
            icons[0].classList.add('active-btn');
            break;
        case 'shop2':
            icons[1].classList.add('active-btn');
            break;
    }
}