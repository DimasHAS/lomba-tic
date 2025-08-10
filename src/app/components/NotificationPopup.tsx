// src/app/components/NotificationPopup.tsx
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface NotificationPopupProps {
  message: string;
  type: 'success' | 'error';
  isVisible: boolean;
}

const NotificationPopup: React.FC<NotificationPopupProps> = ({ message, type, isVisible }) => {
  const bgColor = type === 'success' ? 'bg-green-500' : 'bg-red-500';
  const icon = type === 'success' ? 'check_circle' : 'error';

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className={`fixed top-0 left-1/2 -translate-x-1/2 mt-4 p-4 rounded-lg shadow-lg text-white flex items-center space-x-3 z-50 ${bgColor}`}
        >
          <span className="material-icons">{icon}</span>
          <p className="font-semibold">{message}</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NotificationPopup;
