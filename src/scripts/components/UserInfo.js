export class UserInfo {
  constructor(userInfo) {
    this._userName = userInfo.userName;
    this._userJob = userInfo.userJob;
    this._userNameInput = userInfo.userNameInput;
    this._userJobInput = userInfo.userJobInput;
  }

  getUserInfo() {
    return {
      name: this._userName.textContent,
      job: this._userJob.textContent
    };
  }

  setUserInfo() {
    this._userName.textContent = this._userNameInput.value;
    this._userJob.textContent = this._userJobInput.value;
  }
}


//   ¯\_(ツ)_/¯   THE END...