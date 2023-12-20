import { observer } from "mobx-react-lite";
import { UserShortInfo } from "./components/UserShortInfo";
import { useTranslation } from "react-i18next";
import { UsersShortInfoSkeleton } from "./components/UsersShortInfoSkeleton";
import { SearchUser } from "./SearchUser";
import { UsersStore } from "../stores/UsersStore";
import { EmptyResult } from "../../../../common/components/EmptyResult";
import { StorePagination } from "../../../../common/components/StorePagination";
import { Title } from "../../../../common/components/Title/Title";

type UsersContentProps = {
    store: UsersStore;
}

export const UsersContent = observer(({ store }: UsersContentProps) => {
    const {t} = useTranslation('users');
    const {pagination, usersTotal, usersData, loading} = store;

    const getContent = () => {
        if(loading) {
            return <UsersShortInfoSkeleton count={5} active/>
        }

        if(usersData?.length === 0) {
            return <EmptyResult title={t('emptyResult.title')} description={t('emptyResult.description')} />
        }

        return <>
            {usersData && 
                usersData.map(({id, firstName, lastName, image, address}) => 
                    <UserShortInfo 
                        key={id}
                        id={id}
                        fullname={`${firstName} ${lastName}`}
                        avatarUrl={image}
                        address={address.address}
                    />)}
            </>
    }


    return (
        <>
        <Title value={t('title')} />
        <SearchUser store={store} disabled={loading} /> 
        {getContent()}
        {!!usersTotal && 
            <StorePagination
                store={pagination}
                total={usersTotal}
                simple
            />
        }
        </>
    )
})