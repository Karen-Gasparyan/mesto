export class Api {
  constructor(config) {
    this._url = config.url;
    this._headers = config.headers;
  }

  getInitialCards() {
    return fetch(this._url, {
      method: 'GET',
      headers: this._headers
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        // если ошибка, отклоняем промис
        return Promise.reject(`Ошибка: ${res.status}`);
      })
  }
  getUserInfo() {
    return fetch(this._url, {
      method: 'PATCH',
      headers: this._headers,
    
      body: JSON.stringify({
        name: 'Marie Skłodowska Curie',
        about: 'Physicist and Chemist'  
      })
    });
    
  }
  // getCard() {
  //   return fetch('https://mesto.nomoreparties.co/v1/cohort-20/cards', {
  //     method: 'POST',
  //     headers: {
  //       authorization: 'e4e57aba-b1e6-4fc1-8294-ad6d7d0fcf8d',
  //       'Content-Type': 'application/json'
  //     },
  //      body: JSON.stringify({
  //      name: 'card name',
  //      link: 'card link'
  //     })
  //   }); 
  // }
}