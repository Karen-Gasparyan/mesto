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

  setNewCard(data) {
    return fetch(this._url, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(data)
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      // если ошибка, отклоняем промис
      return Promise.reject(`Ошибка: ${res.status}`);
    })
    
      
  }




  // getUserInfo() {
  //   return fetch(this._url, {
  //     method: 'PATCH',
  //     headers: this._headers,
    
  //     body: JSON.stringify({
  //       name: 'Marie Skłodowska Curie',
  //       about: 'Physicist and Chemist'  
  //     })
  //   });
    
  // }
}