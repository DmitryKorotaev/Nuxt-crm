<template>
  <aside class="px-5 py-8 bg-sidebar h-full relative w-full">
    <NuxtLink to="/" class="mb-10 block">
      <NuxtImg src="/logo.svg" alt="" width="130px" class="mx-auto" />
    </NuxtLink>
    <button
      @click="logout"
      class="absolute top-2 right-3 transition-colors hover:text-primary"
    >
      <Icon name="line-md:logout" size="21px" />
    </button>
    <LayoutMenu />
  </aside>
</template>

<script lang="ts" setup>
import { account } from "~/lib/appwrite";
import { useAuthStore } from "~/store/auth.store";
import { useIsLoadingStore } from "~/store/loading.store";

const store = useAuthStore();
const router = useRouter();
const isLoadingstore = useIsLoadingStore();
const logout = async () => {
  isLoadingstore.set(true);
  await account.deleteSession("current");
  store.clear();
  await router.push("/login");
  isLoadingstore.set(false);
};
</script>

<style scoped></style>
