export default function GuessPage() {
  return (
    <form action="#" method="POST" className="space-y-6">
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
              placeholder=""
              className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-base"
            />
          </div>
        </div>
      </div>
    </form>
  );
}
