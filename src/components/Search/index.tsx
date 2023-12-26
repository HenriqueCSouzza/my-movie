import { useState } from "react";

export default function Search() {
  const [query, setQuery] = useState("");
  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    window.location.href = `/search?query=${encodeURIComponent(query)}`;
  };

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  return (
    <form
      className="bg-white flex justify-between rounded-3xl"
      onSubmit={onSubmit}
    >
      <input
        name="query"
        type="text"
        placeholder="Buscar por um Filme, Série ou Pessoa..."
        className="w-full rounded-3xl outline-none text-gray-500 pl-5 pr-3"
        value={query}
        onChange={onInputChange}
      />
      <input
        type="submit"
        value="Search"
        className="cursor-pointer"
        style={{
          height: "46px",
          padding: "10px 26px",
          background: `linear-gradient(22deg, rgba(30,213,169,1) 0%, rgba(1,180,228,1) 100%)`,
          border: 0,
          borderRadius: "30px",
          color: "#fff",
          fontWeight: 700,
        }}
      />
    </form>
  );
}
