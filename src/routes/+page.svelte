<script>
	import Cotizador from "./Cotizador.svelte";
	import Footer from "./Footer.svelte";
    import GotoTop from "./GotoTop.svelte";

    let mostrarCotizador = false;
    let clave = '';
    let claveCorrecta = 'AlaCarta!2024';
    let claveIntroducida = '';

    function verificarClave() {
        if (claveIntroducida === claveCorrecta) {
            mostrarCotizador = true;
        } else {
            alert('Clave incorrecta');
        }
    }

</script>
<header class="bg-carta">
    <div class="p-14">
        <img src="/img/logo.png" alt="">
    </div>
    <div style="width:100%;height:0;padding-bottom:100%;position:relative;">
        <iframe src="https://giphy.com/embed/LAjncmZCp99m7gOJwI" width="100%" height="100%" style="position:absolute; pointer-events: none;" title="A la carta" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
    </div>    
    <div class="text-2xl text-center font-bold font-sans p-10">
        <p>Tu aliado <span class="text-orange-500">estratégico</span> para el éxito en el sector restaurantero</p>
        
    </div>
</header>
<section class="p-2 my-2">
    <div class="flex">
        <div class="border-t-4 border-l-4 w-1/12 h-7 border-solid border-orange-600"></div>
        <div class="grow"></div>
        <div class="border-t-4 border-r-4 w-1/12 h-7 border-solid border-orange-600"></div>
    </div>
    <p class="uppercase font-protest text-4xl text-center">¿Quiénes Somos?</p>
    <p class="m-3 text-justify text-xl">A la carta es una empresa integral de comunicación visual especializada en el ramo restaurantero, con un equipo altamente experimentado y apasionado por la gastronomía. Ofrecemos una amplia gama de servicios para ayudarte a potenciar tu negocio y llevarlo al siguiente nivel.</p>
    <p class="my-4 uppercase font-protest text-4xl text-center">¿Qué te ofrecemos?</p>
    <div class="flex flex-col items-center">
        <p class="my-4 uppercase font-black font-protest text-3xl text-yellow-500 text-center">Menú digital interactivo</p>
        <img src="/img/carta.jpg" alt="Celular" class="w-1/4">
        <button class="bg-carta rounded-full p-2 m-4 shadow-[2px_2px_5px_2px_#4a5568]"><a href="#menu" class="text-sm font-protest uppercase">Conoce más</a></button>
    </div>
    <div class="flex flex-col items-center">
        <p class="my-4 uppercase font-black font-protest text-3xl text-yellow-500 text-center">Diseño gráfico y comunicación visual</p>
        <img src="/img/cpu.jpg" alt="Computadora" class="w-1/4">
        <button class="bg-carta rounded-full p-2 m-4 shadow-[2px_2px_5px_2px_#4a5568]"><a href="#diseno" class="text-sm font-protest uppercase">Conoce más</a></button>
    </div>
    <div class="flex flex-col items-center">
        <p class="my-4 uppercase font-black font-protest text-3xl text-yellow-500 text-center">Manejo de redes sociales</p>
        <img src="/img/rrss.jpg" alt="Computadora" class="w-1/4">
        <button class="bg-carta rounded-full p-2 m-4 shadow-[2px_2px_5px_2px_#4a5568]"><a href="#rrss" class="text-sm font-protest uppercase">Conoce más</a></button>
    </div>
    <div class="flex flex-col items-center">
        <p class="my-4 uppercase font-black font-protest text-3xl text-yellow-500 text-center">Consultoría e imagen</p>
        <img src="/img/camara.jpg" alt="Cámara" class="w-1/4">
        <button class="bg-carta rounded-full p-2 m-4 shadow-[2px_2px_5px_2px_#4a5568]"><a href="#imagen" class="text-sm font-protest uppercase">Conoce más</a></button>
    </div>
    <div class="flex">
        <div class="border-b-4 border-l-4 w-1/12 h-7 border-solid border-orange-600"></div>
        <div class="grow"></div>
        <div class="border-b-4 border-r-4 w-1/12 h-7 border-solid border-orange-600"></div>
    </div>
</section>
<section id="menu" class="bg-carta my-2 p-2">
    <div class="flex">
        <div class="border-t-4 border-l-4 w-1/12 h-7 border-solid border-orange-600"></div>
        <div class="grow"></div>
        <div class="border-t-4 border-r-4 w-1/12 h-7 border-solid border-orange-600"></div>
    </div>
    <div class="flex flex-col">
        <p class="my-4 mx-2 w-2/3 uppercase font-black font-protest text-4xl text-left">Menú digital interactivo</p>
        <p class="text-2xl mx-2 font-extralight text-justify">Nuestros menús digitales permiten que tus clientes puedan navegar fácilmente, ver fotos y sin necesidad de descargar nada. Además, les será más sencillo encontrar tu menú en línea.</p>
        <div class="flex items-center gap-4">
            <img src="/img/menu-digital.png" alt="Menú digital" class="w-1/2 m-5">
            <ul class="list-disc w-1/2">
                <li>Acceso directo a WhatsApp.</li>
                <li>Ubicación en Google Maps.</li>
                <li>Redes Sociales.</li>
                <li>Servicios de Entrega.</li>
            </ul>
        </div>
        <div class="flex items-center justify-end">
            <ul class="w-1/3 list-disc ml-10">
                <li>Fotografía Pop Up.</li>
                <li>Ligero.</li>
                <li>No requiere registro ni cuenta.</li>
                <li>Dinámico.</li>
                <li>Fácil Lectura.</li>
            </ul>
            <img src="/img/pop-up.png" alt="Menú digital" class="w-1/2 m-5">
        </div>
    </div>
    <div class="flex">
        <div class="border-b-4 border-l-4 w-1/12 h-7 border-solid border-orange-600"></div>
        <div class="grow"></div>
        <div class="border-b-4 border-r-4 w-1/12 h-7 border-solid border-orange-600"></div>
    </div>
</section>
<section id="diseno" class="p-2 my-2">
    <div class="flex">
        <div class="border-t-4 border-l-4 w-1/12 h-7 border-solid border-orange-600"></div>
        <div class="grow"></div>
        <div class="border-t-4 border-r-4 w-1/12 h-7 border-solid border-orange-600"></div>
    </div>
    <div class="flex flex-col">
        <p class="my-4 mx-2 w-3/4 uppercase font-black font-protest text-4xl text-left">Diseño gráfico y comunicación visual</p>
        <p class="text-2xl mx-2 font-extralight text-justify">Logotipos, branding y materiales de marketing que transmiten
            la esencia de tu negocio.
            Diseño de empaques, cartas de menú y otros elementos
            impresos.
            Servcios de fotografía y video profesional para que tus
            platillos e instalaciones luzcan.</p>
    </div>
    <div class="flex bg-white p-2 flex-wrap m-auto justify-center items-center gap-4">
        <img src="/img/menu-acuario.jpg" alt="" class="w-1/2 -mr-10">
        <div class="w-1/2 object-contain">
            <img src="/img/hamburgesa.png" alt="" class="">
            <img src="/img/nuggets.png" alt="" class="">
        </div>
        <img src="/img/volante.jpg" alt="" class="w-1/2">
        <img src="/img/sticker.png" alt="" class="w-1/3 p-4 object-contain">
    </div>
    <div class="flex">
        <div class="border-b-4 border-l-4 w-1/12 h-7 border-solid border-orange-600"></div>
        <div class="grow"></div>
        <div class="border-b-4 border-r-4 w-1/12 h-7 border-solid border-orange-600"></div>
    </div>
</section>
<section id="rrss" class="bg-carta my-2 p-2">
    <div class="flex">
        <div class="border-t-4 border-l-4 w-1/12 h-7 border-solid border-orange-600"></div>
        <div class="grow"></div>
        <div class="border-t-4 border-r-4 w-1/12 h-7 border-solid border-orange-600"></div>
    </div>
    <div class="flex flex-col">
        <p class="my-4 mx-2 w-3/4 uppercase font-black font-protest text-4xl text-left">Manejo de redes sociales</p>
        <p class="text-2xl mx-2 font-extralight text-justify">El 63% de los consumidores confía más en las marcas que
            tienen una presencia sólida en las redes sociales, pero
            atenderlas tú mismo puede ser una tarea difícil, deja que
            nuestros profesionales te ayuden a crear una estrategia de
            comunicación sólida y eficiente que invite a todo mundo a tu
            restaurante.</p>
        <img src="/img/rrss.png" alt="">
        <p class="text-2xl mx-2 font-extralight text-justify">Nuestra amplia experiencia y conocimiento son las bases de
            de una campaña exitosa.</p>
    </div>
    <div class="flex">
        <div class="border-b-4 border-l-4 w-1/12 h-7 border-solid border-orange-600"></div>
        <div class="grow"></div>
        <div class="border-b-4 border-r-4 w-1/12 h-7 border-solid border-orange-600"></div>
    </div>
</section>
<section id="imagen" class="p-2 my-2">
    <div class="flex">
        <div class="border-t-4 border-l-4 w-1/12 h-7 border-solid border-orange-600"></div>
        <div class="grow"></div>
        <div class="border-t-4 border-r-4 w-1/12 h-7 border-solid border-orange-600"></div>
    </div>
    <div class="flex flex-col">
        <p class="my-4 mx-2 w-3/4 uppercase font-black font-protest text-4xl text-left">Consultoría e imagen</p>
        <div class="text-2xl mx-2 font-extralight text-justify">
            <ul class="list-disc ml-6 mr-4">
                <li class="my-1">Costeo y estandarización de recetas y procesos que facilita el cálculo de márgenes de ganancia, permitiendo una mejor planificación financiera y de precios.</li>
                <li class="my-1">Asesoramiento en la creación y gestión de la imagen de tu
                marca.</li>
                <li class="my-1">Desarrollo de estrategias para diferenciarte de la
                competencia y posicionarte en el mercado.</li>
                <li class="my-1">Análisis de tu público objetivo y creación de estrategias para
                fidelizarlo.</li>
                <li class="my-1">Implementación de mejoras en la experiencia del cliente para
                aumentar la satisfacción y la rentabilidad.</li>
            </ul>
        </div>
    </div>
    <div class="flex">
        <div class="border-b-4 border-l-4 w-1/12 h-7 border-solid border-orange-600"></div>
        <div class="grow"></div>
        <div class="border-b-4 border-r-4 w-1/12 h-7 border-solid border-orange-600"></div>
    </div>
</section>
<section id="clientes" class="p-2 my-2">
    <div class="flex">
        <div class="border-t-4 border-l-4 w-1/12 h-7 border-solid border-orange-600"></div>
        <div class="grow"></div>
        <div class="border-t-4 border-r-4 w-1/12 h-7 border-solid border-orange-600"></div>
    </div>
    <div class="flex flex-col">
        <p class="my-4 mx-2 uppercase font-black font-protest text-4xl text-carta text-center">Nuestros clientes</p>
    </div>
    <div class="flex flex-wrap justify-around items-center gap-3">
        <a href="https://naranya.alacarta.com.mx" target="blank" class="w-1/4"><img src="/img/logo-naranya.png" alt=""></a>
        <a href="https://lalimita.com/menu-digital" target="blank" class="w-2/5"><img src="/img/logo-limita.png" alt=""></a>
        <a href="https://cowfish.alacarta.com.mx" target="blank" class="w-1/4"><img src="/img/logo-cow.png" alt=""></a>
        <a href="https://acuario.alacarta.com.mx" target="blank" class="w-1/4"><img src="/img/logo-acuario.png" alt=""></a>
        <a href="https://labruneta.alacarta.com.mx" target="blank" class="w-2/5"><img src="/img/logo-bruneta.png" alt=""></a>
        <a href="https://molcajeteria.alacarta.com.mx" target="blank" class="w-1/4"><img src="/img/logo-molcajeteria.png" alt=""></a>
        <a href="https://la-pradera.alacarta.com.mx" target="blank" class="w-1/4"><img src="/img/logo-pradera.png" alt=""></a>
        <a href="https://el-aventurero.alacarta.com.mx" target="blank" class="w-1/4"><img src="/img/logo-aventurero.png" alt=""></a>
        <a href="https://jc-ciobes.alacarta.com.mx/" target="blank" class="w-1/4"><img src="/img/logo-ciobes.png" alt=""></a>
        <a href="https://lafinca.alacarta.com.mx/" target="blank" class="w-2/5"><img src="/img/logo-finca.png" alt=""></a>
        <a href="https://alicletas.alacarta.com.mx" target="blank" class="w-2/5"><img src="/img/logo-alicletas.png" alt=""></a>
        <a href="https://latorcua.alacarta.com.mx/" target="blank" class="w-1/4"><img src="/img/logo-torcua.png" alt=""></a>
        <a href="https://mimocorito.alacarta.com.mx" target="blank" class="w-2/5"><img src="/img/logo-mimocorito.png" alt=""></a>
        <a href="https://maizal-sinaloense.alacarta.com.mx/" target="blank" class="w-1/4"><img src="/img/logo-maizal.png" alt=""></a>
        <a href="https://mucha-vida.alacarta.com.mx/" target="blank" class="w-1/4"><img src="/img/logo-mucha-vida.png" alt=""></a>
        <a href="https://nanasnyc.alacarta.com.mx/" target="blank" class="w-1/4"><img src="/img/nanas-logo.jpg" alt=""></a>
        <a href="https://mr-leos.alacarta.com.mx/" target="blank" class="w-1/4"><img src="/img/logo-mrleos.png" alt=""></a>
        <a href="https://odettecafe.alacarta.com.mx/" target="blank" class="w-1/4"><img src="/img/logo-odette.png" alt=""></a>
        <a href="https://omar-to-goo.alacarta.com.mx/" target="blank" class="w-2/5"><img src="/img/logo-omar.png" alt=""></a>
        <a href="https://streetdogs.alacarta.com.mx/" target="blank" class="w-1/4"><img src="/img/logo-streetdog.png" alt=""></a>
        <a href="https://ranch-pizza.alacarta.com.mx/" target="blank" class="w-1/4 p-2"><img src="/img/logo-ranch.png" alt=""></a>
        <a href="https://tamazula.alacarta.com.mx/" target="blank" class="w-2/5"><img src="/img/logo-birrias-tamazula.png" alt=""></a>
    </div>
    <div class="flex">
        <div class="border-b-4 border-l-4 w-1/12 h-7 border-solid border-orange-600"></div>
        <div class="grow"></div>
        <div class="border-b-4 border-r-4 w-1/12 h-7 border-solid border-orange-600"></div>
    </div>
</section>
<section id="contacto" class="p-2 my-2">
    <div class="flex">
        <div class="border-t-4 border-l-4 w-1/12 h-7 border-solid border-black"></div>
        <div class="grow"></div>
        <div class="border-t-4 border-r-4 w-1/12 h-7 border-solid border-black"></div>
    </div>
    <div class="flex flex-col">
        <p class="my-4 mx-2 uppercase font-black font-protest text-4xl text-carta text-center">¿quiéres saber más?</p>
    </div>
    <div class="flex flex-col">
        <p class="text-2xl mx-6 font-extralight text-justify">Contáctanos hoy mismo y descubre cómo podemos ayudarte a hacer crecer tu negocio.</p>
    </div>
    <div class="flex justify-center">
        <a href="https://wa.me/5216671606417" class="text-center"><i class="fa-brands text-green-500 text-8xl fa-whatsapp"></i></a>
    </div>
    <div class="flex mb-20">
        <div class="border-b-4 border-l-4 w-1/12 h-7 border-solid border-black"></div>
        <div class="grow"></div>
        <div class="border-b-4 border-r-4 w-1/12 h-7 border-solid border-black"></div>
    </div>
</section>
<div class="p-4 bg-gray-100 min-h-screen">
    {#if !mostrarCotizador}
        <div class="mb-4">
            <label for="clave" class="block text-sm font-medium text-gray-700">Introduce la clave</label>
            <input type="password" id="clave" bind:value={claveIntroducida} class="mt-1 block w-full rounded border-gray-300 shadow-sm" />
        </div>
        <button class="bg-blue-500 text-white px-4 py-2 rounded" on:click={verificarClave}>Abrir Cotizador</button>
    {/if}

    {#if mostrarCotizador}
        <Cotizador />
    {/if}
</div>
<div class="mb-40">.</div>
<GotoTop />
<Footer />