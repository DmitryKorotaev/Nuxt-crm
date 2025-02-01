<template>
  <div class="flex items-center justify-center min-h-screen w-full">
    <div class="rounded bg-sidebar p-5">
      <h1 class="text-2x1 font-bold text-center mb-5">login</h1>
      <form>
        <UiInput
          class="mb-3"
          placeholder="Email"
          type="email"
          v-model="emailRef"
        />
        <UiInput
          class="mb-3"
          placeholder="Password"
          type="password"
          v-model="passwordRef"
        />
        <UiInput
          class="mb-3"
          placeholder="Name"
          type="name"
          v-model="nameRef"
        />
        <div class="flex items-center justify-center gap-5">
          <UiButton type="button" @click="login">Login</UiButton>
          <UiButton type="button" @click="register">Registration</UiButton>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { account } from "~/lib/appwrite";
import { useIsLoadingStore } from "~/store/loading.store";
import { v4 as uuid } from "uuid";

useSeoMeta({ title: "login | CRM Sustem" });
const emailRef = ref("");
const passwordRef = ref("");
const nameRef = ref("");

const isLoadingstore = useIsLoadingStore();
const authStore = useAuthStore();
const router = useRouter();

const login = async () => {
  isLoadingstore.set(true);

  await account.createEmailPasswordSession(emailRef.value, passwordRef.value);

  const response = await account.get();
  if (response) {
    authStore.set({
      email: response.name,
      name: response.name,
      status: response.status,
    });
  }

  emailRef.value = "";
  passwordRef.value = "";
  nameRef.value = "";

  await router.push("/");
  isLoadingstore.set(false);
};

const register = async () => {
  isLoadingstore.set(true);

  await account.create(
    uuid(),
    emailRef.value,
    passwordRef.value,
    nameRef.value
  );

  await login();
};
</script>
