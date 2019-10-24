function ProductCard(title, price, imgUrl, colorLength, sizeLength) {
    this.title = title;
    this.price = price;
    this.imgUrl = imgUrl;
    this.colorLength = colorLength;
    this.sizeLength = sizeLength;
    this.rating = {
        amountStars: 5,
        amountStarsScored: 3,
        starData: {
            src: './images/rating-scored.svg',
            class: 'reviews_icon',
        },
        reviews: {
            reviewsAmount: 134,
        },
    };
    this.shippingOffer = 'Shipping Offer';
}

ProductCard.prototype.createCard = function () {
    var cardContainer = $('div', {
        class: 'product_preview',
    });

    //=========================================================

    var img = $('img', {
        class: 'product_preview__image',
        src: this.imgUrl,
        alt: '...',
    });

    //=========================================================

    var productPreviewContend = $('div', {
        class: 'product_preview_content__wrapper',
    });

    //-----------------------------------------------------------------------

    var productTitle = $('span', {
        class: 'product_name',
        text: this.title,
    });

    //-----------------------------------------------------------------------

    var reviewsWrapper = $('div', {
        class: 'reviews_wrapper',
    });

    var reviewsWrapperUnactive = $('div', {
        class: 'reviews_wrapper_unactive',
    });

    var reviewsWrapperActive = $('div', {
        class: 'reviews_wrapper_active',
        style: 'width: 67%',
    });

    var reviewsAmount = $('span', {
        class: 'rewievs_amount',
        text: '(' + this.rating.reviews.reviewsAmount +')',
    });

    //-----------------------------------------------------------------------

    var shippingOfferWrapper = $('div', {
        class: 'shipping-offer_wrapper',
    });
    var shippingOfferIcon = $('img', {
        class: 'shipping-offer_icon',
        src: './images/delivery-truck.svg',
        alt: '...',
    });
    var shippingOfferText = $('span', {
        class: 'shipping-offer_text',
        text: this.shippingOffer,
    });

    //-----------------------------------------------------------------------
    var arrOfPrice = String(this.price).split('.');
    var productPrice = $('span', {
        class: 'product_price',
        text: arrOfPrice[0],
    });

    var productPriceTop = $('span', {
        class: 'product_price_top',
        text: arrOfPrice[1],
    });

    //-----------------------------------------------------------------------

    var optionsWrapper = $('div', {
        class: 'options_wrapper',
    });
    var optionsText = $('span', {
        class: 'options_text',
        text: this.colorLength + ' Colors' + ' / ' + this.sizeLength + ' Sizes',
    });
    var optionsIcon = $('img', {
        class: 'options__icon',
        src: './images/wishlist.svg',
        alt: '...',
    });

    cardContainer.appendChild(img);

    productPreviewContend.appendChild(productTitle);

    for (var i = 0; i < this.rating.amountStars; i++) {
        var reviewIconScored = $('img', {
            class: 'reviews_icon',
            src: './images/rating-scored.svg',
            alt: '...',
        });

        reviewsWrapperActive.appendChild(reviewIconScored);
    }

    reviewsWrapperUnactive.appendChild(reviewsWrapperActive);

    for (var j = 0; j < this.rating.amountStars; j++) {
        var reviewIconUnActive = $('img', {
            class: 'reviews_icon',
            src: './images/rating-unactive.svg',
            alt: '...',
        });

        reviewsWrapperUnactive.appendChild(reviewIconUnActive);
    }

    reviewsWrapper.appendChild(reviewsWrapperUnactive);
    reviewsWrapper.appendChild(reviewsAmount);
    productPreviewContend.appendChild(reviewsWrapper);

    shippingOfferWrapper.appendChild(shippingOfferIcon);
    shippingOfferWrapper.appendChild(shippingOfferText);

    productPreviewContend.appendChild(shippingOfferWrapper);

    productPrice.appendChild(productPriceTop);
    productPreviewContend.appendChild(productPrice);

    optionsWrapper.appendChild(optionsText);
    optionsWrapper.appendChild(optionsIcon);

    productPreviewContend.appendChild(optionsWrapper);

    cardContainer.appendChild(productPreviewContend);

    return cardContainer;
};