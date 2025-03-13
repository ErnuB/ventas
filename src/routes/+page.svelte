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


  let selectedHref = null;

  const clients = [
    {
      href: "https://santas-alitas.alacarta.com.mx/",
      img: "/img/logo-santas-alitas.png"
    },
    {
      href: "https://cowfish.alacarta.com.mx",
      img: "/img/logo-cow.png"
    },
    {
      href: "https://lalimita.com/menu-digital",
      img: "/img/logo-limita.png"
    },
    {
      href: "https://bahamas.alacarta.com.mx/",
      img: "/img/bahamas-logo.jpg"
    },
    {
      href: "https://naranya.alacarta.com.mx",
      img: "/img/logo-naranya.png"
    },
    {
      href: "https://la-pradera.alacarta.com.mx",
      img: "/img/logo-pradera.png"
    },
    {
      href: "https://labruneta.alacarta.com.mx",
      img: "/img/logo-bruneta.png"
    },
    {
      href: "https://acuario.alacarta.com.mx",
      img: "/img/logo-acuario.png"
    },
    {
      href: "https://molcajeteria.alacarta.com.mx",
      img: "/img/logo-molcajeteria.png"
    },
    {
      href: "https://lakokoy.alacarta.com.mx/",
      img: "/img/logo-lakokoy.png"
    },
    {
      href: "https://el-aventurero.alacarta.com.mx",
      img: "/img/logo-aventurero.png"
    },
    {
      href: "https://jc-ciobes.alacarta.com.mx/",
      img: "/img/logo-ciobes.png"
    },
    {
      href: "https://lafinca.alacarta.com.mx/",
      img: "/img/logo-finca.png"
    },
    {
      href: "https://alicletas.alacarta.com.mx",
      img: "/img/logo-alicletas.png"
    },
    {
      href: "https://latorcua.alacarta.com.mx/",
      img: "/img/logo-torcua.png"
    },
    {
      href: "https://mimocorito.alacarta.com.mx",
      img: "/img/logo-mimocorito.png"
    },
    {
      href: "https://maizal-sinaloense.alacarta.com.mx/",
      img: "/img/logo-maizal.png"
    },
    {
      href: "https://tamazula.alacarta.com.mx/",
      img: "/img/logo-birrias-tamazula.png"
    },
    {
      href: "https://mundo-sushi.alacarta.com.mx/",
      img: "/img/mundo-sushi-logo.jpg"
    },
    {
      href: "https://nanasnyc.alacarta.com.mx/",
      img: "/img/nanas-logo.jpg"
    },
    {
      href: "https://ensou.alacarta.com.mx/",
      img: "/img/ensou-logo.png"
    },
    {
      href: "https://mucha-vida.alacarta.com.mx/",
      img: "/img/logo-mucha-vida.png"
    },
    {
      href: "https://mr-leos.alacarta.com.mx/",
      img: "/img/logo-mrleos.png"
    },
    {
      href: "https://ncnl.alacarta.com.mx/",
      img: "/img/logo-ncnl.png"
    },
    {
      href: "https://omar-to-goo.alacarta.com.mx/",
      img: "/img/logo-omar.png"
    },
    {
      href: "https://odettecafe.alacarta.com.mx/",
      img: "/img/logo-odette.png"
    },
    {
      href: "https://ranch-pizza.alacarta.com.mx/",
      img: "/img/logo-ranch.png"
    },
    {
      href: "https://streetdogs.alacarta.com.mx/",
      img: "/img/logo-streetdog.png"
    }
  ];

</script>
<header class="bg-carta lg:grid lg:grid-cols-2 lg:items-center lg:justify-center">
    <div class="p-14">
        <img src="/img/logo.png" alt="A la Carta">
    </div>
    <div style="width:100%;height:0;padding-bottom:100%;position:relative;">
        <iframe src="https://giphy.com/embed/LAjncmZCp99m7gOJwI" width="100%" height="100%" style="position:absolute; pointer-events: none;" title="A la carta" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
    </div>    
    <div class="text-2xl text-center font-bold font-sans p-10 lg:text-7xl lg:col-span-2">
        <p>Tu aliado <span class="text-orange-500">estratégico</span> para el éxito en el sector restaurantero</p>
    </div>
</header>
<section class="p-2 my-2">
    <!-- <div class="flex">
        <div class="border-t-4 border-l-4 w-1/12 h-7 border-solid border-orange-600"></div>
        <div class="grow"></div>
        <div class="border-t-4 border-r-4 w-1/12 h-7 border-solid border-orange-600"></div>
    </div> -->
    <div class="lg:grid lg:grid-cols-2 lg:gap-10 lg:py-10 justify-center">
        <p class="uppercase font-protest text-4xl text-center lg:w-1/5 lg:mx-auto lg:text-7xl">¿Quiénes Somos?</p>
        <p class="m-3 text-justify text-xl lg:w-1/2 lg:m-auto lg:col-span-2">A la carta es una empresa integral de comunicación visual especializada en el ramo restaurantero, con un equipo altamente experimentado y apasionado por la gastronomía. Ofrecemos una amplia gama de servicios para ayudarte a potenciar tu negocio y llevarlo al siguiente nivel.</p>
    </div>
    <p class="my-4 uppercase font-protest text-4xl text-center lg:hidden">¿Qué te ofrecemos?</p>
    <div class="grid gap-3 grid-cols-2 lg:flex lg:flex-col lg:fixed lg:top-0 lg:right-0 lg:w-[10%] lg:bg-white lg:overflow-auto">
        <div class="flex flex-col justify-center items-center">
            <p class="my-4 uppercase font-black font-protest text-2xl text-yellow-500 text-center">Menú digital interactivo</p>
            <img src="/img/carta.jpg" alt="Celular" class="w-1/4">
            <button class="bg-carta rounded-full p-2 m-4 shadow-[2px_2px_5px_2px_#4a5568]"><a href="#menu" class="text-sm font-protest uppercase">Conoce más</a></button>
        </div>
        <div class="flex flex-col items-center">
            <p class="my-4 uppercase font-black font-protest text-2xl text-yellow-500 text-center">Diseño gráfico y comunicación visual</p>
            <img src="/img/cpu.jpg" alt="Computadora" class="w-1/4 lg:w-1/3 lg:h-1/2 lg:object-cover">
            <button class="bg-carta rounded-full p-2 m-4 shadow-[2px_2px_5px_2px_#4a5568]"><a href="#diseno" class="text-sm font-protest uppercase">Conoce más</a></button>
        </div>
        <div class="flex flex-col items-center">
            <p class="my-4 uppercase font-black font-protest text-2xl text-yellow-500 text-center">Manejo de redes sociales</p>
            <img src="/img/rrss2.png" alt="Computadora" class="w-1/4 lg:w-1/3 lg:h-1/2 lg:object-cover">
            <button class="bg-carta rounded-full p-2 m-4 shadow-[2px_2px_5px_2px_#4a5568]"><a href="#rrss" class="text-sm font-protest uppercase">Conoce más</a></button>
        </div>
        <div class="flex flex-col items-center">
            <p class="my-4 uppercase font-black font-protest text-2xl text-yellow-500 text-center">Consultoría e imagen</p>
            <img src="/img/camara2.png" alt="Cámara" class="w-1/4 lg:w-1/3 lg:h-1/2 lg:object-cover">
            <button class="bg-carta rounded-full p-2 m-4 shadow-[2px_2px_5px_2px_#4a5568]"><a href="#imagen" class="text-sm font-protest uppercase">Conoce más</a></button>
        </div>
        <div class="flex flex-col items-center col-span-2 w-full">
            <div class="max-w-[50%] mx-auto"> <!-- Added container for content constraint -->
                <p class="uppercase font-black font-protest text-2xl text-yellow-500 text-center">
                    Nuestros clientes
                </p>
                <img 
                    src="/img/manos.png" 
                    alt="Manos" 
                    class="w-2/5 mx-auto lg:w-1/3 lg:h-1/2 lg:object-cover"
                >
                <div class="text-center"> <!-- Wrapper for button centering -->
                    <button class="bg-carta rounded-full p-2 m-4 shadow-[2px_2px_5px_2px_#4a5568]">
                        <a href="#clientes" class="text-sm font-protest uppercase">Conoce más</a>
                    </button>
                </div>
            </div>
        </div>
    </div>
    <!-- <div class="flex">
        <div class="border-b-4 border-l-4 w-1/12 h-7 border-solid border-orange-600"></div>
        <div class="grow"></div>
        <div class="border-b-4 border-r-4 w-1/12 h-7 border-solid border-orange-600"></div>
    </div> -->
</section>
<section id="menu" class="bg-carta my-2 p-2">
    <!-- <div class="flex">
        <div class="border-t-4 border-l-4 w-1/12 h-7 border-solid border-orange-600"></div>
        <div class="grow"></div>
        <div class="border-t-4 border-r-4 w-1/12 h-7 border-solid border-orange-600"></div>
        </div> -->
        <div class="flex flex-col lg:grid lg:grid-cols-3 lg:justify-center">
            <div>
                <p class="mt-4 mx-2 w-2/3 uppercase font-black font-protest text-4xl lg:text-5xl lg:text-center text-left">Menú digital interactivo</p>
                <img src="/img/alacarta.gif" alt="" class="-my-20">
            <!-- <p class="text-2xl mx-2 font-extralight lg:mx-8 lg:text-3xl text-justify">Nuestros menús digitales permiten que tus clientes puedan navegar fácilmente, ver fotos y sin necesidad de descargar nada. Además, les será más sencillo encontrar tu menú en línea.</p> -->
        </div>
        <!-- <div class="flex items-center gap-4">
            <img src="/img/menu-digital.png" alt="Menú digital" class="w-1/2 m-5">
            <ul class="list-disc w-1/2 lg:text-xl">
                <li>Acceso directo a WhatsApp.</li>
                <li>Ubicación en Google Maps.</li>
                <li>Redes Sociales.</li>
                <li>Servicios de Entrega.</li>
            </ul>
        </div>
        <div class="flex items-center justify-end">
            <ul class="w-1/3 list-disc ml-10 lg:text-xl">
                <li>Fotografía Pop Up.</li>
                <li>Ligero.</li>
                <li>No requiere registro ni cuenta.</li>
                <li>Dinámico.</li>
                <li>Fácil Lectura.</li>
            </ul>
            <img src="/img/pop-up.png" alt="Menú digital" class="w-1/2 m-5">
        </div> -->
    </div>
    <!-- <div class="flex">
        <div class="border-b-4 border-l-4 w-1/12 h-7 border-solid border-orange-600"></div>
        <div class="grow"></div>
        <div class="border-b-4 border-r-4 w-1/12 h-7 border-solid border-orange-600"></div>
    </div> -->
</section>
<section id="clientes" class="p-2 my-2">
    <!-- <div class="flex">
        <div class="border-t-4 border-l-4 w-1/12 h-7 border-solid border-orange-600"></div>
        <div class="grow"></div>
        <div class="border-t-4 border-r-4 w-1/12 h-7 border-solid border-orange-600"></div>
    </div> -->
    <div class="flex flex-col">
        <p class="my-4 mx-2 uppercase font-black font-protest text-4xl text-carta text-center lg:text-7xl">Nuestros clientes</p>
    </div>
    <div class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 justify-items-center items-center gap-2 lg:gap-3 lg:mx-20">
        {#each clients as client}
          <div
            role="button"
            tabindex="0"
            class="relative transition-all duration-200 ease-in-out w-full max-w-[110px] md:max-w-[150px] lg:max-w-none my-1
                   cursor-pointer {selectedHref === client.href ? 'scale-[1.04] shadow-md z-10' : 'shadow-sm hover:shadow-md hover:scale-[1.02]'} 
                   rounded-lg bg-white pb-6"
            on:click={() => selectedHref = client.href}
            on:keydown={(e) => e.key === 'Enter' && (selectedHref = client.href)}
          >
            <!-- Image container -->
            <div class="aspect-square p-1 overflow-hidden rounded-lg">
              <img 
                src={client.img} 
                alt="Restaurant logo" 
                class="w-full h-full object-contain p-1"
              />
            </div>
      
            <!-- Visitar menú button -->
            {#if selectedHref === client.href}
              <div class="absolute inset-x-0 bottom-1 flex justify-center">
                <a
                  href={client.href}
                  target="_blank"
                  class="bg-gradient-to-r from-blue-500 to-purple-600 text-white 
                         font-semibold py-1.5 px-4 rounded-full shadow-md
                         hover:scale-105 transition-transform duration-150 text-xs
                         inline-block min-w-[100px] text-center"
                >
                  Visitar menú
                </a>
              </div>
            {/if}
          </div>
        {/each}
      </div>
    <!-- <div class="flex">
        <div class="border-b-4 border-l-4 w-1/12 h-7 border-solid border-orange-600"></div>
        <div class="grow"></div>
        <div class="border-b-4 border-r-4 w-1/12 h-7 border-solid border-orange-600"></div>
    </div> -->
</section>
<section id="contacto" class="bg-carta my-2 p-2">
    <div class="flex">
        <div class="border-t-4 border-l-4 w-1/12 h-7 border-solid border-black"></div>
        <div class="grow"></div>
        <div class="border-t-4 border-r-4 w-1/12 h-7 border-solid border-black"></div>
    </div>
    <div class="flex flex-col">
        <p class="my-4 mx-2 uppercase font-black font-protest text-4xl text-black text-center lg:text-7xl">¿quiéres saber más?</p>
    </div>
    <div class="flex flex-col">
        <p class="text-2xl mx-6 font-extralight text-justify lg:text-center">Contáctanos hoy mismo y descubre cómo podemos ayudarte a hacer crecer tu negocio.</p>
    </div>
    <div class="flex justify-center lg:my-10">
        <a href="https://wa.me/5216671606417" class="text-center bg-white p-2 rounded-full border-8 border-green-500"><i class="bx bxl-whatsapp text-green-500 text-8xl"></i></a>
    </div>
    <div class="flex">
        <div class="border-b-4 border-l-4 w-1/12 h-7 border-solid border-black"></div>
        <div class="grow"></div>
        <div class="border-b-4 border-r-4 w-1/12 h-7 border-solid border-black"></div>
    </div>
</section>
<section id="diseno" class="p-2 my-2">
    <!-- <div class="flex">
        <div class="border-t-4 border-l-4 w-1/12 h-7 border-solid border-orange-600"></div>
        <div class="grow"></div>
        <div class="border-t-4 border-r-4 w-1/12 h-7 border-solid border-orange-600"></div>
    </div> -->
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
    <!-- <div class="flex">
        <div class="border-b-4 border-l-4 w-1/12 h-7 border-solid border-orange-600"></div>
        <div class="grow"></div>
        <div class="border-b-4 border-r-4 w-1/12 h-7 border-solid border-orange-600"></div>
    </div> -->
</section>
<section id="rrss" class="bg-carta my-2 p-2">
    <!-- <div class="flex">
        <div class="border-t-4 border-l-4 w-1/12 h-7 border-solid border-orange-600"></div>
        <div class="grow"></div>
        <div class="border-t-4 border-r-4 w-1/12 h-7 border-solid border-orange-600"></div>
    </div> -->
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
    <!-- <div class="flex">
        <div class="border-b-4 border-l-4 w-1/12 h-7 border-solid border-orange-600"></div>
        <div class="grow"></div>
        <div class="border-b-4 border-r-4 w-1/12 h-7 border-solid border-orange-600"></div>
    </div> -->
</section>
<section id="imagen" class="p-2 my-2">
    <!-- <div class="flex">
        <div class="border-t-4 border-l-4 w-1/12 h-7 border-solid border-orange-600"></div>
        <div class="grow"></div>
        <div class="border-t-4 border-r-4 w-1/12 h-7 border-solid border-orange-600"></div>
    </div> -->
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
    <!-- <div class="flex">
        <div class="border-b-4 border-l-4 w-1/12 h-7 border-solid border-orange-600"></div>
        <div class="grow"></div>
        <div class="border-b-4 border-r-4 w-1/12 h-7 border-solid border-orange-600"></div>
    </div> -->
</section>
<section id="cotizador" class="p-2 my-2">
    <!-- <div class="flex">
        <div class="border-t-4 border-l-4 w-1/12 h-7 border-solid border-orange-600"></div>
        <div class="grow"></div>
        <div class="border-t-4 border-r-4 w-1/12 h-7 border-solid border-orange-600"></div>
    </div> -->
    <div class="flex flex-col">
        <p class="my-4 mx-2 uppercase font-black font-protest text-4xl">Cotizador de Menú digital interactivo</p>
    </div>
    <div class="p-4">
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
    <!-- <div class="flex">
        <div class="border-b-4 border-l-4 w-1/12 h-7 border-solid border-orange-600"></div>
        <div class="grow"></div>
        <div class="border-b-4 border-r-4 w-1/12 h-7 border-solid border-orange-600"></div>
    </div> -->
</section>
<div class="mb-20">.</div>
<GotoTop />
<Footer />