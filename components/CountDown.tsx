import { useEffect, useState } from "react";

export default function CountDownWidget({ kickOffTime }: CountDownWidgetProps) {
  const [[days, hrs, mins, secs], setTime] = useState([0, 0, 0, 0]);

  useEffect(() => {
    const timerId = setInterval(() => {
      const diffTime: number = +kickOffTime - Date.now();

      let days: number = diffTime / (24 * 60 * 60 * 1000);
      let hours: number = (days % 1) * 24;
      let minutes: number = (hours % 1) * 60;
      let secs: number = (minutes % 1) * 60;

      [days, hours, minutes, secs] = [
        Math.floor(days),
        Math.floor(hours),
        Math.floor(minutes),
        Math.floor(secs),
      ];

      if (diffTime <= 0) {
        localStorage.removeItem("raffleCountdown");
        clearInterval(timerId);
      }

      setTime([days, hours, minutes, secs]);
    }, 1000);
  }, []);

  return (
    <div>
      <div className="font-black font-display text-white py-8 text-2xl md:text-3xl">
        Arriving in...
      </div>
      <div className="flex text-alt text-center gap-x-4">
        <CountDownBlock label="Days" value={days} />
        <CountDownBlock label="Hrs" value={hrs} />
        <CountDownBlock label="Mins" value={mins} />
        <CountDownBlock label="Secs" value={secs} />
      </div>
    </div>
  );
}

export function CountDownBlock({ label, value }: CountDownBlockProps) {
  return (
    <div className="rounded-md bg-light-800 p-6">
      <div className="border-b border-alt font-medium text-xl mb-1 pb-2">
        {value}
      </div>
      <div className="text-lg">{label}</div>
    </div>
  );
}

interface CountDownWidgetProps {
  kickOffTime: number;
}
interface CountDownBlockProps {
  label: string;
  value: number;
}
