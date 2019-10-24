function MobileFilter() {
    this.filterContainer = document.querySelector('.sidebar');
    this.productsContainer = document.querySelector('.products_container');

    this.showIcon = this.productsContainer.querySelector('.show-filter-menu_button');
    this.closeIcon = this.filterContainer.querySelector('.sidebar_header--close-button');

    this.onCloseButtonClick();
    this.onFilterButtonClick();
}

MobileFilter.prototype.onFilterButtonClick = function () {
    var filterContainer = this.filterContainer;
    var productsContainer = this.productsContainer;

    this.showIcon.addEventListener('click', function () {
        filterContainer.style.display = 'block';
        productsContainer.style.display = 'none';
    });
};

MobileFilter.prototype.onCloseButtonClick = function () {
    var filterContainer = this.filterContainer;
    var productsContainer = this.productsContainer;

    this.closeIcon.addEventListener('click', function () {
        filterContainer.style.display = 'none';
        productsContainer.style.display = 'block';
    });
};