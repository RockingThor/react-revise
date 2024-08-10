import "./App.css";
import Select, { SelectOption } from "./Select";

const options: SelectOption[] = [
  { option: "Hello", value: 1 },
  { option: "Hello", value: 2 },
  { option: "Hello", value: 3 },
  { option: "Hello", value: 4 },
];

function App() {
  return (
    <>
      <Select options={options} multiple />
    </>
  );
}

export default App;
