<template>
  <div class="p-10">
    <h1 class="font-bold text-2x1 mb-10">CRM System</h1>
    <div v-if="isLoading">Loading....</div>
    <div v-else>
      <div v-if="data">
        <div class="grid grid-cols-5 gap-16">
          <div v-for="(column, index) in data" :key="column.id" class="">
            <div class="rounded bg-slate-700 py-1 px-1 mb-2 text-center">
              {{ column.name }}
            </div>
            <KanbanCreateDeal :status="column.id" :refetch="refetch" />
            <UiCard
              class="mb-3"
              draggable="true"
              v-for="card in column.items"
              :key="card.id"
            >
              <UiCardHeader role="button">
                <UiCardTitle>{{ card.name }}</UiCardTitle>
                <UiCardDescription class="mt-2 block">{{
                  converCurrency(card.price)
                }}</UiCardDescription>
              </UiCardHeader>
              <UiCardContent class="text-xs">{{
                card.companyName
              }}</UiCardContent>
              <UiCardFooter>{{
                dayjs(card.$createdAt).format("DD MMMM YYYY")
              }}</UiCardFooter>
            </UiCard>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ICard, IColumn } from "~/components/kanban/kanban.types";
import { useKanbanQuery } from "~/components/kanban/useKanbanQuery";
import { converCurrency } from "~/lib/convertCurrency";
import dayjs from "dayjs";

const dragCardRef = ref<ICard | null>(null);
const sourseColumnRef = ref<IColumn | null>(null);
const { data, isLoading, refetch } = useKanbanQuery();

watch(data, (newVal) => {
  console.log("Обновились данные", newVal);
});
</script>
