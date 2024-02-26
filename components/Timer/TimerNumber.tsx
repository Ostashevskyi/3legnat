import React from "react";

const TimerNumber = ({
  timerNumber,
  title,
}: {
  timerNumber: string;
  title: string;
}) => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center justify-center h-[60px] w-[60px] bg-neutral_02">
        <h5 className="text-neutral_05">{timerNumber}</h5>
      </div>
      <p className="regular-caption-2 text-neutral_04">{title}</p>
    </div>
  );
};

export default TimerNumber;
