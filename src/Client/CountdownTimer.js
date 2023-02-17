import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
    // Sử dụng Hooks
    const [secondsLeft, setSecondsLeft] = useState(86400);
    // Set giá trị thay đổi liên tục
    useEffect(() => {
        const intervalId = setInterval(() => {
            setSecondsLeft((secondsLeft) => secondsLeft - 1);
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);
    // Tính giờ
    const hours = Math.floor(secondsLeft / 3600);
    // Tính phút
    const minutes = Math.floor((secondsLeft - hours * 3600) / 60);
    // Tính phút
    const seconds = secondsLeft % 60;

    return (
        <div>
            {/* Render Ra mã HTML */}
            {hours.toString().padStart(2, "0")}:
            {minutes.toString().padStart(2, "0")}:
            {seconds.toString().padStart(2, "0")}
        </div>
    );
};

export default CountdownTimer;