import {
  createContext,
  useState,
  useMemo,
  Dispatch,
  SetStateAction,
} from "react";

import type { User } from "@types";

export interface ISearchContext {
  isSearched: boolean;
  isFiltered: boolean;

  filterByJobTitle: string;
  setFilterByJobTitle: Dispatch<SetStateAction<string>>;

  filterByArea: string;
  setFilterByArea: Dispatch<SetStateAction<string>>;

  searchByName: string;
  setSearchByName: Dispatch<SetStateAction<string>>;

  searchByCompany: string;
  setSearchByCompany: Dispatch<SetStateAction<string>>;

  searchableData: Array<User>;
  setSearchableData: Dispatch<SetStateAction<Array<User>>>;
}

export interface ISearchProviderProps {
  children: React.ReactNode;
}

const SearchContext = createContext<ISearchContext>({
  isSearched: false,
  isFiltered: false,

  filterByJobTitle: "",
  setFilterByJobTitle: () => void {},

  filterByArea: "",
  setFilterByArea: () => void {},

  searchByName: "",
  setSearchByName: () => void {},

  searchByCompany: "",
  setSearchByCompany: () => void {},

  searchableData: [],
  setSearchableData: () => void {},
});

function SearchProvider({
  children,
}: ISearchProviderProps): React.ReactElement {
  const [filterByJobTitle, setFilterByJobTitle] = useState<string>("");
  const [filterByArea, setFilterByArea] = useState<string>("");
  const [searchByName, setSearchByName] = useState<string>("");
  const [searchByCompany, setSearchByCompany] = useState<string>("");

  const [searchableData, setSearchableData] = useState<Array<User>>([]);

  const isSearched = useMemo<boolean>(
    () => !!searchByName || !!searchByCompany,
    [searchByName, searchByCompany]
  );
  const isFiltered = useMemo<boolean>(
    () => !!filterByJobTitle || !!filterByArea,
    [filterByJobTitle, filterByArea]
  );

  return (
    <SearchContext.Provider
      value={{
        isSearched,
        isFiltered,

        filterByJobTitle,
        setFilterByJobTitle,

        filterByArea,
        setFilterByArea,

        searchByName,
        setSearchByName,

        searchByCompany,
        setSearchByCompany,

        searchableData,
        setSearchableData,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export default {
  Context: SearchContext,
  Provider: SearchProvider,
};
