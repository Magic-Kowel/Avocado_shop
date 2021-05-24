/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const url = "https://platzi-avo.vercel.app/api/avo";
window.fetch(url)
.then(respuesta => respuesta.json())
.then((responseJoson) => {
    const todosLosItems = [];
    responseJoson.data.forEach( (item)  => {
        const imagen = document.createElement('img');
        const title = document.createElement('h2');
        
        const price = document.createElement('div');
        
        const container = document.createElement('div');

        container.append(imagen, title, price);
        todosLosItems.push(container);
    });
    document.body.append(...todosLosItems);
});
