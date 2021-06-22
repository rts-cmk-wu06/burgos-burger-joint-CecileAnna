class recommendedCard {

    constructor(src, title, price) {
        this.src = src;
        this.title = title;
        this.price = price;
    }

    printCard() {

    }

}

// Usage:
let card01 = new recommendedCard("./images/favorit01.jpg", "grilled burger", "64kr.");

let card02 = new recommendedCard("./images/favorit02.jpg", "the firehouse", "70kr.");

let card03 = new recommendedCard("./images/favorit03.jpg", "lux burger", "90kr.");

let card04 = new recommendedCard("./images/favorit04.jpg", "super vegan", "70kr.");