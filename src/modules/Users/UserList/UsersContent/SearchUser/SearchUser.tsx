import { Col, Input, Row } from "antd";
import { UsersStore } from '../../stores/UsersStore';
import { useTranslation } from "react-i18next";
import './SearchUser.less';

const { Search } = Input;

type SearchUserProps = {
    store: UsersStore;
    disabled: boolean;
}

export const SearchUser = ({store, disabled}: SearchUserProps) => {
    const {t} = useTranslation('users');
    const {pagination, setSearchTream} = store;
    const onSearch = (value:string) => {
        pagination.set(1, 5);
        setSearchTream(value);
    }

    return (<Row className="search-user" justify='end'>
              <Col>
                <Search 
                    className="search-user-input"
                    placeholder={t('searchPlaceholder')}
                    onSearch={onSearch}
                    enterButton
                    disabled={disabled}
                 />
              </Col>
            </Row>)
}