
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";



export default function Page404() {

    const navigate = useNavigate()
    const delayTime = 3000;
    const [timer, setTimer] = useState(delayTime)

    useEffect(() => {
        const timer = setInterval(() => {
            setTimer((prevTimer) => prevTimer - 1000);
        }, 1000);

        setTimeout(() => {
            navigate('/auth')
        }, delayTime)

        return () => {
            clearInterval(timer);
        }
    }, [])

  return (
    <div>
      <main className="bg-whtie h-full max-w-sm flex justify-center items-center">
        <h1>Page Not Found</h1>
      </main>
    </div>
  );
}
