<script setup lang="ts">
const categories = [
    {
        id: "residencial",
        title: "Residencial",
        subtitle: "Projetos de Habitação",
        image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=80",
    },
    {
        id: "comercial",
        title: "Comercial",
        subtitle: "Espaços Corporativos",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80",
    },
];
</script>

<template>
    <section>
        <div class="section-container border-b border-gray-100 pt-32 pb-16">
            <h1 class="text-5xl font-bold leading-tight tracking-tighter md:text-8xl">
                Arquitetura <br />
                Contemporânea
            </h1>

            <p class="mt-8 text-sm font-medium uppercase tracking-[0.3em] text-gray-400">Explorar Categorias</p>
        </div>

        <div class="section-container grid gap-12 py-20 md:grid-cols-2 md:gap-16">
            <NuxtLink v-for="category in categories" :key="category.id" :to="`/${category.id}`" class="block">
                <div class="relative mb-8 aspect-[4/4] overflow-hidden rounded-lg bg-gray-50 md:aspect-[3/3]">
                    <img :src="category.image" :alt="category.title" class="h-full w-full object-cover" />
                </div>

                <div class="flex flex-col gap-4">
                    <div>
                        <span class="label-micro mb-2 block">{{ category.subtitle }}</span>
                        <h3 class="text-3xl font-bold md:text-4xl">{{ category.title }}</h3>
                    </div>

                    <span class="btn-outline-minimal">
                        Ver Projetos
                        <Icon name="lucide:arrow-right" size="12" />
                    </span>
                </div>
            </NuxtLink>
        </div>
    </section>
</template>
