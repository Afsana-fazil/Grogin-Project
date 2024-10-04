// let products = {
//     data: [
//         {
//             productName: "Potatoes",
//             price: "0.50$",
//             image: "potatoes.jpg",
//         },

//         {
//             productName: "Oranges",
//             category: "Organic",
//             price: "0.89$",
//             image: "orange.jpg",
//         },

//         {
//             productName: "Strawberries",
//             price: "1.50$",
//             image: "strawberry.jpg",
//         },

//         {
//             productName: "Sliced Strawberries",
//             price: "21.90$",
//             image: "simple-kitchen.jpg",
//         },

//         {
//             productName: "Peach",
//             price: "0.75$",
//             image: "apple.jpg",
//         },

//         {
//             productName: "Banana",
//             category: "Organic",
//             price: "0.89$",
//             image: "banana.jpg",
//         },

//         {
//             productName: "Spinach & Herb Wrap",
//             price: "27.79$",
//             image: "wraps.jpg",
//         },

//         {
//             productName: "Caramel Apple",
//             price: "19.37$",
//             image: "caramel-apple.jpg",
//         },

//         {
//             productName: "Brijal Purple Eggplant",
//             price: "2.99$",
//             image: "brinjal.jpg",
//         },

//         {
//             productName: "Pomegranate",
//             price: "1.50$",
//             image: "pomegranate.jpg",
//         },

//         {
//             productName: "Lemon",
//             price: "0.50$",
//             image: "lemon.jpg",
//         },

//         {
//             productName: "Cauliflower Yellow Potatoes",
//             price: "12.79$",
//             image: "veg-1.jpg",
//         },

//         {
//             productName: "Broccoli Crowns",
//             price: "11.54$",
//             image: "veg-2.jpg",
//         },

//         {
//             productName: "Blackberries",
//             price: "2.99$",
//             image: "berries.jpg",
//         },

//         {
//             productName: "Protein Shake",
//             price: "11.99$",
//             image: "quest.jpg",
//         },

//         {
//             productName: "Apple",
//             category: "Organic",
//             price: "15.99$-9.88$",
//             image: "green-apple.jpg",
//         },
// ],
// };





document.querySelector('#searchInput')
    .addEventListener('input', filterList);

function filterList() {
    const searchInput = document.querySelector('#searchInput');
    const filter = searchInput.value.toLowerCase(); // Corrected 'Value' to 'value'
    const listItems = document.querySelectorAll('.item');

    listItems.forEach((item) => {
        let text = item.textContent.toLowerCase(); // Make sure to convert text to lowercase
        if (text.includes(filter)) {
            item.style.display = ''; // Show item
        } else {
            item.style.display = 'none'; // Hide item
        }
    });
}