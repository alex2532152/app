import { Suspense, useEffect, useState } from "react"
import { UsersStore } from "./stores/UsersStore"
import { observer } from "mobx-react-lite"
import { autorun } from "mobx"
import { UsersContent } from "./UsersContent"

export const Users = observer(() => {
    const [store] = useState(() => new UsersStore())
    const {getUserData, setUsersState, newUsersState} = store

    useEffect(() => {
        getUserData()}
    , [getUserData, store.pagination.dto])

    useEffect (() => 
         autorun(() => {
            if(newUsersState?.pending === false){
                setUsersState(newUsersState)
            }
        }),
        [newUsersState, setUsersState])

    return <Suspense>
        <UsersContent store={store}/>
    </Suspense>
})