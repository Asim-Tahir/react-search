import { Aside, Nav, Main } from "@/views";
import { Search } from "@/context";

export default function App(): React.ReactElement {
  return (
    <Search.Provider>
      <Aside />
      <div className="flex flex-col w-full h-full">
        <Nav />
        <Main />
      </div>
    </Search.Provider>
  );
}
