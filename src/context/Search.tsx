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

  searchByJobTitle: string;
  setSearchByJobTitle: Dispatch<SetStateAction<string>>;

  searchByArea: string;
  setSearchByArea: Dispatch<SetStateAction<string>>;

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

  searchByJobTitle: "",
  setSearchByJobTitle: () => void {},

  searchByArea: "",
  setSearchByArea: () => void {},

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
  const [searchByJobTitle, setSearchByJobTitle] = useState<string>("");
  const [searchByArea, setSearchByArea] = useState<string>("");
  const [searchByName, setSearchByName] = useState<string>("");
  const [searchByCompany, setSearchByCompany] = useState<string>("");

  const [searchableData, setSearchableData] = useState<Array<User>>([]);

  const isSearched = useMemo<boolean>(
    () =>
      !!searchByJobTitle ||
      !!searchByArea ||
      !!searchByName ||
      !!searchByCompany,
    [searchByJobTitle, searchByArea, searchByName, searchByCompany]
  );

  return (
    <SearchContext.Provider
      value={{
        isSearched,

        searchByJobTitle,
        setSearchByJobTitle,

        searchByArea,
        setSearchByArea,

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
