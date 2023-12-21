import { useTranslation } from 'react-i18next';
import { Result } from 'antd';
import { Title } from '../../../common/components/Title';

export const CurrencyContent = () => {
  const { t } = useTranslation('currency');
  return (
    <>
      <Title value={t('title')} />
      <Result
        status="404"
        title={t('result.title')}
        subTitle={t('result.description')}
      />
    </>
  );
};
