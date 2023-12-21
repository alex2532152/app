import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './app';
import { startup } from './startup';
import { ConfigProvider } from 'antd';
import { defaultThemeSettings } from './common/constants/defaultThemeSettings';
import { BrowserRouter } from 'react-router-dom';

startup().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <ConfigProvider theme={defaultThemeSettings}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ConfigProvider>
    </React.StrictMode>,
  );
});
