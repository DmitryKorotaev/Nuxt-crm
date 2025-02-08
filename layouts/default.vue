<template>
  <LayoutLoader v-if="isLoadingstore.isLoading" />
  <section v-else :class="{ grid: store.isAuth }" style="min-height: 100vh">
    <LayoutSidebar v-if="store.isAuth" />
    <div>
      <slot />
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useAuthStore } from "~/store/auth.store";
import { useIsLoadingStore } from "~/store/loading.store";
import { account } from "@/lib/appwrite";

const isLoadingstore = useIsLoadingStore();
const store = useAuthStore();
const router = useRouter();

onMounted(async () => {
  try {
    const user = await account.get();
    if (user) store.set(user);
  } catch (error) {
    router.push("/login");
    console.log(error);
  } finally {
    isLoadingstore.set(false);
  }
});
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: 1fr 6fr;
}
</style>
