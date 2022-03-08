import { useEffect, useState } from "react";

const useCounter = (forwards = true) => { //디폴트가 true
    //반복되는 로직 입력
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (forwards) {
                setCounter((prevCounter) => prevCounter + 1);
            } else {
                setCounter((prevCounter) => prevCounter - 1);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [forwards]);

    return counter
}

export default useCounter