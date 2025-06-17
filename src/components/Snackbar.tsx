import React, { useEffect, useState } from 'react';

interface SnackbarProps {
  message: string;
  isVisible: boolean;
  onDismiss: () => void;
}

const Snackbar: React.FC<SnackbarProps> = ({ message, isVisible, onDismiss }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onDismiss();
      }, 3000); // Auto-dismiss after 3 seconds

      return () => clearTimeout(timer);
    }
  }, [isVisible, onDismiss]);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-gray-800 text-white p-4 rounded-md shadow-lg transition-opacity duration-300 ease-in-out">
      {message}
    </div>
  );
};

export default Snackbar;
