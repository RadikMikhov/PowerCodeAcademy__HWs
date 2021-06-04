let photos = [
    {
        photo: "https://tmtown.s3.amazonaws.com/uploads/user/image/231073/super_large_esertozum53_avatar.jpg"
    },
    {
        photo: "https://drscdn.500px.org/user_avatar/412861/q%3D85_w%3D300_h%3D300/v2?webp=true&v=1&sig=918553ac86b6cbc074c14abb74ca4342dc5ed1656163a2519cd4afdbe8f7e5a5"  
    },
    {
        photo: "https://d38we5ntdyxyje.cloudfront.net/70461/profile/ZGPWIYIN_avatar_medium_square.jpg"  
    },

    {
        photo: "https://ddxcu89oqzgqh.cloudfront.net/uploads/account/avatar/5612f7c71bfa211de505ae93/65896576_2276110369172046_2073248260729864192_n.jpg"  
    },

    {
        photo: "https://libruk.com.ua/wp-content/uploads/user-img-22-300x300.jpg"  
    },

    {
        photo: "https://www.b17.ru/foto/users/user_671959_300.jpg"  
    },

    {
        photo: "https://www.be-in.ru/media/beingallery/uploads/staticcorestatic/2021/04/22/supreme-the-north-face-ss21-03.jpg.300x300_q77_box-0%2C76%2C800%2C651_crop.jpg"  
    },

    {
        photo: "https://eatris.eu/wp-content/uploads/2016/05/Screen-Shot-2016-07-11-at-13.55.19-300x300.png"  
    },

    {
        photo: "http://www.woman-ukraine.net/wp-content/uploads/2018/10/marriage-woman-from-Ukraine-300x300.jpg"  
    },
]

let userList = document.getElementById('userList');

for ( let i = 0; i < photos.length; i++ ) {
    let newUser = document.createElement('div');
    newUser.classList.add('user__item');

    let userPhoto = document.createElement('img');
    userPhoto.classList.add('user__photo');
    userPhoto.setAttribute('src', photos[i].photo);
    newUser.appendChild(userPhoto);

    userList.appendChild(newUser);
}

let xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
    if( xhr.readyState === 4) {
        let data = JSON.parse(xhr.responseText);
        
        for ( let i = 0; i < data.length; i++) {
            let newUserItem = document.createElement('div');
            newUserItem.classList.add('user__item');

            let newInfo = document.createElement('div');
            newInfo.classList.add('user__info');
            newUserItem.appendChild(newInfo);

            // Добавляем имя нового пользователя
            let newUserName = document.createElement('div');
            newUserName.classList.add('user__name');
            newUserName.innerText = data[i].name;
            newInfo.appendChild(newUserName);

            // Добавляем новую должность
            let newPosition = document.createElement('div');
            newPosition.classList.add('user__position');
            newPosition.innerText = data[i].company.catchPhrase;
            newInfo.appendChild(newPosition);

            //  Добавляем новую компанию
            let newCompany = document.createElement('div');
            newCompany.classList.add('user__company');
            newCompany.innerText = data[i].company.name;
            newInfo.appendChild(newCompany);

            //  Добавляем новый эмейл
            let newEmail = document.createElement('div');
            newEmail.classList.add('user__email');
            newEmail.innerText = data[i].email;
            newInfo.appendChild(newEmail);

            userList.appendChild(newUserItem);
        }
    }
}

xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');

xhr.send();


