function CardsContainer(data) {
    this.cardsContainer = document.querySelector('.products-previews_container');
    this.data = data;
}

CardsContainer.prototype.showAllCards = function(allCards) {
    if (!allCards.length) {
        alert('Nothing found.');
        return;
    }

    var container = $('div', {
        class: 'cardsContainer'
    });

    allCards.forEach(function (item) {
        container.appendChild(item);
    });

    this.cardsContainer.appendChild(container);
};

CardsContainer.prototype.createAllCards = function () {
    var cards = [];

    this.data.forEach(function (dataItem) {
        var title = dataItem.title;
        var price = dataItem.price;
        var imgUrl = dataItem.imageUrl[0];
        var colorsLength = dataItem.colors.length;
        var sizesLength = dataItem.size.length;

        cards.push(new ProductCard(title, price, imgUrl, colorsLength, sizesLength).createCard());
    });

    return cards;
};

CardsContainer.prototype.removeCards = function () {
    var container = document.querySelector('.cardsContainer');

    if (!container) {
        return;
    }

    container.remove();
};