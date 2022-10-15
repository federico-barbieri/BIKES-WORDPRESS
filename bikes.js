const endpoint = "https://federicobarbieri.dk/bikes/wp-json/wp/v2/bike";




async function getData() {
    let result = await fetch(endpoint);
    showPosts(await result.json());
}

function showPosts(posts){
    
    posts.forEach((bike) => {
        

        let template = document.querySelector('template').content;
        let clone = template.cloneNode(true);

        clone.querySelector('img').src = bike.image.guid;
        clone.querySelector('.brand').innerHTML = `<strong>${bike.brand}</strong>`;
        clone.querySelector('.model').textContent = bike.model;
        clone.querySelector('.price').innerHTML = `<strong>$${bike.price}</strong>`;
        clone.querySelector('.colors').innerHTML = `Colors: <strong>${bike.colors}</strong>`;
        clone.querySelector('.stock').innerHTML = `In stock: <strong>${bike.stock}</strong>`;

        let parent = document.querySelector('main');

        parent.appendChild(clone);
    });
}

getData();
