import { useQuery } from "@tanstack/vue-query";
import { DB_ID, COLLECTION_DEALS } from "~/app.constants";
import { DB } from "~/lib/appwrite";
import { KANBAN_DATA } from "./kanban.data";
import type { IDeal } from "~/types/deal.types";

export function useKanbanQuery() {
  return useQuery({
    queryKey: ["deals"],
    queryFn: () => {
      return DB.listDocuments(DB_ID, COLLECTION_DEALS);
    },
    select(data) {
      const newBoard = [...KANBAN_DATA];
      const deals = data.documents as unknown as IDeal[];
      console.log(deals, newBoard);
    },
  });
}
