(function (elem) {
    for (var i = 0; i < elem.length; i++) {
        if (!window[elem[i]] || 'remove' in window[elem[i]].prototype) continue;
        window[elem[i]].prototype.remove = function () {
            this.parentNode.removeChild(this);
        };
    }
})(['Element', 'CharacterData', 'DocumentType']);