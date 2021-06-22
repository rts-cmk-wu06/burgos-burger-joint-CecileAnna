document.querySelector('main').addEventListener('click', function() {
    console.log('Main clicked');
}, {
    capture: false
});

let wrapper = document.querySelector('.Gallery_grid-container');

let bigImg = document.querySelector('.Gallery_big-img');

let bigSrc = bigImg.attributes.src.nodeValue;


function setImgFeature(e) {
    // console.log(event);

    console.log('Wrapper clicked')

    let targetSrc = e.target.getAttribute('src');

    // console.log(targetSrc);


    if (targetSrc !== null) {

        bigImg.setAttribute('src', targetSrc);

        e.target.setAttribute('src', bigSrc);

        bigSrc = bigImg.attributes.src.nodeValue;

    };
};

wrapper.addEventListener('click', setImgFeature, {
    capture: true
});