<script setup lang="ts">
const channels = [
    {
        label: "E-mail",
        lines: ["contato@studioarquiteto.com.br"],
    },
    {
        label: "Telefone",
        lines: ["+55 19 0000-0000"],
    },
    {
        label: "WhatsApp",
        lines: ["+55 19 00000-0000"],
    },
    {
        label: "Endereço",
        lines: ["Rua Exemplo, 100", "São Paulo - SP"],
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

            <h1 class="page-title-heading">Contato</h1>
        </div>

        <div class="section-container py-16 md:py-24">
            <div class="grid gap-16 md:grid-cols-12 md:gap-20">
                <div class="md:col-span-5">
                    <p class="label-micro mb-6">Fale com o estúdio</p>

                    <p class="text-2xl font-bold uppercase leading-tight tracking-tighter md:text-3xl">
                        Projetos novos, reformas ou parcerias.
                    </p>

                    <p class="mt-8 text-sm leading-relaxed text-studio-textSoft">
                        Conte em poucas linhas o tipo de obra, cidade e prazo desejado. Respondemos com calma, em até
                        alguns dias úteis.
                    </p>

                    <ul class="mt-12 space-y-6" aria-label="Canais de contato (demonstração)">
                        <li v-for="ch in channels" :key="ch.label">
                            <p class="label-micro mb-1">{{ ch.label }}</p>

                            <p class="text-sm font-semibold leading-relaxed">
                                <span v-for="(line, i) in ch.lines" :key="i" class="block">{{ line }}</span>
                            </p>
                        </li>
                    </ul>
                </div>

                <div class="md:col-span-6 md:col-start-7">
                    <form class="space-y-8" novalidate @submit.prevent>
                        <p class="label-micro text-gray-400">Formulário</p>

                        <div>
                            <label for="contact-name" class="label-micro mb-2 block">Nome</label>

                            <input
                                id="contact-name"
                                type="text"
                                name="name"
                                autocomplete="name"
                                maxlength="120"
                                class="w-full border-b border-gray-200 bg-transparent py-3 text-sm outline-none transition-colors focus:border-studio-black"
                            />
                        </div>

                        <div>
                            <label for="contact-email" class="label-micro mb-2 block">E-mail</label>

                            <input
                                id="contact-email"
                                type="email"
                                name="email"
                                autocomplete="email"
                                class="w-full border-b border-gray-200 bg-transparent py-3 text-sm outline-none transition-colors focus:border-studio-black"
                            />
                        </div>

                        <div>
                            <label for="contact-phone" class="label-micro mb-2 block">Telefone (opcional)</label>

                            <input
                                id="contact-phone"
                                type="tel"
                                name="phone"
                                autocomplete="tel"
                                maxlength="40"
                                class="w-full border-b border-gray-200 bg-transparent py-3 text-sm outline-none transition-colors focus:border-studio-black"
                            />
                        </div>

                        <div>
                            <label for="contact-message" class="label-micro mb-2 block">Mensagem</label>
                            <textarea
                                id="contact-message"
                                name="message"
                                rows="6"
                                maxlength="5000"
                                class="w-full resize-y border border-gray-200 bg-studio-white px-4 py-3 text-sm outline-none transition-colors focus:border-studio-black"
                                placeholder="Tipo de projeto, local, referências…"
                            />
                        </div>

                        <button type="submit" class="btn-outline-minimal w-fit border-studio-black self-start">
                            Enviar mensagem
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>
