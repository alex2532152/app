import { useNavigate } from 'react-router-dom';
import { Title } from '../../../../common/components/Title';
import { UserStore } from '../stores/UserStore';
import { Spin } from '../../../../common/components/Spin';
import { observer } from 'mobx-react-lite';
import { useTranslation } from 'react-i18next';
import { getFullName } from '../../../../common/utils/getFullName';
import { UserInfoTitle } from './components/UserInfoTitle';
import { UserInfo } from './components/UserInfo';
import { Image, Layout } from 'antd';
import { AdditionalBlockInfo } from './components/AdditionalBlockInfo';
import './UserContent.less';

const { Content } = Layout;

type UserContentProps = {
  store: UserStore;
};

export const UserContent = observer(({ store }: UserContentProps) => {
  const { loading, user } = store;

  const { t } = useTranslation('user');
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate('../');
  };

  if (loading || !user) {
    return <Spin />;
  }

  const {
    firstName,
    lastName,
    image,
    email,
    phone,
    age,
    birthDate,
    bloodGroup,
    gender,
    address,
    bank,
    company,
  } = user;

  return (
    <Content className="user">
      <Title
        value={t('title', { user: getFullName(firstName, lastName) })}
        goBack={handleGoBack}
      />
      <div className="user-main-block">
        <Image
          className="user-main-block-image"
          width={200}
          src={image}
          preview={{
            mask: t('imagePreview'),
          }}
        />
        <div className="user-main-block-info">
          <UserInfoTitle title={t('personalTitle')} />
          <UserInfo value={firstName} name={t('firstName')} />
          <UserInfo value={lastName} name={t('lastName')} />
          <UserInfo value={gender} name={t('gender')} />
          <UserInfo value={phone} name={t('phone')} />
          <UserInfo value={email} name={t('email')} />
          <UserInfo value={age} name={t('age')} />
          <UserInfo value={birthDate} name={t('birthDate')} />
          <UserInfo value={bloodGroup} name={t('bloodGroup')} />
          <UserInfo value={address.address} name={t('address.addressInfo')} />
          <UserInfo value={address.postalCode} name={t('address.postalCode')} />
          <UserInfo value={address.state} name={t('address.state')} />
        </div>
      </div>
      <AdditionalBlockInfo>
        <UserInfoTitle title={t('bank.bankInfo')} />
        <UserInfo value={bank.cardExpire} name={t('bank.cardExpire')} />
        <UserInfo value={bank.cardNumber} name={t('bank.cardNumber')} />
        <UserInfo value={bank.cardType} name={t('bank.cardType')} />
        <UserInfo value={bank.currency} name={t('bank.currency')} />
        <UserInfo value={bank.iban} name={t('bank.iban')} />
      </AdditionalBlockInfo>
      <AdditionalBlockInfo>
        <UserInfoTitle title={t('company.bankCompany')} />
        <UserInfo value={company.department} name={t('company.department')} />
        <UserInfo value={company.name} name={t('company.name')} />
      </AdditionalBlockInfo>
    </Content>
  );
});
