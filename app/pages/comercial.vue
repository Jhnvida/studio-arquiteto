<script setup lang="ts">
const { data: projects } = await useAsyncData("projects-comercial", () =>
    queryCollection("projects").where("category", "=", "comercial").order("year", "DESC").all(),
);
</script>

<template>
    <section class="min-h-screen bg-studio-white text-studio-black">
        <div class="section-container border-b border-gray-100 pt-32 pb-16">
            <NuxtLink
                to="/"
                class="label-micro mb-8 inline-flex items-center gap-2 transition-opacity hover:opacity-50"
            >
                <Icon name="lucide:arrow-left" size="14" />
                Voltar para o início
            </NuxtLink>

            <h1 class="page-title-heading capitalize">Comercial</h1>
        </div>

        <div class="section-container space-y-24 py-20 md:space-y-40">
            <article v-for="project in projects" :key="project.id" class="group">
                <div class="relative mb-8 aspect-[16/9] overflow-hidden rounded-lg bg-gray-50">
                    <img
                        :src="project.image"
                        :alt="project.title"
                        class="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                </div>

                <div class="flex flex-col justify-between gap-4 md:flex-row md:items-end">
                    <div>
                        <span class="label-micro mb-2 block">{{ project.location }}</span>
                        <h2 class="text-3xl font-bold tracking-tight md:text-5xl">{{ project.title }}</h2>
                    </div>

                    <span
                        class="btn-outline-minimal pointer-events-none inline-flex shrink-0 items-center gap-2 opacity-60"
                    >
                        Ver Projeto
                        <Icon name="lucide:arrow-right" size="12" aria-hidden="true" />
                    </span>
                </div>
            </article>

            <p v-if="!projects?.length" class="text-sm text-studio-textSoft">
                Nenhum projeto comercial publicado ainda.
            </p>
        </div>
    </section>
</template>
