import { makeAutoObservable } from 'mobx';

type PromiseState = 'pending' | 'fulfilled' | 'rejected';

export class PromiseObserver<TValue, TError = Error> {
  state: PromiseState = 'pending';

  value?: TValue = undefined;

  error?: TError = undefined;

  constructor(target: Promise<TValue>, oldValue?: TValue) {
    this.value = oldValue;

    makeAutoObservable(this);

    target.then(this.onResolve).catch(this.onReject);
  }

  private onReject = (error: TError) => {
    this.error = error;
    this.state = 'rejected';
  };

  private onResolve = (value: TValue) => {
    this.value = value;
    this.state = 'fulfilled';
  };

  get pending() {
    return this.state === 'pending';
  }

  get rejected() {
    return this.state === 'rejected';
  }

  get fulfilled() {
    return this.state === 'fulfilled';
  }
}

export function fromPromise<TValue, TError = Error>(
  origPromise: Promise<TValue>,
  options?: { oldData?: TValue },
): PromiseObserver<TValue, TError> {
  return new PromiseObserver<TValue, TError>(origPromise, options?.oldData);
}
