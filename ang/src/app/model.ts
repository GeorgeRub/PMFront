export class Model{
  user;
  items;
  constructor() {
    this.user = 'Adam';
    this.items = [
      new TodoItem('Buy Flowers', false),
      new TodoItem('Collect Tickets', true)
    ];
  }
}

export class TodoItem{
  action;
  done;
  constructor(action, done) {
    this.action = action;
    this.done = done;
  }
}
