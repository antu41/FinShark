import React, { type ChangeEvent, type JSX, type SyntheticEvent } from "react";

interface Props {
  onSearchSubmit: (e: SyntheticEvent) => void;
  search: string | undefined;
  hangleSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Search: React.FC<Props> = ({
  onSearchSubmit,
  search,
  hangleSearchChange,
}: Props): JSX.Element => {
  return <>
  <form onSubmit={onSearchSubmit}>
    <input value={search} onChange={hangleSearchChange} />
  </form>
  </>;
};

export default Search;
