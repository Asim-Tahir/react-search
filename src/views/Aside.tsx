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
        onChange={handleChangeJobTitleInput}
        aria-describedby="filter-button"
      />
      <select onChange={handleChangeAreaSelect}>
        <option value="">Area</option>
        {areas?.map((area) => (
          <option key={area.id} value={area.value}>
            {area.value}
          </option>
        ))}
      </select>
      <button id="filter-button">Filter</button>
    </aside>
  );
}
