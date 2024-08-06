import LoadingImg from "../../assets/giphy.webp"
import { useNavigate } from "react-router-dom"

const LoadingState = () => {

  const navigate = useNavigate()

  setTimeout(() => {
    navigate("/login")
  }, 3000);

  return (
    <div className="flex flex-col items-center justify-center mt-32">
        <img src={LoadingImg} alt="Loading" className="w-80"/>
        <p className="w-1/2 text-sm font-medium text-slate-700 text-center leading-7 mt-5">Welcome to Hirito Notes</p>
    </div>
  )
}

export default LoadingState