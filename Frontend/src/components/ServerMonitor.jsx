import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const ServerMonitor = () => {
  const [serverStatus, setServerStatus] = useState(true);

  const checkServerStatus = async () => {
    try {
      await axios.get("http://localhost:4000/health"); 
      setServerStatus(true); // Server is up
    } catch (error) {
      if (serverStatus) {
        // Trigger SweetAlert if the server goes down
        Swal.fire({
          icon: 'error',
          title: 'Server Down!',
          text: 'The server is currently unavailable. Please try again later.',
          confirmButtonText: 'OK',
          allowOutsideClick: false,
          allowEscapeKey: false,
        });
      }
      setServerStatus(false); // Server is down
    }
  };

  useEffect(() => {
    const interval = setInterval(checkServerStatus, 3000); // Check every 5 seconds

    return () => clearInterval(interval); // Cleanup
  }, []);

  return null; // No UI elements displayed
};

export default ServerMonitor;
