<template>
  <div class="p-10">
    <h1 class="font-bold text-2x1 md-10">CRM System</h1>
    <div>
      <UiCard class="mb-3" draggable="true">
        <UiCardHeader role="button">Name card</UiCardHeader>
        <UiCardContent>Company</UiCardContent>
        <UiCardFooter>Date</UiCardFooter>
      </UiCard>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ICard, IColumn } from "~/components/kanban/kanban.types";
import { useKanbanQuery } from "~/components/kanban/useKanbanQuery";

useSeoMeta({
  title: "home | CRM system",
});

const dragCardRef = ref<ICard | null>(null);
const sourseColumnRef = ref<IColumn | null>(null);

useKanbanQuery();
</script>
