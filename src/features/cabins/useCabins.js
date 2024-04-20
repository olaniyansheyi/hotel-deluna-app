import { useQuery } from "@tanstack/react-query";
import { getCarbins } from "../../services/apiCabins";

export function useCabins() {
  const {
    isLoading,
    data: cabins,
    error,
  } = useQuery({
    queryKey: ["cabins"],
    queryFn: getCarbins,
  });
  return { isLoading, error, cabins };
}
