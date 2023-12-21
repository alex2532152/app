import axios, { AxiosError, AxiosResponse } from "axios";
import { makeAutoObservable } from "mobx";
import { PromiseObserver, fromPromise } from "../../../../common/utils/fromPromise";
import { User } from "../../models/User";

export class UserStore {
    userState?: PromiseObserver<
        AxiosResponse<User>,
        AxiosError
    >;

    get loading() {
        return this.userState?.pending !== false;
    }

    get user() {
        return this.userState?.value?.data
    }

    constructor() {
        makeAutoObservable(this)
    }

    getUserData = async (id: string) => {
        const promise = axios.get(`https://dummyjson.com/users/${id}`);
        this.userState = fromPromise(promise)

        await promise
    }

}