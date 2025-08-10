'use client';
// src/app/components/NotificationContext.tsx
import React, { createContext, useContext, useState, ReactNode, useCallback } from 'react';
import NotificationPopup from './NotificationPopup';

interface NotificationContextType {
  showNotification: (message: string, type: 'success' | 'error') => void;
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export const NotificationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [message, setMessage] = useState('');
  const [type, setType] = useState<'success' | 'error'>('success');
  const [isVisible, setIsVisible] = useState(false);

  const showNotification = useCallback((msg: string, notifType: 'success' | 'error') => {
    setMessage(msg);
    setType(notifType);
    setIsVisible(true);

    const timer = setTimeout(() => {
      setIsVisible(false);
      setMessage('');
    }, 3000); // Notification disappears after 3 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <NotificationContext.Provider value={{ showNotification }}>
      {children}
      <NotificationPopup message={message} type={type} isVisible={isVisible} />
    </NotificationContext.Provider>
  );
};

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (context === undefined) {
    throw new Error('useNotification must be used within a NotificationProvider');
  }
  return context;
};
