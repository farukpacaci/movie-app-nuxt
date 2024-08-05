import type { IUndetailedResults } from "./undetailed-results";

export interface IResultsResponse {
    page: number;
    results: IUndetailedResults[];
    total_pages: number;
    total_results: number;
}