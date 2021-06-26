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
    outerDiv.className = 'resource-item'

    if(itemDetails.image){
        const imgRef = document.createElement('a')
        imgRef.target= '_blank';
        imgRef.href = itemDetails.url;
        outerDiv.appendChild(imgRef);

        const img = document.createElement('img');
        img.className = 'resource-img image-preview '
        img.src = itemDetails.image;
        imgRef.appendChild(img);
    }

    const dataDiv = document.createElement('div')
    dataDiv.className = 'resource-data'
    outerDiv.appendChild(dataDiv);

    const titleDiv = document.createElement('a')
    titleDiv.className = 'resource-name'
    titleDiv.target= '_blank';
    titleDiv.innerText = itemName;
    titleDiv.href = itemDetails.url;
    dataDiv.appendChild(titleDiv);

    const dateDiv = document.createElement('div')
    dateDiv.className = 'resource-date post-meta'
    dateDiv.innerText = itemDetails.date;
    dataDiv.appendChild(dateDiv);

    
    const descDiv = document.createElement('div')
    descDiv.className = 'resource-detail'
    descDiv.innerText = itemDetails.detail;
    dataDiv.appendChild(descDiv);

    const typeDiv = document.createElement('div')
    typeDiv.innerText = itemDetails.type;
    typeDiv.className = 'resource-type tag fa fa-hashtag ' + itemDetails.type;
    dataDiv.appendChild(typeDiv);

    return outerDiv;
}

const renderThis = (data) => {
    const holderDiv = document.getElementById('resource-holder');
    while (holderDiv.lastElementChild) {
        holderDiv.removeChild(holderDiv.lastElementChild);
    }
    for (const [key, value] of Object.entries(data)) {
        if(value.hidden){ continue; }
        holderDiv.appendChild(getOne(key, value));
    }
}

const search = () => {

}
window.onload = getResources;