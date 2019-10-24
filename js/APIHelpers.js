function API() {}

API.getDataByInputText = function(form, input) {
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        var inputValue = input.value;

        fetch('http://search.unbxd.io/fb853e3332f2645fac9d71dc63e09ec1/demo-unbxd700181503576558/search?&q=' + inputValue)
            .then(function (res) {
                return res.json();
            })
            .then(function (res) {
                var products = res.response.products;

                var cardsContainer = new CardsContainer(products);
                cardsContainer.removeCards();

                var cards = cardsContainer.createAllCards();
                cardsContainer.showAllCards(cards);
            })
            .catch(function (e) {
                alert('Nothing found');
            })
    });
};

API.getAllData = function() {
    fetch('http://search.unbxd.io/fb853e3332f2645fac9d71dc63e09ec1/demo-unbxd700181503576558/search?&q=*')
        .then(function (res) {
            return res.json();
        })
        .then(function (res) {
            var products = res.response.products;

            var cardsContainer = new CardsContainer(products);
            var cards = cardsContainer.createAllCards();
            cardsContainer.showAllCards(cards);
        })
        .catch(function (e) {
            alert('Nothing found')
        })
};