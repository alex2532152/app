import { action, makeAutoObservable, reaction } from "mobx";
import { PromiseObserver, fromPromise } from "../../../common/utils/fromPromise";
import axios, { AxiosResponse, AxiosError } from "axios";
import { PaginationStore } from "../../../common/store/PaginationStore";
import { UsersData } from "../models/UsersData";

export class UsersStore {

    usersState?: PromiseObserver<
        AxiosResponse<UsersData>,
        AxiosError
    >;

    newUsersState?: PromiseObserver<
        AxiosResponse<UsersData>,
        AxiosError
    >;

    searchTream = '';

    pagination = new PaginationStore();

    get usersData() {
        return this.newUsersState?.value?.data.users

    }

    get usersTotal() {
        return this.usersState?.value?.data.total
    }

    get loading() {
        return this.newUsersState?.pending !== false;
    }


    constructor() {
        makeAutoObservable<UsersStore, 'setNewUsersState' >(this, {
            getUserData: false,
            setNewUsersState: action,
            setUsersState: action,
        });

        reaction(
            ()=>this.searchTream,
            ()=>this.getUserData(),
        )
    }

    getUserData  = async () =>{
        const promise = axios.get(`https://dummyjson.com/users${this.searchTream  ? '/search': ''}`,{
            params: {
                skip: this.pagination.dto.page * this.pagination.dto.size,
                limit: this.pagination.dto.size,
                ...(this.searchTream ? {q: this.searchTream }: undefined),
            }
        })
        this.setNewUsersState(fromPromise(promise))
        await promise
    }

    setUsersState = (value: UsersStore['usersState']) => {
        this.usersState = value;
    }

    setSearchTream = (value: string) => {
        this.searchTream = value;
    }

    private setNewUsersState = (value: UsersStore['newUsersState']) => {
        this.newUsersState = value;
    }

}