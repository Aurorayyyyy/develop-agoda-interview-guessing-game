import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import { useRef, useState } from "react"

export default function GuessPage() {
  const [msg, setMsg] = useState('')
  const { logout, guess } = useAuth()
  const numberRef = useRef(0)
  const navigator = useNavigate()
  const handleLogOut = () => {
    logout()
    navigator('/login')
  }
  const handleGuess = async (e) => {
    e.preventDefault()
    const number = parseInt(numberRef.current.value, 10)
    const res = await guess(number)
    setMsg(res)
  }
  return (
    <div className="item-center">
      <div className="text-sm">
        <p>
          {msg && <p className="text-lg font-bold text-center text-red-600">{msg}</p>}
        </p>  
      </div>
      <form onSubmit={handleGuess} className="space-y-6">
        <div>
          <label
            htmlFor="guessnumber"
            className="block text-lg font-medium text-gray-900 text-center"
          >
            Guess Number from 1 - 10
          </label>
          <div className="mt-2">
            <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
              <input
                id="price"
                name="price"
                type="number"
                ref={numberRef}
                placeholder=""
                className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-base"
              />
            </div>
          </div>
        </div>
      </form>
      <div className="flex justify-center items-center pt-6 container">
        <div>
        <button onClick={handleLogOut} className="items-center bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
          Logout
        </button>
        </div>
      </div>

    </div>

  );
}
