import { useEffect ,useState} from "react";

function DateTime() {
    //Date and time
    const [timeDate, setTimeDate] = useState("");
    useEffect(() => {
        const interval = setInterval(() => {
          getTime();
        }, 1000);
        return () => clearInterval(interval);
      }, []);
      const getTime = () => {
        const now = new Date();
        const formatedDate = now.toLocaleDateString(); //returns the date in a human-readable format based on the user's locale (e.g., "MM/DD/YYYY" in the US or "DD/MM/YYYY"
        const formattedTime = now.toLocaleTimeString(); //returns the current time in a human-readable format based on the user's locale (e.g., "12:34:56 PM").
        setTimeDate(`${formatedDate} - ${formattedTime}`);
      };
    return (
    <h2 className="date-time">{timeDate}</h2>
  )
}

export default DateTime
