import { useEffect, useState } from 'react';

export default function useIOSPrompt() {
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    // Detects if device is on iOS 
    let isIos = function() {
      const userAgent = window.navigator.userAgent.toLowerCase();
      return /iphone|ipad|ipod/.test( userAgent );
    }
    // Detects if device is in standalone mode
    let isInStandaloneMode = () => ('standalone' in window.navigator) && (window.navigator.standalone);

    // Checks if should display install popup notification:
    if (isIos() && !isInStandaloneMode()) {
      setShowPrompt(true);
    }
  }, [])

  return showPrompt;
}