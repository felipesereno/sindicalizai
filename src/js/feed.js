var feedURL = 'http://localhost:8080/https://averdade.org.br/feed/';

var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        var xmlDoc = xhr.responseXML;
        var items = xmlDoc.getElementsByTagName('item');
        var feedDiv = document.getElementById('feed');
        var slidesContainer = document.createElement('div');
        slidesContainer.classList.add('carousel-slide');

        for (var i = 0; i < items.length; i++) {
            var title = items[i].getElementsByTagName('title')[0].textContent;
            var link = items[i].getElementsByTagName('link')[0].textContent;
            var content = items[i].getElementsByTagName('content:encoded')[0].textContent;
            var parser = new DOMParser();
            var htmlDoc = parser.parseFromString(content, 'text/html');
            var imgTag = htmlDoc.querySelector('img');
            var imageUrl = imgTag ? imgTag.src : 'src/img/default.jpg';

            var itemDiv = document.createElement('div');
            itemDiv.classList.add('carousel-item');
            itemDiv.innerHTML = `<img src="${imageUrl}" alt="News image"><a href="${link}">${title}</a>`;
            slidesContainer.appendChild(itemDiv);
        }

        feedDiv.appendChild(slidesContainer);
    }
};
xhr.open('GET', feedURL, true);
xhr.send();

let currentIndex = 0;
function moveSlide(step) {
    var items = document.querySelectorAll('.carousel-item').length;
    currentIndex = (currentIndex + step + items) % items; // Loop contínuo com passos
    var slidesContainer = document.querySelector('.carousel-slide');
    slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(() => {
    moveSlide(1);
}, 10000); // Altera o slide a cada 10 segundos
