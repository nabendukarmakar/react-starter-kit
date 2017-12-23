import { Dispatcher } from 'flux';

const fluxDispatcher = new Dispatcher();

export function dispatch(type, payload = {}) {
  if (!type) {
    throw new Error('You forgot to specify type.');
  }
  console.debug('Dispatch:', type, payload);
  fluxDispatcher.dispatch({ type, payload });
}

export function registerCallback(callback) {
  fluxDispatcher.register(callback);
}
