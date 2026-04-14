<script setup lang="ts">
const links = [
    { label: "Residencial", to: "/residencial" },
    { label: "Comercial", to: "/comercial" },
    { label: "Escritório", to: "/escritorio" },
    { label: "Contato", to: "/contato" },
];

const year = new Date().getFullYear();
</script>

<template>
    <footer class="mt-auto border-t border-gray-100 bg-white">
        <div class="section-container py-16 md:py-20">
            <div
                class="grid gap-14 md:grid-cols-2 md:gap-16 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-start lg:gap-24"
            >
                <div>
                    <NuxtLink to="/" class="inline-block text-xs font-black uppercase leading-tight tracking-tighter">
                        STUDIO<br />ARQUITETO
                    </NuxtLink>
                    <p class="mt-6 max-w-sm text-sm leading-relaxed text-studio-textSoft">
                        Projetos de arquitetura contemporânea para ambientes residenciais, comerciais e corporativos.
                    </p>
                </div>

                <nav class="md:text-right" aria-label="Rodapé">
                    <p class="label-micro mb-5">Navegação</p>
                    <ul class="flex flex-col gap-3 md:items-end">
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
                <p class="text-[10px] font-medium uppercase tracking-widest text-gray-400">
                    © {{ year }} Studio Arquiteto. Todos os direitos reservados.
                </p>
            </div>
        </div>
    </footer>
</template>
