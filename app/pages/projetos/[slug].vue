<script setup lang="ts">
const route = useRoute();
const slug = computed(() => String(route.params.slug || ""));

const { data: project } = await useAsyncData(
    () => `project-${slug.value}`,
    () => queryCollection("projects").where("slug", "=", slug.value).first(),
    { watch: [slug] },
);
</script>

<template>
    <section class="min-h-screen bg-studio-white text-studio-black">
        <div class="section-container border-b border-gray-100 pt-32 pb-16">
            <NuxtLink
                :to="`/${project?.category ?? ''}`"
                class="label-micro mb-8 inline-flex items-center gap-2 transition-opacity hover:opacity-50"
            >
                <Icon name="lucide:arrow-left" size="14" />
                Voltar para os projetos
            </NuxtLink>

            <div class="grid gap-10 md:grid-cols-12 md:items-end">
                <div class="md:col-span-8">
                    <h1 class="text-5xl font-bold uppercase tracking-tighter leading-[0.9] md:text-7xl">
                        {{ project?.title }}
                    </h1>
                </div>

                <div class="md:col-span-4 md:text-right">
                    <p class="label-micro">{{ project?.category }}</p>

                    <p class="mt-2 text-[11px] font-bold uppercase tracking-[0.25em] text-gray-400">
                        {{ project?.location }}
                    </p>
                </div>
            </div>
        </div>

        <div v-if="!project">
            <div class="section-container py-16 md:py-24">
                <h1 class="text-5xl font-bold uppercase tracking-tighter leading-[0.9] md:text-7xl">
                    Projeto não encontrado
                </h1>
            </div>
        </div>

        <div v-else class="section-container py-16 md:py-24">
            <NuxtImg
                :src="project?.image"
                :alt="project?.title"
                sizes="100vw"
                class="h-full w-full aspect-[16/10] object-cover bg-gray-100"
                format="webp"
            />

            <div class="mt-12 grid gap-10 border-t border-gray-100 pt-10 md:grid-cols-12">
                <div class="md:col-span-8">
                    <p class="max-w-2xl text-base leading-relaxed text-studio-textSoft">
                        {{ project?.description }}
                    </p>
                </div>

                <div class="md:col-span-4 md:justify-self-end">
                    <div class="space-y-5">
                        <div class="flex items-center justify-between gap-8">
                            <span class="label-micro">Ano</span>
                            <span class="text-sm font-bold uppercase">{{ project?.year }}</span>
                        </div>

                        <div class="flex items-center justify-between gap-8">
                            <span class="label-micro">Área</span>
                            <span class="text-sm font-bold uppercase">{{ project?.area }} m<sup>2</sup></span>
                        </div>
                    </div>
                </div>
            </div>

            <div v-if="project?.gallery?.length" class="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
                <NuxtImg
                    v-for="image in project.gallery"
                    :key="image"
                    :src="image"
                    :alt="project.title"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    class="h-full w-full aspect-square object-cover bg-gray-100"
                    loading="lazy"
                    format="webp"
                />
            </div>
        </div>
    </section>
</template>
