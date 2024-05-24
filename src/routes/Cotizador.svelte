<script>
    let paginas = 1;
    let platillosSinFoto = 0;
    let platillosConFoto = 0;
    let moduloIdioma = false; // Nueva variable para el checkbox

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

        if (moduloIdioma) {
            total *= 1.30; // Incrementa el total en un 30% si el checkbox está marcado
        }

        total2 = total * 1.15; // Aplica el 15% de impuesto
    }

    function formatNumber(number) {
        return number.toLocaleString('es-MX', { style: 'currency', currency: 'MXN', minimumFractionDigits: 2 });
    }
</script>

<style>
    .custom-checkbox {
        appearance: none;
        background-color: #fff;
        border: 2px solid #ccc;
        padding: 10px;
        width: 24px;
        height: 24px;
        border-radius: 4px;
        display: inline-block;
        position: relative;
        cursor: pointer;
    }

    .custom-checkbox:checked {
        background-color: #f8c313;
        border-color: #909090;
    }

    .custom-checkbox:checked::after {
        content: '';
        position: absolute;
        top: 4px;
        left: 1.5px;
        width: 16px;
        height: 16px;
        background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white"><path d="M20.285 4.711l-11.34 11.34-5.285-5.285-1.415 1.415 6.7 6.7 12.755-12.755-1.415-1.415z"/></svg>');
        background-size: contain;
        background-repeat: no-repeat;
    }

    .checkbox-label {
        font-size: 1.25rem;
        color: #4a4a4a;
        cursor: pointer;
        user-select: none;
        margin-left: 8px;
    }
</style>

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
    <div class="mb-4 flex items-center">
        <input type="checkbox" id="moduloIdioma" bind:checked={moduloIdioma} class="custom-checkbox" />
        <label for="moduloIdioma" class="checkbox-label">Módulo de Idioma</label>
    </div>
    <button class="bg-orange-500 text-white px-4 py-2 rounded" on:click={calcularTotal}>Calcular</button>
    <div class="text-3xl font-protest mt-4">
        Precio Total: <span>{formatNumber(total2)}</span>
    </div>
</div>

