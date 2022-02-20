import { UserCard } from "@/components";
import { useGetUsersQuery } from "@/services/user";
import { Search as SearchContext } from "@/context";
import { useFuse } from "@/hooks";

import type { User } from "@types";

export default function Main(): React.ReactElement {
  const { data, error, isLoading } = useGetUsersQuery();
  const {
    searchableData,
    setSearchableData,

    searchByJobTitle,
    searchByName,
    searchByArea,
    searchByCompany,
  } = useContext(SearchContext.Context);

  const results = useFuse<User>(
    searchableData,
    {
      $or: [
        { $path: ["name"], $val: searchByName },
        { $path: ["company"], $val: searchByCompany },
        { $path: ["job"], $val: searchByJobTitle },
        { $path: ["area"], $val: searchByArea },
      ],
    },
    {
      keys: ["name", "company", "job", "area"],
    }
  );

  useEffect(() => {
    if (!isLoading && !error && data) {
      setSearchableData(data);
    }
  }, [isLoading, error, data, setSearchableData]);

  return (
    <main className="relative overflow-y-auto h-full w-full">
      <div className="flex flex-col space-y-8 mx-24 my-12">
        {results.length > 0 ? (
          results.map(({ item }) => <UserCard key={item.id} user={item} />)
        ) : (
          <p>No Users Found</p>
        )}
      </div>
    </main>
  );
}
