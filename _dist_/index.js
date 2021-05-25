/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const baseUrl = "https://platzi-avo.vercel.app"
const url = "https://platzi-avo.vercel.app/api/avo"

let app = document.getElementById('app')
app.className = "foo" //I used grid to display it prettier

const formatPrice = price => {

    const newPrice = new window.Intl.NumberFormat("es-EN", {
        style: "currency",
        currency: "USD"
    }).format(price)

    return newPrice;
 }

window
.fetch(url)
.then(response => response.json())
.then(responseJson => {
    const items = []
    responseJson.data.forEach((item) => {
        const img = document.createElement('img')
        img.className = "h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6"
        img.src = `${baseUrl}${item.image}`;

        const title = document.createElement('h2')
        title.className = "text-lg"
        title.textContent = item.name

        const price = document.createElement('div')
        price.className = "text-gray-600"
        price.textContent = formatPrice(item.price);
        // price.textContent = item.price

        const priceTitle = document.createElement('div')
        priceTitle.className = "text-center md:text-left"
        priceTitle.append(title, price)

        const card = document.createElement("div");
        card.className = "md:flex bg-white rounded-lg p-6 hover:bg-gray-300";
        card.append(img, priceTitle)

        const container = document.createElement('div');
        container.appendChild(card)

        items.push(container)
    })
    app.append(...items)
})