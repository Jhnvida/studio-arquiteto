<template>
    <div class="flex min-h-screen flex-col bg-white font-sans text-black selection:bg-black selection:text-white">
        <Header />

        <main class="flex-1">
            <slot />
        </main>

        <Footer />
    </div>
</template>
