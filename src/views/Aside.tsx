import { Search } from "@/context";
import { useAppSelector } from "@/store/hooks";
import { areasSelector } from "@/store/search";

export default function Aside(): React.ReactElement {
  const { setFilterByJobTitle, setFilterByArea } = useContext(Search.Context);

  const areas = useAppSelector((state) => areasSelector(state));

  function handleChangeJobTitleInput(
    e: React.ChangeEvent<HTMLInputElement>
  ): void {
    setFilterByJobTitle(e.target.value);
  }

  function handleChangeAreaSelect(
    e: React.ChangeEvent<HTMLSelectElement>
  ): void {
    setFilterByArea(e.target.value);
  }

  return (
    <aside className="w-72 h-screen flex-shrink-0 duration-75 box-border relative flex flex-col justify-center space-y-6 p-4 min-h-0 border-r border-gray-200 bg-white">
      <input
        type="search"
        placeholder="Job Title"
        className="relative min-w-0 block w-full h-min px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        onChange={handleChangeJobTitleInput}
        aria-label="Search"
        aria-describedby="search-button"
      />
      <select
        onChange={handleChangeAreaSelect}
        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      >
        <option value="">Area</option>
        {areas?.map((area) => (
          <option key={area.id} value={area.value}>
            {area.value}
          </option>
        ))}
      </select>
      <button className="px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center justify-center">
        Filter
      </button>
    </aside>
  );
}
