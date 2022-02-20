import { Search as SearchContext } from "@/context";
import { useAppSelector } from "@/store/hooks";
import { companySelector } from "@/store/search";

export default function Nav(): React.ReactElement {
  const { setSearchByName, setSearchByCompany } = useContext(
    SearchContext.Context
  );

  const companies = useAppSelector((state) => companySelector(state));

  function handleChangeNameInput(e: React.ChangeEvent<HTMLInputElement>): void {
    setSearchByName(e.target.value);
  }

  function handleChangeCompanyInput(
    e: React.ChangeEvent<HTMLInputElement>
  ): void {
    setSearchByCompany(e.target.value);
  }

  return (
    <nav className="flex justify-start space-x-8 bg-white border-b border-gray-200 col-start-3 col-span-full z-30 w-full px-3 py-3 lg:px-5 lg:pl-3 h-16">
      <input
        type="search"
        placeholder="Name"
        className="relative min-w-0 block w-72 h-min px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        aria-label="Search Name"
        onChange={handleChangeNameInput}
      />

      <input
        type="search"
        placeholder="Company - Autocomplete"
        list="companies"
        className="relative min-w-0 block w-72 h-min px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        onChange={handleChangeCompanyInput}
      />

      <datalist id="companies">
        {companies?.map((company) => (
          <option key={company.id} value={company.value} />
        ))}
      </datalist>

      <button className="px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center justify-center">
        Search
      </button>
    </nav>
  );
}
