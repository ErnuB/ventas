<script>
    let paginas = 1;
    let platillosSinFoto = 0;
    let platillosConFoto = 0;
    let botonesRRSS = 0;
    let carruseles = 0;
    let qr = 1;

    let precioPagina = 1400;
    let precioPlatilloSinFoto = 15;
    let precioPlatilloConFoto = 50;

    let total = 0;
    let total2 = 0;

    function calcularTotal() {
        total = (
            precioPagina +
            platillosSinFoto * precioPlatilloSinFoto +
            platillosConFoto * precioPlatilloConFoto
        );
        total2 = total * 1.15;
    }

    function formatNumber(number) {
        return number.toLocaleString('es-MX', { style: 'currency', currency: 'MXN', minimumFractionDigits: 2 });
    }
</script>

<div class="p-4 bg-white rounded shadow-lg">
    <h2 class="text-3xl font-protest mb-4">Cotizador</h2>
    <div class="mb-4">
        <label for="platillosSinFoto" class="block text-2xl mx-2 font-extralight text-gray-700">Platillos (sin foto)</label>
        <input type="number" id="platillosSinFoto" bind:value={platillosSinFoto} class="mt-1 px-3 text-xl block w-3/4 rounded border-gray-500 border-solid border-[1px] shadow-sm" min="0" />
    </div>
    <div class="mb-4">
        <label for="platillosConFoto" class="block text-2xl mx-2 font-extralight text-gray-700">Platillos con Pop-up (foto)</label>
        <input type="number" id="platillosConFoto" bind:value={platillosConFoto} class="mt-1 px-3 text-xl block w-3/4 rounded border-gray-500 border-solid border-[1px] shadow-sm" min="0" />
    </div>
    <button class="bg-orange-500 text-white px-4 py-2 rounded" on:click={calcularTotal}>Calcular</button>
    <div class="text-3xl font-protest mt-4">
        Precio Total: <span>{formatNumber(total2)}</span>
    </div>
</div>
