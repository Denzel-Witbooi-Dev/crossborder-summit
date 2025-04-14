
import { useEffect, useState } from "react";
import { formatInTimeZone } from "date-fns-tz";
import { differenceInDays, differenceInHours, differenceInMinutes, differenceInSeconds } from "date-fns";

interface CountdownTimerProps {
  targetDate: Date;
  timezone?: string;
}

const CountdownTimer = ({ targetDate, timezone = "Africa/Johannesburg" }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      
      // Calculate time difference
      const days = differenceInDays(targetDate, now);
      const hours = differenceInHours(targetDate, now) % 24;
      const minutes = differenceInMinutes(targetDate, now) % 60;
      const seconds = differenceInSeconds(targetDate, now) % 60;
      
      setTimeLeft({ days, hours, minutes, seconds });
      
      // Clear interval when target date is reached
      if (targetDate <= now) {
        clearInterval(timer);
      }
    }, 1000);
    
    return () => clearInterval(timer);
  }, [targetDate, timezone]);

  const formatTime = (value: number): string => {
    return value.toString().padStart(2, '0');
  };

  // Get formatted date for display
  const formattedDate = formatInTimeZone(
    targetDate,
    timezone,
    "EEEE, MMMM do yyyy 'at' h:mm a"
  );

  return (
    <div className="w-full">
      <div className="grid grid-cols-4 gap-4 md:gap-6 text-center">
        <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-lg p-4 md:p-6 shadow-lg border border-white border-opacity-30">
          <div className="text-3xl md:text-5xl font-bold text-white">{formatTime(timeLeft.days)}</div>
          <div className="text-sm md:text-base uppercase tracking-wider text-white mt-2">Days</div>
        </div>
        <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-lg p-4 md:p-6 shadow-lg border border-white border-opacity-30">
          <div className="text-3xl md:text-5xl font-bold text-white">{formatTime(timeLeft.hours)}</div>
          <div className="text-sm md:text-base uppercase tracking-wider text-white mt-2">Hours</div>
        </div>
        <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-lg p-4 md:p-6 shadow-lg border border-white border-opacity-30">
          <div className="text-3xl md:text-5xl font-bold text-white">{formatTime(timeLeft.minutes)}</div>
          <div className="text-sm md:text-base uppercase tracking-wider text-white mt-2">Minutes</div>
        </div>
        <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-lg p-4 md:p-6 shadow-lg border border-white border-opacity-30">
          <div className="text-3xl md:text-5xl font-bold text-white">{formatTime(timeLeft.seconds)}</div>
          <div className="text-sm md:text-base uppercase tracking-wider text-white mt-2">Seconds</div>
        </div>
      </div>
      <div className="text-center mt-6 text-white text-lg">
        Until {formattedDate}
      </div>
    </div>
  );
};

export default CountdownTimer;
