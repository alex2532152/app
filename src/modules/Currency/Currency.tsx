import { Suspense } from 'react';
import { CurrencyContent } from './СurrencyContent';

export const Currency = () => {
  return (
    <Suspense>
      <CurrencyContent />
    </Suspense>
  );
};
