import Exception from './Exception';

export default class NotFoundException extends Exception {
  constructor(resource) {
    super(`${resource} not found`, 1001);
  }
}
