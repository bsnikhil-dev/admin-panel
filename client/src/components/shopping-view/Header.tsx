import logo from '../../assets/logo.png';
const ShoppingHeader = () => {
  return (
    <div className="bg-gray-200">
      <nav className="flex px-10 py-6 justify-between items-center">
        <img src={logo} className="w-15 h-15 rounded-full" />
        <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-xl mx-auto">
          <div className="flex flex-col w-md cursor-pointer border-r border-gray-300  px-4">
            <label className="text-xs font-semibold text-gray-500">Where</label>
            <input
              type="text"
              placeholder="Search destinations"
              className="text-sm text-gray-700 placeholder-gray-400 focus:outline-none"
            />
          </div>
          <div className="flex flex-col w-md  px-4">
            <label className="text-xs font-semibold text-gray-500">When</label>
            <input
              type="text"
              placeholder="Add dates"
              className="text-sm text-gray-700 placeholder-gray-400 focus:outline-none"
            />
          </div>
          <button className="bg-rose-400 hover:bg-rose-500 text-white p-3 rounded-full ml-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
              />
            </svg>
          </button>
        </div>

        <div className="flex flex-row gap-4">
          <button className="bg-red-200 p-4 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 2.25h1.386c.51 0 .96.343 1.093.834l.383 1.436m0 0L6.75 12.75h10.5l1.875-7.5H5.112m0 0L4.5 4.5m3 15.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm10.5 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </button>
          <button className="bg-blue-200 p-4 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 2.25h1.386c.51 0 .96.343 1.093.834l.383 1.436m0 0L6.75 12.75h10.5l1.875-7.5H5.112m0 0L4.5 4.5m3 15.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm10.5 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default ShoppingHeader;
