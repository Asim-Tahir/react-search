import { Aside, Nav, Main } from "@/views";
import { Search } from "@/context";

export default function App(): React.ReactElement {
  const { isSearched } = useContext(Search.Context);

  return (
    <>
      {isSearched && <Aside />}
      <div className="flex flex-col w-full h-full">
        <Nav />
        <Main />
      </div>
    </>
  );
}
