export class UserInfo {
  constructor(userInfo) {
    this._userName = document.querySelector(userInfo.userName);
    this._userJob = document.querySelector(userInfo.userjob);
    this._userAvatar = document.querySelector(userInfo.userAvatar);
  }

  getUserInfo() {
    return {
      name: this._userName.textContent,
      job: this._userJob.textContent
    };
  }

  // getUserAvatar() {
  //   return {
  //     avatar: this._userAvatar.src
  //   };
  // }

  setUserInfo(name, job) {
    this._userName.textContent = name;
    this._userJob.textContent = job;
  }

  setUserAvatar(avatar) {
    this._userAvatar.src = avatar;
  }
}


//   ¯\_(ツ)_/¯   THE END...