import { useCallback, useMemo, useState } from 'react';
import i18next from 'i18next';
import { DownOutlined } from '@ant-design/icons';
import { Button, Dropdown, MenuProps } from 'antd';
import classNames from 'classnames';
import { LANGUAGE_LIST } from './constants/languages';
import './LanguageMenu.less';

export const LanguageMenu = () => {
  const [overlayOpen, setOverlayOpen] = useState(false);

  const handleChangeLanguage = useCallback((language: string) => {
    localStorage.setItem('language', language);
    i18next.changeLanguage(language);
  }, []);

  const languageClickHandlers = useMemo(
    () =>
      Object.keys(LANGUAGE_LIST).reduce<Record<string, () => void>>(
        (acc, key) => ({
          ...acc,
          [key]() {
            setOverlayOpen(false);
            handleChangeLanguage(key);
          },
        }),
        {},
      ),
    [handleChangeLanguage],
  );

  const items: MenuProps['items'] = Object.entries(LANGUAGE_LIST).map(
    ([key, value]) => ({
      key,
      label: (
        <div
          onClick={languageClickHandlers[key]}
          className={classNames('language-dropdown-option', {
            'language-dropdown-option-selected': i18next.language === key,
          })}
        >
          {value}
        </div>
      ),
    }),
  );

  return (
    <Dropdown
      onOpenChange={setOverlayOpen}
      open={overlayOpen}
      menu={{ items }}
      className="language-menu"
      overlayClassName="language-dropdown"
      arrow={{ pointAtCenter: true }}
      placement="bottomRight"
      trigger={['click']}
    >
      <Button type="text" className="ant-dropdown-link">
        <span className="language-menu-current">
          {LANGUAGE_LIST[i18next.language]}
        </span>
        <DownOutlined />
      </Button>
    </Dropdown>
  );
};
