document.addEventListener('DOMSubtreeModified', function (e) {
    if(e.target.tagName === 'HTML' && window.google) {
            if(e.target.className.match('translated')) {
                document.header.style.backgroundPosition="0px 40px";
            } else {
                document.header.style.backgroundPosition="0px 0px";
            }
        }
    }, true);

