import { makeAutoObservable } from 'mobx';
import { PaginationState } from '../../models/PaginationState';

export class PaginationStore {
  state: PaginationState = {
    current: 1,
    pageSize: 5,
  };

  get dto() {
    return {
      page: this.state.current - 1,
      size: this.state.pageSize,
    };
  }

  constructor(defaults?: Partial<PaginationState>) {
    makeAutoObservable(this);
    this.state = { ...this.state, ...defaults };
  }

  set = (current: number, pageSize: number) => {
    this.state = {
      current,
      pageSize,
    };
  };
}
