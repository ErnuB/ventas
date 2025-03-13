<script>
    import { onMount, onDestroy } from 'svelte';
    import { tick } from 'svelte';

    let showFooter = false;
    let lastScrollY = 0;

    const handleScroll = () => {
        if (typeof window !== 'undefined') {
            const currentScrollY = window.scrollY;
            const screenHeight = window.innerHeight;

            if (currentScrollY > screenHeight / 2) {
                // Show footer if scrolling down
                showFooter = currentScrollY > lastScrollY;
            } else {
                // Hide footer if above half the screen height
                showFooter = false;
            }

            lastScrollY = currentScrollY;
            tick(); // Ensure Svelte updates the DOM
        }
    };

    onMount(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', handleScroll);
        }
    });

    onDestroy(() => {
        if (typeof window !== 'undefined') {
            window.removeEventListener('scroll', handleScroll);
        }
    });
</script>

<style>
    .show {
        transform: translateY(0);
    }
    .hide {
        transform: translateY(100%);
    }
</style>

<footer class="fixed bottom-0 left-0 w-full transition-all duration-300" class:show={showFooter} class:hide={!showFooter}>
    <div class="w-full py-2 bg-white flex flex-col items-center">
        <div class="flex items-center justify-around gap-10">
            <a href="https://www.facebook.com/alacarta.com.mx" target="_top"><i class="text-5xl text-blue-800 bx bxl-facebook-square"></i></a>
            <a href="https://www.instagram.com/alacartamenus/" target="_blank"><i class="text-5xl fa-brands bx bxl-instagram bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 text-transparent bg-clip-text"></i></a>
            <a href="tel:+52661606417"><i class="text-5xl bx bxs-phone"></i></a>
            <a href="mailto:hola@alacarta.com.mx"><i class="text-5xl bx bx-envelope"></i></a>
        </div>
    </div>
</footer>