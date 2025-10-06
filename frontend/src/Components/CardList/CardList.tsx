import type React from "react";
import type { JSX, SyntheticEvent } from "react";
import type { CompanySearch } from "../../company";
import Card from "../Card/Card";
import { v4 as uuidv4 } from "uuid";

interface Props {
  searchResults: CompanySearch[];
  onPortfolioCreate?: (e: SyntheticEvent) => void;
}
const CardList: React.FC<Props> = ({
  searchResults,
  onPortfolioCreate,
}): JSX.Element => {
  return (
    <>
      {searchResults.length > 0 ? (
        searchResults.map((result) => (
          <Card
            key={uuidv4()}
            id={result.symbol}
            searchResult={result}
            onPortfolioCreate={onPortfolioCreate}
          />
        ))
      ) : (
        <h1>No Results Found</h1>
      )}
    </>
  );
};

export default CardList;
