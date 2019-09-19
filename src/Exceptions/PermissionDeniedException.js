import Exception from './Exception';

export default class PermissionDeniedException extends Exception {
  constructor() {
    super('Permission Denied', 1005);
  }
}
