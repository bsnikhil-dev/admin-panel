import type { SearchDropDownProps } from '../../types';

const SearchDropDown = ({
  showSearchDropDown,
  setShowSearchDropDown,
  setSearchValue,
  destinationList,
}: SearchDropDownProps) => {
  const handleSelect = (title: string) => {
    setSearchValue(title);
    setShowSearchDropDown(false);
  };

  return (
    showSearchDropDown && (
      <div className="absolute top-full left-0 w-full mt-5 bg-white text-black rounded-3xl p-4 shadow-lg z-10 max-h-70 overflow-y-auto custom-scrollbar">
        {destinationList.length === 0 ? (
          <div className="px-2 py-1 text-gray-500 cursor-default">No matches found</div>
        ) : (
          <ul className="space-y-2">
            {destinationList.map(destination => (
              <li
                key={destination.title}
                className="px-2 py-1 hover:bg-gray-100 cursor-pointer rounded"
                onClick={() => handleSelect(destination.title)}
              >
                {destination.title}
              </li>
            ))}
          </ul>
        )}
      </div>
    )
  );
};

export default SearchDropDown;
