import axios from "axios";
import type { CompanySearch } from "./company";

interface SearchResponse {
  data: CompanySearch[];
}

export const searchCompanies = async (query: string) => {
  try {
    const data = await axios.get<SearchResponse>(
      `https://financialmodelingprep.com/stable/search-name?query=${query}&apikey=${
        import.meta.env.VITE_API_KEY
      }`
    );
    return data.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", error.message);
      return error.message;
    } else {
      console.error("Unexpected error:", error);
      return "An unexpected error occurred";
    }
  }
};
