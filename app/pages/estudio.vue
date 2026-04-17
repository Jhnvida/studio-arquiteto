<script setup lang="ts">
const image = "https://images.unsplash.com/photo-1600585154526-990dced4db0d";

const pillars = [
    {
        title: "Contexto",
        text: "Cada terreno, vizinhança e programa pedem uma resposta específica. O projeto parte da leitura do lugar e das rotinas de quem vai habitar ou usar o espaço.",
    },
    {
        title: "Materialidade",
        text: "Luz, textura e proporção definem a atmosfera. Trabalhamos com materiais honestos e soluções construtivas coerentes com o orçamento e o tempo de obra.",
    },
    {
        title: "Acompanhamento",
        text: "Do estudo preliminar à entrega, o diálogo com o cliente e com a equipe de execução é contínuo, para reduzir surpresas e preservar a intenção do projeto.",
    },
];

const steps = [
    {
        number: "01",
        title: "Briefing",
        text: "Escuta, levantamento de necessidades e referências. Definição de escopo, prazos e etapas.",
    },
    {
        number: "02",
        title: "Conceito",
        text: "Estudos volumétricos, plantas esquemáticas e moodboard. Alinhamento da direção antes do detalhamento.",
    },
    {
        number: "03",
        title: "Projeto",
        text: "Anteprojeto, projeto executivo e especificações. Articulação com consultores e aprovações quando necessário.",
    },
    {
        number: "04",
        title: "Obra",
        text: "Assistência técnica, visitas e resolução de interfaces na construção até a conclusão.",
    },
];
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

            <h1 class="page-title-heading">Estúdio</h1>
        </div>

        <div class="section-container py-16 md:py-24">
            <div class="grid gap-12 md:grid-cols-12 md:gap-16 lg:gap-20">
                <div class="md:col-span-7">
                    <div class="overflow-hidden bg-gray-100">
                        <NuxtImg
                            :src="image"
                            alt="Ambiente de trabalho e referências de projeto"
                            sizes="(max-width: 768px) 100vw, 58vw"
                            class="aspect-[4/5] w-full object-cover md:aspect-[16/11]"
                            loading="lazy"
                            format="webp"
                        />
                    </div>
                </div>

                <div class="flex flex-col justify-center md:col-span-5">
                    <p class="label-micro mb-6">Sobre o estúdio</p>

                    <p class="text-2xl font-bold uppercase leading-tight tracking-tighter md:text-3xl">
                        Arquitetura que articula função, beleza e tempo.
                    </p>

                    <p class="mt-8 text-sm leading-relaxed text-studio-textSoft">
                        O Studio Arquiteto reúne experiência em diferentes escalas, da casa à sede corporativa. Buscamos
                        soluções claras, plantas fluidas e fachadas contidas, sem gesto gratuito: cada decisão responde
                        a conforto, insolação, custo e identidade do programa.
                    </p>

                    <p class="mt-6 text-sm leading-relaxed text-studio-textSoft">
                        Trabalhamos em equipe reduzida, com proximidade direta entre quem projeta e quem contrata o
                        serviço. Assim, o projeto evolui com consistência do primeiro traço à escolha do último
                        acabamento.
                    </p>
                </div>
            </div>
        </div>

        <div class="border-t border-gray-100 bg-studio-muted/40">
            <div class="section-container py-16 md:py-24">
                <p class="label-micro mb-12 md:mb-16">Como pensamos</p>

                <ul class="grid gap-12 md:grid-cols-3 md:gap-10 lg:gap-14">
                    <li v-for="pillar in pillars" :key="pillar.title">
                        <h2 class="text-xl font-bold uppercase tracking-tighter md:text-2xl">
                            {{ pillar.title }}
                        </h2>

                        <p class="mt-4 text-sm leading-relaxed text-studio-textSoft">
                            {{ pillar.text }}
                        </p>
                    </li>
                </ul>
            </div>
        </div>

        <div class="section-container border-t border-gray-100 py-16 md:py-24">
            <p class="label-micro mb-12 md:mb-16">Processo</p>

            <ol class="grid gap-10 md:grid-cols-2 md:gap-x-16 md:gap-y-12">
                <li
                    v-for="step in steps"
                    :key="step.number"
                    class="flex gap-6 border-b border-gray-100 pb-10 md:border-0 md:pb-0"
                >
                    <span class="shrink-0 text-[10px] font-bold uppercase tracking-ultra text-gray-400">
                        {{ step.number }}
                    </span>

                    <div>
                        <h2 class="text-lg font-bold uppercase tracking-tighter md:text-xl">
                            {{ step.title }}
                        </h2>

                        <p class="mt-3 max-w-md text-sm leading-relaxed text-studio-textSoft">
                            {{ step.text }}
                        </p>
                    </div>
                </li>
            </ol>
        </div>

        <div class="section-container border-t border-gray-100 py-16 pb-24 md:py-20 md:pb-32">
            <div class="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
                <blockquote class="max-w-2xl text-xl font-bold uppercase leading-snug tracking-tighter md:text-2xl">
                    Cada obra é uma oportunidade de traduzir ideias em espaço habitável, com calma, método e cuidado.
                </blockquote>

                <NuxtLink to="/contato" class="btn-outline-minimal shrink-0 self-start md:self-auto">
                    Fale conosco
                    <Icon name="lucide:arrow-right" size="12" aria-hidden="true" />
                </NuxtLink>
            </div>
        </div>
    </section>
</template>
