let features = [
    {
        title: "Suspendisse",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam voluptate, repellat quisquam aspernatur possimus voluptates, fugiat omnis deleniti velit sit eaque animi veniam voluptatem voluptatum, cum ipsam asperiores perferendis. Atque!",
        link: 'https://test.com',
        iconSrc: "https://pngimg.com/uploads/like/like_PNG71.png"

    },
    {
        title: "Maecenas",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam voluptate, repellat quisquam aspernatur possimus voluptates, fugiat omnis deleniti velit sit eaque animi veniam voluptatem voluptatum, cum ipsam asperiores perferendis. Atque!",
        link: 'https://test.com',
        iconSrc: "https://www.pinclipart.com/picdir/middle/580-5805019_39-cliparts-blue-key-clip-art-png-download.png"
    },
    {
        title: "Aliquam",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam voluptate, repellat quisquam aspernatur possimus voluptates, fugiat omnis deleniti velit sit eaque animi veniam voluptatem voluptatum, cum ipsam asperiores perferendis. Atque!",
        link: 'https://test.com',
        iconSrc: "https://w7.pngwing.com/pngs/317/159/png-transparent-racing-flags-2017-blue-flag-auto-racing-flag-miscellaneous-blue-angle.png"

    },
    {
        title: "Habitasse",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam voluptate, repellat quisquam aspernatur possimus voluptates, fugiat omnis deleniti velit sit eaque animi veniam voluptatem voluptatum, cum ipsam asperiores perferendis. Atque!",
        link: 'https://test.com',
        iconSrc: "https://img.favpng.com/1/9/19/chemistry-laboratory-chemical-substance-clip-art-png-favpng-SFtmnK3zsTEFQshAka3fvcEjc.jpg"
    }
]

let featuresContainer = document.getElementById('card');

for ( let i = 0; i < features.length; i++) {
    let newFeatures = document.createElement('div');
    newFeatures.classList.add('card__item');

    //Создаем картинку
    let featuresIcon = document.createElement('img');
    featuresIcon.classList.add('card__img');
    featuresIcon.setAttribute('src', features[i].iconSrc);
    newFeatures.appendChild(featuresIcon);

    // Создаем заголовок
    let featuresTitle = document.createElement('h2');
    featuresTitle.classList.add('tittle');
    featuresTitle.innerText = features[i].title;
    newFeatures.appendChild(featuresTitle);

    // Создаем текст
    let featuresText = document.createElement('p');
    featuresText.classList.add('text');
    featuresText.innerText = features[i].text;
    newFeatures.appendChild(featuresText);

    // Создаем ссылку
    let featuresLink = document.createElement('a');
    featuresLink.classList.add('btn');
    featuresLink.setAttribute('href', features[i].link);
    featuresLink.innerText = 'Read more';
    newFeatures.appendChild(featuresLink);

    featuresContainer.appendChild(newFeatures);
}

