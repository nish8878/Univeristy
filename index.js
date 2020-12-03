document.addEventListener('DOMSubtreeModified', function (e) {
    if(e.target.tagName === 'HTML' && window.google) {
            if(e.target.className.match('translated')) {
                document.header.style.backgroundPosition="0px 40px";
            } else {
                document.header.style.backgroundPosition="0px 0px";
            }
        }
    }, true);
    e1 = document.getElementsByID("en1");
    e2 = document.getElementsByID("en2");
    e3 = document.getElementsByID("en3");
    e4 = document.getElementsByID("en4");
    e5 = document.getElementsByID("en5");
    e6 = document.getElementsByID("en6");
