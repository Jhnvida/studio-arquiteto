<script setup lang="ts">
const links = [
    { label: "Residencial", to: "/residencial" },
    { label: "Comercial", to: "/comercial" },
    { label: "Estúdio", to: "/estudio" },
    { label: "Contato", to: "/contato" },
];

const year = new Date().getFullYear();
</script>

<template>
    <footer class="mt-auto border-t border-gray-100 bg-white">
        <div class="section-container py-16 md:py-24">
            <div class="grid gap-14 md:grid-cols-12 md:gap-12 lg:gap-20">
                <div class="md:col-span-7">
                    <NuxtLink to="/" class="inline-block text-sm font-black uppercase leading-none tracking-[-0.05em]">
                        STUDIO ARQUITETO
                    </NuxtLink>

                    <p class="mt-6 max-w-sm text-sm leading-relaxed text-studio-textSoft">
                        Projetos de arquitetura contemporânea para ambientes residenciais, comerciais e corporativos.
                    </p>
                </div>

                <nav class="md:col-span-5 md:justify-self-end" aria-label="Rodapé">
                    <p class="label-micro mb-5">Navegação</p>

                    <ul class="flex flex-col gap-3 md:text-right">
                        <li v-for="link in links" :key="link.to">
                            <NuxtLink
                                :to="link.to"
                                class="text-[10px] font-bold uppercase tracking-widest text-studio-black hover:opacity-50"
                            >
                                {{ link.label }}
                            </NuxtLink>
                        </li>
                    </ul>
                </nav>
            </div>

            <div
                class="mt-14 flex flex-col gap-4 border-t border-gray-100 pt-10 md:flex-row md:items-center md:justify-between"
            >
                <p
                    class="inline-flex items-center gap-2 text-[10px] font-medium uppercase tracking-widest text-gray-400"
                >
                    <Icon name="lucide:copyright" size="12" /> {{ year }} Studio Arquiteto. Todos os direitos
                    reservados.
                </p>
            </div>
        </div>
    </footer>
</template>
