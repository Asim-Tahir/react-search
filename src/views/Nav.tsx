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
        name="name"
        placeholder="Name"
        title="Search by name"
        onChange={handleChangeNameInput}
      />

      <input
        type="search"
        name="company"
        placeholder="Company - Autocomplete"
        title="Search by company"
        list="companies"
        onChange={handleChangeCompanyInput}
      />

      <datalist id="companies">
        {companies?.map((company) => (
          <option key={company.id} value={company.value} />
        ))}
      </datalist>

      <button id="search-button" title="Search Button">
        Search
      </button>
    </nav>
  );
}
