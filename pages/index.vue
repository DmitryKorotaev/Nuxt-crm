<template>
  <div class="p-10">
    <h1 class="font-bold text-2x1 md-10">CRM System</h1>
    <div v-if="isLoading">Loading....</div>
    <div v-else>
      <div v-if="data">
        <div class="grid grid-cols-5 gap-16">
          <div v-for="(column, index) in data" :key="column.id" class="">
            <div
              class="rounded bg-slate-700 py-1 md-2 text-center"
              v-once
              v-bind:data-log="console.log(column.id, 'column')"
            >
              {{ column.name }}
            </div>
            <div v-if="column.id">
              <KanbanCreateDeal
                v-once
                v-bind:data-log="console.log(column.id, 'column')"
                :status="column.id"
                :refetch="refetch"
              />
            </div>
            <UiCard
              class="mt-5"
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
              <UiCardContent>{{ card.companyName }}</UiCardContent>
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
import { UiCardDescription } from "#components";
import type { ICard, IColumn } from "~/components/kanban/kanban.types";
import { useKanbanQuery } from "~/components/kanban/useKanbanQuery";
import { converCurrency } from "~/lib/convertCurrency";
import dayjs from "dayjs";

useSeoMeta({
  title: "home | CRM system",
});

const dragCardRef = ref<ICard | null>(null);
const sourseColumnRef = ref<IColumn | null>(null);
const { data, isLoading, refetch } = useKanbanQuery();
watch(data, (value) => console.log(value, "val"));
</script>
