import React, { useEffect, useState } from "react";
import { WifiOff, RefreshCcw } from "lucide-react";

export default function OfflinePage() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  if (isOnline) return null; // ✅ Agar online hai to ye page show na ho

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-gray-100 to-gray-200 text-center px-6 z-50">
      <WifiOff size={80} className="text-red-500 mb-6" />
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
        No Internet Connection
      </h1>
      <p className="text-gray-600 max-w-md mb-6">
        It looks like you’re offline. Please check your Wi-Fi or mobile data
        and try again.
      </p>

      <button
        onClick={() => window.location.reload()}
        className="flex items-center gap-2 bg-[#5F6FFF] text-white px-6 py-3 rounded-full shadow-md hover:bg-[#3f4ec4] transition"
      >
        <RefreshCcw size={20} />
        Retry
      </button>
    </div>
  );
}
