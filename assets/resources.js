const getResources = ()=> {
    var request = new XMLHttpRequest();
    request.open('GET', window.location.origin + "/assets/resources.json", true);

    request.onload = () => { 
        if (request.status >= 200 && request.status < 400) {
            var data = JSON.parse(request.responseText);
            renderThis(data);
        }
    }
    request.send();
}

const getOne = (itemName, itemDetails) => {
    const outerDiv = document.createElement('div')

    const titleDiv = document.createElement('h2')
    titleDiv.innerText = itemName;
    outerDiv.appendChild(titleDiv);

    const dateDiv = document.createElement('h2')
    dateDiv.innerText = itemDetails.date;
    outerDiv.appendChild(dateDiv);

    if(itemDetails.image){
        const img = document.createElement('img');
        img.src = itemDetails.image;
        outerDiv.appendChild(img);
    }

    const linkDiv = document.createElement('a')
    linkDiv.innerText = 'Link';
    linkDiv.href = itemDetails.url;
    outerDiv.appendChild(linkDiv);

    const typeDiv = document.createElement('div')
    typeDiv.innerText = itemDetails.type;
    outerDiv.appendChild(typeDiv);

    return outerDiv;
}

const renderThis = (data) => {
    const holderDiv = document.getElementById('resource-holder');
    while (holderDiv.lastElementChild) {
        holderDiv.removeChild(holderDiv.lastElementChild);
    }
    for (const [key, value] of Object.entries(data)) {
        holderDiv.appendChild(getOne(key, value));
    }
}

const search = () => {

}
window.onload = getResources;