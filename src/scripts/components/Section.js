export class Section {
  constructor({
    items,
    renderer
  }, containerSelector) {
    this._renderedItems = items;
    this._renderer = renderer;
    this._container = containerSelector;
  }

  renderItems() {
    this._renderedItems.forEach(item => {
      this._renderer(item);
    });
  }

  addItem(element) {
    this._container.append(element);
  }

  addNewItem(element) {
    this._container.prepend(element);
  }

  // _saveItem = (data) => {
  //   this._api
  //   .setNewCard(data)
  //   .then((data) => this.addNewItem(data))
  //   .catch(error => console.log(error))
  // }
}


//   ¯\_(ツ)_/¯   THE END...