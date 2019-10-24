function Search() {
    var form = document.forms.searchForm;
    var searchInput = form.elements.searchbar;

    this.inputHandler(form, searchInput);
}

Search.prototype.inputHandler = function (form, input) {
    API.getDataByInputText(form, input);
};