function $(tag, objectOfAttr) {
    var elem = document.createElement(tag);

    for (var key in objectOfAttr) {
        if (key === 'text') {
            elem.textContent = objectOfAttr[key];
        } else {
            elem.setAttribute(key, objectOfAttr[key]);
        }
    }

    return elem;
}