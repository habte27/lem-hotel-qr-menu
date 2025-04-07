// Product Data (Multilingual + Categories)
const products = [
    { id: "product1", category: "breakfast", name: { en: "Scrambled Egg", am: "እንቁላል ፍርፍር" }, desc: { en: "Egg,Onion green butter chilli served with Enjera & bread", am: "እንቁላል, ሽንኩርት, አረንጓዴ ቃሪይ ከ እንጀራ ጋር ያገለገሉ።" }, price: "ETB 210.00 ", img: "product1.png" },
    { id: "product2", category: "breakfast", name: { en: "Egg with Meat", am: "ዕንቁላል በሥጋ" }, desc: { en: "Egg, minced meat,onion, Ethiopian butter, with enjera & bread.", am: "እንቁላል፣ የተፈጨ ሥጋ፣ ሽንኩርት፣ የኢትዮጵያ ቅቤና ዳቦ።" }, price: "ETB 310.00", img: "R.jpeg" },
    { id: "product3", category: "drinks", name: { en: "Tea", am: "ቲና" }, desc: { en: "Black Tea with Sugar", am: "ጥቁር ቲና ከስኳር" }, price: "ETB 25.00", img: "tea.png" },
    { id: "product4", category: "breakfast", name: { en: " Lam Spcial Omlet", am: "ስፔሻል ኦምሌት" }, desc: { en: " Egg,beef,mozerella cheese,onion,black pepper,served with hot green chilli souce  &slices of bread.", am: "እንቁላል፣ ግራም ሞዜሬላ አይብ፣ ሽንኩርት፣ ጥቁር በርበሬ ከዳቦ እና Enjera  ጋር  ይቀርባል።" }, price: "ETB 360.00", img: "product1.png" },
    { id: "product5", category: "breakfast", name: { en: "Egg with Meat", am: "እንቁላል ከስጋ" }, desc: { en: "Egg, minced meat, onions, butter", am: "እንቁላል፣ ቆሎሽ ስጋ፣ ሽንኩርት፣ ቅቤ" }, price: "ETB 310.00", img: "OIP.jpeg" },
    { id: "product5", category: "drinks", name: { en: "Tea", am: "ቲና" }, desc: { en: "Black Tea with Sugar", am: "ጥቁር ቲና ከስኳር" }, price: "ETB 25.00", img: "tea.png" },
    { id: "product6", category: "breakfast", name: { en: "Scrambled Egg", am: "የተዘጋጁ እንቁላል" }, desc: { en: "Egg, Onion, Butter, Chili", am: "እንቁላል፣ ሽንኩርት፣ ቅቤ፣ በርበሬ" }, price: "ETB 210.00", img: "product1.png" },
    { id: "product7", category: "breakfast", name: { en: "Egg with Meat", am: "እንቁላል ከስጋ" }, desc: { en: "Egg, minced meat, onions, butter", am: "እንቁላል፣ ቆሎሽ ስጋ፣ ሽንኩርት፣ ቅቤ" }, price: "ETB 310.00", img: "product2.png" },
    { id: "product8", category: "drinks", name: { en: "Tea", am: "ቲና" }, desc: { en: "Black Tea with Sugar", am: "ጥቁር ቲና ከስኳር" }, price: "ETB 25.00", img: "tea.png" },
    { id: "product9", category: "breakfast", name: { en: "Scrambled Egg", am: "የተዘጋጁ እንቁላል" }, desc: { en: "Egg, Onion, Butter, Chili", am: "እንቁላል፣ ሽንኩርት፣ ቅቤ፣ በርበሬ" }, price: "ETB 210.00", img: "product1.png" },
    { id: "product10", category: "breakfast", name: { en: "Egg with Meat", am: "እንቁላል ከስጋ" }, desc: { en: "Egg, minced meat, onions, butter", am: "እንቁላል፣ ቆሎሽ ስጋ፣ ሽንኩርት፣ ቅቤ" }, price: "ETB 310.00", img: "product2.png" },
    { id: "product11", category: "drinks", name: { en: "Tea", am: "ቲና" }, desc: { en: "Black Tea with Sugar", am: "ጥቁር ቲና ከስኳር" }, price: "ETB 25.00", img: "tea.png" },
    { id: "product12", category: "breakfast", name: { en: "Scrambled Egg", am: "የተዘጋጁ እንቁላል" }, desc: { en: "Egg, Onion, Butter, Chili", am: "እንቁላል፣ ሽንኩርት፣ ቅቤ፣ በርበሬ" }, price: "ETB 210.00", img: "product1.png" },
    { id: "product13", category: "breakfast", name: { en: "Egg with Meat", am: "እንቁላል ከስጋ" }, desc: { en: "Egg, minced meat, onions, butter", am: "እንቁላል፣ ቆሎሽ ስጋ፣ ሽንኩርት፣ ቅቤ" }, price: "ETB 310.00", img: "product2.png" },
    { id: "product14", category: "drinks", name: { en: "Tea", am: "ቲና" }, desc: { en: "Black Tea with Sugar", am: "ጥቁር ቲና ከስኳር" }, price: "ETB 25.00", img: "tea.png" },
    { id: "product15", category: "breakfast", name: { en: "Scrambled Egg", am: "የተዘጋጁ እንቁላል" }, desc: { en: "Egg, Onion, Butter, Chili", am: "እንቁላል፣ ሽንኩርት፣ ቅቤ፣ በርበሬ" }, price: "ETB 210.00", img: "product1.png" },
    { id: "product16", category: "breakfast", name: { en: "Egg with Meat", am: "እንቁላል ከስጋ" }, desc: { en: "Egg, minced meat, onions, butter", am: "እንቁላል፣ ቆሎሽ ስጋ፣ ሽንኩርት፣ ቅቤ" }, price: "ETB 310.00", img: "product2.png" },
    { id: "product17", category: "drinks", name: { en: "Tea", am: "ቲና" }, desc: { en: "Black Tea with Sugar", am: "ጥቁር ቲና ከስኳር" }, price: "ETB 25.00", img: "tea.png" },
    { id: "product18", category: "breakfast", name: { en: "Scrambled Egg", am: "የተዘጋጁ እንቁላል" }, desc: { en: "Egg, Onion, Butter, Chili", am: "እንቁላል፣ ሽንኩርት፣ ቅቤ፣ በርበሬ" }, price: "ETB 210.00", img: "product1.png" },
    { id: "product19", category: "breakfast", name: { en: "Egg with Meat", am: "እንቁላል ከስጋ" }, desc: { en: "Egg, minced meat, onions, butter", am: "እንቁላል፣ ቆሎሽ ስጋ፣ ሽንኩርት፣ ቅቤ" }, price: "ETB 310.00", img: "product2.png" },
    { id: "product20", category: "drinks", name: { en: "Tea", am: "ቲና" }, desc: { en: "Black Tea with Sugar", am: "ጥቁር ቲና ከስኳር" }, price: "ETB 25.00", img: "tea.png" },
    { id: "product1", category: "breakfast", name: { en: "Scrambled Egg", am: "የተዘጋጁ እንቁላል" }, desc: { en: "Egg, Onion, Butter, Chili", am: "እንቁላል፣ ሽንኩርት፣ ቅቤ፣ በርበሬ" }, price: "ETB 210.00", img: "product1.png" },
    { id: "product2", category: "breakfast", name: { en: "Egg with Meat", am: "እንቁላል ከስጋ" }, desc: { en: "Egg, minced meat, onions, butter", am: "እንቁላል፣ ቆሎሽ ስጋ፣ ሽንኩርት፣ ቅቤ" }, price: "ETB 310.00", img: "product2.png" },
    { id: "product3", category: "drinks", name: { en: "Tea", am: "ቲና" }, desc: { en: "Black Tea with Sugar", am: "ጥቁር ቲና ከስኳር" }, price: "ETB 25.00", img: "tea.png" },
    { id: "product4", category: "breakfast", name: { en: "Scrambled Egg", am: "የተዘጋጁ እንቁላል" }, desc: { en: "Egg, Onion, Butter, Chili", am: "እንቁላል፣ ሽንኩርት፣ ቅቤ፣ በርበሬ" }, price: "ETB 210.00", img: "product1.png" },
    { id: "product5", category: "breakfast", name: { en: "Egg with Meat", am: "እንቁላል ከስጋ" }, desc: { en: "Egg, minced meat, onions, butter", am: "እንቁላል፣ ቆሎሽ ስጋ፣ ሽንኩርት፣ ቅቤ" }, price: "ETB 310.00", img: "product2.png" },
    { id: "product5", category: "drinks", name: { en: "Tea", am: "ቲና" }, desc: { en: "Black Tea with Sugar", am: "ጥቁር ቲና ከስኳር" }, price: "ETB 25.00", img: "tea.png" },
    { id: "product6", category: "breakfast", name: { en: "Scrambled Egg", am: "የተዘጋጁ እንቁላል" }, desc: { en: "Egg, Onion, Butter, Chili", am: "እንቁላል፣ ሽንኩርት፣ ቅቤ፣ በርበሬ" }, price: "ETB 210.00", img: "product1.png" },
    { id: "product7", category: "breakfast", name: { en: "Egg with Meat", am: "እንቁላል ከስጋ" }, desc: { en: "Egg, minced meat, onions, butter", am: "እንቁላል፣ ቆሎሽ ስጋ፣ ሽንኩርት፣ ቅቤ" }, price: "ETB 310.00", img: "product2.png" },
    { id: "product8", category: "drinks", name: { en: "Tea", am: "ቲና" }, desc: { en: "Black Tea with Sugar", am: "ጥቁር ቲና ከስኳር" }, price: "ETB 25.00", img: "tea.png" },
    { id: "product9", category: "breakfast", name: { en: "Scrambled Egg", am: "የተዘጋጁ እንቁላል" }, desc: { en: "Egg, Onion, Butter, Chili", am: "እንቁላል፣ ሽንኩርት፣ ቅቤ፣ በርበሬ" }, price: "ETB 210.00", img: "product1.png" },
    { id: "product10", category: "breakfast", name: { en: "Egg with Meat", am: "እንቁላል ከስጋ" }, desc: { en: "Egg, minced meat, onions, butter", am: "እንቁላል፣ ቆሎሽ ስጋ፣ ሽንኩርት፣ ቅቤ" }, price: "ETB 310.00", img: "product2.png" },
    { id: "product11", category: "drinks", name: { en: "Tea", am: "ቲና" }, desc: { en: "Black Tea with Sugar", am: "ጥቁር ቲና ከስኳር" }, price: "ETB 25.00", img: "tea.png" },
    { id: "product12", category: "breakfast", name: { en: "Scrambled Egg", am: "የተዘጋጁ እንቁላል" }, desc: { en: "Egg, Onion, Butter, Chili", am: "እንቁላል፣ ሽንኩርት፣ ቅቤ፣ በርበሬ" }, price: "ETB 210.00", img: "product1.png" },
    { id: "product13", category: "breakfast", name: { en: "Egg with Meat", am: "እንቁላል ከስጋ" }, desc: { en: "Egg, minced meat, onions, butter", am: "እንቁላል፣ ቆሎሽ ስጋ፣ ሽንኩርት፣ ቅቤ" }, price: "ETB 310.00", img: "product2.png" },
    { id: "product14", category: "drinks", name: { en: "Tea", am: "ቲና" }, desc: { en: "Black Tea with Sugar", am: "ጥቁር ቲና ከስኳር" }, price: "ETB 25.00", img: "tea.png" },
    { id: "product15", category: "breakfast", name: { en: "Scrambled Egg", am: "የተዘጋጁ እንቁላል" }, desc: { en: "Egg, Onion, Butter, Chili", am: "እንቁላል፣ ሽንኩርት፣ ቅቤ፣ በርበሬ" }, price: "ETB 210.00", img: "product1.png" },
    { id: "product16", category: "breakfast", name: { en: "Egg with Meat", am: "እንቁላል ከስጋ" }, desc: { en: "Egg, minced meat, onions, butter", am: "እንቁላል፣ ቆሎሽ ስጋ፣ ሽንኩርት፣ ቅቤ" }, price: "ETB 310.00", img: "product2.png" },
    { id: "product17", category: "drinks", name: { en: "Tea", am: "ቲና" }, desc: { en: "Black Tea with Sugar", am: "ጥቁር ቲና ከስኳር" }, price: "ETB 25.00", img: "tea.png" },
    { id: "product18", category: "breakfast", name: { en: "Scrambled Egg", am: "የተዘጋጁ እንቁላል" }, desc: { en: "Egg, Onion, Butter, Chili", am: "እንቁላል፣ ሽንኩርት፣ ቅቤ፣ በርበሬ" }, price: "ETB 210.00", img: "product1.png" },
    { id: "product19", category: "breakfast", name: { en: "Egg with Meat", am: "እንቁላል ከስጋ" }, desc: { en: "Egg, minced meat, onions, butter", am: "እንቁላል፣ ቆሎሽ ስጋ፣ ሽንኩርት፣ ቅቤ" }, price: "ETB 310.00", img: "product2.png" },
    { id: "product20", category: "drinks", name: { en: "Tea", am: "ቲና" }, desc: { en: "Black Tea with Sugar", am: "ጥቁር ቲና ከስኳር" }, price: "ETB 25.00", img: "tea.png" }
];

// Load Menu Items
function loadMenu() {
    let lang = localStorage.getItem("lang") || "en";
    let menuContainer = document.getElementById("menu");
    menuContainer.innerHTML = "";

    products.forEach(product => {
        let productHTML = `
            <div class="product" onclick="openModal('${product.id}')">
                <img src="${product.img}" alt="${product.name[lang]}">
                <div class="product-details">
                    <h3>${product.name[lang]}</h3>
                    <span>${product.price}</span>
                </div>
            </div>`;
        menuContainer.innerHTML += productHTML;
    });
}

// Open Modal
function openModal(productId) {
    let lang = localStorage.getItem("lang") || "en";
    let product = products.find(p => p.id === productId);
    document.getElementById("modal-title").innerText = product.name[lang];
    document.getElementById("modal-description").innerText = product.desc[lang];
    document.getElementById("modal-price").innerText = product.price;
    document.getElementById("modal-image").src = product.img;
    document.getElementById("productModal").style.display = "block";
}

// Close Modal
function closeModal() {
    document.getElementById("productModal").style.display = "none";
}

// Language Switcher
function switchLanguage(lang) {
    localStorage.setItem("lang", lang);
    loadMenu();
}

// Search & Category Filtering
function filterProducts() {
    let searchQuery = document.getElementById("searchInput").value.toLowerCase();
    let category = document.getElementById("categoryFilter").value;
    let lang = localStorage.getItem("lang") || "en";

    let filteredProducts = products.filter(product => 
        (category === "all" || product.category === category) &&
        product.name[lang].toLowerCase().includes(searchQuery)
    );

    document.getElementById("menu").innerHTML = filteredProducts.map(product => `
        <div class="product" onclick="openModal('${product.id}')">
            <img src="${product.img}" alt="${product.name[lang]}">
            <div class="product-details">
                <h3>${product.name[lang]}</h3>
                <span>${product.price}</span>
            </div>
        </div>
    `).join("");
}

// Load menu on startup
window.onload = function () {
    loadMenu();
    new QRCode(document.getElementById("qrcode"), { 
        text: "https://lem-hotel-qr-menu.vercel.app/",
         width: 128, 
         height: 128 
        });
};
