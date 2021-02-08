export class UserInfo {
  constructor(userInfo) {
    this._userName = document.querySelector(userInfo.userName);
    this._userJob = document.querySelector(userInfo.userjob);
  }

  getUserInfo() {
    return {
      name: this._userName.textContent,
      job: this._userJob.textContent
    };
  }

  setUserInfo(name, job) {
    this._userName.textContent = name;
    this._userJob.textContent = job;
  }
}


//   ¯\_(ツ)_/¯   THE END...