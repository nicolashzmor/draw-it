import {useEffect, useState} from "react";

export const useSecondsTimer = (initialTime: number, callback: () => void) => {
    const [isRunning, setIsRunning] = useState(true)
    const [counter, setCounter] = useState(initialTime);
    useEffect(() => {
        let intervalId: NodeJS.Timer;
        if (isRunning && counter > 0) {
            intervalId = setInterval(() => {
                setCounter(counter => Math.max(counter - 1, 0))
            }, 1000)
        } else if (counter === 0) {
            callback();
        }
        return () => clearInterval(intervalId);
    }, [isRunning, counter, callback])
    return {
        remaining: counter,
        pause: () => setIsRunning(false),
        resume: () => setIsRunning(true),
        restart: (time?: number) => setCounter(time || initialTime)
    }
}