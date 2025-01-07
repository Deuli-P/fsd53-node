exports.priceTTC = function (price, tva = 0.2) {

    price = parseFloat(price);

    if (isNaN(price)) {
        console.error("Veuillez entrer un prix valide")
    }

    return (tva + 1) * price

}