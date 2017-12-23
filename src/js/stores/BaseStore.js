import { EventEmitter } from 'events';
import { registerCallback } from './Dispatcher';

export default class BaseStore extends EventEmitter {
  constructor() {
    super();
    this._maxListeners = 100;
    registerCallback(this.dispatcherCallback.bind(this));
  }

  removeChangeListener(eventName, callback) {
    this.removeListener(eventName, callback);
  }

  addChangeListener(eventName, callback) {
    this.on(eventName, callback);
  }
}
