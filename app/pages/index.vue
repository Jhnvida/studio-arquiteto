<script setup lang="ts">
const { data: categories } = await useAsyncData("content-categories", () =>
    queryCollection("categories").order("order", "ASC").all(),
);
</script>

<template>
    <section class="bg-studio-white text-studio-black">
        <div class="section-container border-b border-gray-100 pt-32 pb-16 md:pt-36">
            <h1 class="editorial-title break-words">
                Arquitetura<br />
                Contemporânea
            </h1>

            <div class="mt-10 grid gap-10 border-t border-gray-100 pt-8 md:grid-cols-2 md:items-end">
                <p class="max-w-md text-sm leading-relaxed text-studio-textSoft">
                    Soluções arquitetônicas com linguagem autoral, atenção ao contexto e materialidade precisa para
                    projetos residenciais e comerciais.
                </p>

                <p
                    class="text-sm font-bold uppercase tracking-[0.18em] text-gray-400 md:tracking-[0.3em] md:text-right"
                >
                    Explore nossas categorias
                </p>
            </div>
        </div>

        <div class="section-container grid gap-14 py-20 md:grid-cols-2 md:gap-16 md:py-24">
            <NuxtLink
                v-for="(category, idx) in categories ?? []"
                :key="category.slug"
                :to="`/${category.slug}`"
                class="block group"
                :class="{ 'md:pt-16': idx % 2 === 1 }"
            >
                <div class="relative mb-8 aspect-[4/4] overflow-hidden bg-gray-50 md:aspect-[3/3]">
                    <img :src="category.image" :alt="category.title" class="h-full w-full object-cover" />
                </div>

                <div class="flex flex-col gap-4">
                    <div>
                        <span class="label-micro mb-2 block">{{ category.subtitle }}</span>
                        <h3 class="text-3xl font-bold md:text-4xl">{{ category.title }}</h3>
                    </div>

                    <span class="btn-outline-minimal w-fit">
                        Ver Projetos
                        <Icon name="lucide:arrow-right" size="12" />
                    </span>
                </div>
            </NuxtLink>
        </div>
    </section>
</template>
