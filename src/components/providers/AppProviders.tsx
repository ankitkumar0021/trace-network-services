'use client';

import React from 'react';
import { Provider } from 'react-redux';
import Modals from '@/components/layouts/modal/Modals.jsx'
import Store from '@/redux/store';

interface ProvidersProps {
  children: React.ReactNode;
}

export function AppProviders({ children }: ProvidersProps) {

  return (
    <Provider store={Store}>
        <Modals />
        {children}
    </Provider>
  );
}
