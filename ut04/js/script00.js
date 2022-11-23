let h1 = document.getElementsByTagName("h1")[0];
h1.textContent = "Hola mundo";
let items = document.getElementsByTagName("li");
Array.from(items).forEach((item) => {
    item.textContent = "AAAA";
});