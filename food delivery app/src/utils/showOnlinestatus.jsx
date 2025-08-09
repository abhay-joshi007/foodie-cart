import { useEffect, useState } from "react";

const useOnlineStatus = () => {
    const [status, setStatus] = useState(navigator.onLine);

    useEffect(() => {
        const handleOffline = () => setStatus(false);
        const handleOnline = () => setStatus(true);

        window.addEventListener("offline", handleOffline);
        window.addEventListener("online", handleOnline);
    }, []);

    return status;
};

export default useOnlineStatus;
