<script setup lang="ts">
const { data: projects } = await useAsyncData("projects-residencial", () =>
    queryCollection("projects").where("category", "=", "residencial").order("year", "DESC").all(),
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

            <h1 class="page-title-heading capitalize">Residencial</h1>
        </div>

        <div class="section-container space-y-24 py-20 md:space-y-40 md:py-24">
            <article
                v-for="(project, idx) in projects"
                :key="project.slug"
                class="project-list-grid group"
                :class="{ 'md:[&>*:first-child]:order-2': idx % 2 === 1 }"
            >
                <div class="project-list-card md:col-span-7">
                    <img
                        :src="project.image"
                        :alt="project.title"
                        class="h-full w-full aspect-[16/10] object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                </div>

                <div class="md:col-span-5">
                    <div class="mb-4 flex items-center gap-4">
                        <span class="label-micro">{{ project.category }}</span>
                        <span class="h-px w-8 bg-gray-200"></span>
                        <span class="label-micro">{{ project.year }}</span>
                    </div>

                    <h2 class="text-4xl font-bold uppercase tracking-tighter leading-none md:text-6xl">
                        {{ project.title }}
                    </h2>

                    <p class="mt-4 text-[11px] font-bold uppercase tracking-[0.25em] text-gray-400">
                        {{ project.location }}
                    </p>

                    <p class="mt-8 max-w-sm text-sm leading-relaxed text-studio-textSoft">
                        {{ project.description }}
                    </p>

                    <span class="btn-outline-minimal mt-8 inline-flex shrink-0 items-center gap-2 opacity-80">
                        Ver Projeto
                        <Icon name="lucide:arrow-right" size="12" aria-hidden="true" />
                    </span>
                </div>
            </article>

            <p v-if="!projects?.length" class="text-sm text-studio-textSoft">
                Nenhum projeto residencial publicado ainda.
            </p>
        </div>
    </section>
</template>
