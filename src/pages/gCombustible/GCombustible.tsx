const GCombustible = () => {
  return <div>


   <div className="flex flex-col gap-2 p-6 sm:flex-row sm:items-center sm:gap-6 sm:py-4 bg-white rounded-xl shadow-md max-w-xl mx-auto">
      <img
        className="mx-auto block h-24 w-24 rounded-full sm:mx-0 sm:shrink-0 object-cover"
        src="https://randomuser.me/api/portraits/women/68.jpg"
        alt="Erin Lindford"
      />
      <div className="space-y-2 text-center sm:text-left">
        <div className="space-y-0.5">
          <p className="text-lg font-semibold text-gray-900">Erin Lindford</p>
          <p className="text-sm text-gray-500">Product Engineer</p>
        </div>
       <button className="border border-purple-200 px-4 py-2 text-sm text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 rounded-full transition-colors duration-200">
          Message
        </button>

      </div>
    </div>

    <div>
      <label htmlFor="price" className="block text-sm/6 font-medium text-gray-900">
        Price
      </label>
      <div className="mt-2">
        <div className="flex items-center rounded-full bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
          <input
            id="price"
            name="price"
            type="text"
            placeholder="0.00"
            className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
          />
        </div>
      </div>
    </div>


  </div>
};

export default GCombustible;
