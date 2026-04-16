<script setup lang="ts">
const isMenuOpen = ref(false);
const route = useRoute();

const links = [
    { label: "Residencial", to: "/residencial" },
    { label: "Comercial", to: "/comercial" },
    { label: "Escritório", to: "/escritorio" },
    { label: "Contato", to: "/contato" },
];

const closeMenu = () => {
    isMenuOpen.value = false;
};

const isActive = (to: string) => route.path === to;
</script>

<template>
    <header class="fixed top-0 z-50 w-full border-b border-gray-100 bg-white/90 backdrop-blur-md">
        <nav class="section-container flex items-center justify-between py-6">
            <NuxtLink
                to="/"
                class="text-sm font-black uppercase leading-none tracking-[-0.05em] hover:opacity-60"
                @click="closeMenu"
            >
                STUDIO ARQUITETO
            </NuxtLink>

            <div class="hidden items-center space-x-10 md:flex">
                <NuxtLink
                    v-for="link in links"
                    :key="link.to"
                    :to="link.to"
                    class="border-b border-transparent pb-1 text-[10px] font-bold uppercase tracking-widest transition-all hover:opacity-50"
                    :class="{ 'border-studio-black': isActive(link.to) }"
                >
                    {{ link.label }}
                </NuxtLink>
            </div>

            <button
                type="button"
                class="p-1 hover:opacity-50 md:hidden"
                :aria-expanded="isMenuOpen"
                aria-controls="mobile-nav"
                :aria-label="isMenuOpen ? 'Fechar menu' : 'Abrir menu'"
                @click="isMenuOpen = !isMenuOpen"
            >
                <Icon name="lucide:menu" size="24" />
            </button>
        </nav>
    </header>

    <div
        v-if="isMenuOpen"
        id="mobile-nav"
        class="fixed inset-0 z-[60] flex flex-col items-center justify-center gap-8 bg-white md:hidden"
        role="dialog"
        aria-modal="true"
    >
        <NuxtLink to="/" class="nav-mobile-link" @click="closeMenu">Home</NuxtLink>

        <NuxtLink
            v-for="link in links"
            :key="`mobile-${link.to}`"
            :to="link.to"
            class="nav-mobile-link"
            @click="closeMenu"
        >
            {{ link.label }}
        </NuxtLink>

        <button
            type="button"
            class="mt-8 flex items-center justify-center rounded-full bg-gray-100 p-4"
            aria-label="Fechar menu"
            @click="closeMenu"
        >
            <Icon name="lucide:x" size="20" />
        </button>
    </div>
</template>
