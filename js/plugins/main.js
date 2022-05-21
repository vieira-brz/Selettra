/*-------------
    ALERT
------------*/

console.log('Listagem de objetos: sellert.js -------------------------------------------------------------------------------------------');
console.log('Alertas: ', ['tipo (string)', 'texto (string)', 'titulo (string)', 'time (integer = segundos)', 'danger (boolean)', 'buttons (boolean)', 'closeAround (boolean)']);

const sel = function(texto) 
{ 
    swal(texto, { closeOnClickOutside: false, }); 
}

sel.request = function(texto) 
{ 
    swal(texto, { buttons: false, closeOnClickOutside: false, icon: 'info', }); 
}

sel.sucesso = function(texto, obj) 
{
    if (typeof(texto) == 'object') { console.error('O primeiro parâmetro espera por uma string, objeto encontrado.'); }

    typeof(texto) != 'string' ? texto = 'Sucesso ao executar a ação!' : texto = texto

    if (obj != undefined)
    {
        obj.time == undefined ? timer = null : timer = obj.time * 1000
        obj.danger == undefined ? dangerMode = false : dangerMode = obj.danger
        obj.buttons == undefined ? activeButtons = true : activeButtons = obj.buttons
        obj.closeAround == undefined ? closeSwal = false : closeSwal = obj.closeAround

        if (typeof(activeButtons) != 'boolean' && activeButtons != '') { console.error('Erro: o parametro buttons deve conter um tipo booleano, true ou false!') }
        if (typeof(dangerMode) != 'boolean' && dangerMode != '') { console.error('Erro: o parametro danger deve conter um tipo booleano, true ou false!') }
        if (typeof(closeSwal) != 'boolean' && closeSwal != '') { console.error('Erro: o parametro close around deve conter um tipo booleano, true ou false!') }

        swal('Sucesso!', texto, {
        icon: 'success',
        buttons: activeButtons,
        closeOnClickOutside: closeSwal,
        dangerMode: dangerMode,
        timer: timer,
        });
    }
    else
    {
        swal('Sucesso!', texto, {
        icon: 'success',
        buttons: true,
        closeOnClickOutside: false,
        dangerMode: false,
        timer: null,
        });
    }
}

sel.erro = function(texto, obj) 
{
    if (typeof(texto) == 'object') { console.error('O primeiro parâmetro espera por uma string, objeto encontrado.'); }

    if (obj != undefined)
    {
        obj.time == undefined ? timer = null : timer = obj.time * 1000
        obj.danger == undefined ? dangerMode = false : timer = obj.danger
        obj.buttons == undefined ? activeButtons = true : timer = obj.buttons
        obj.closeAround == undefined ? closeSwal = false : timer = obj.closeAround

        if (typeof(activeButtons) != 'boolean' && activeButtons != '') { console.error('Erro: o parametro buttons deve conter um tipo booleano, true ou false!') }
        if (typeof(dangerMode) != 'boolean' && dangerMode != '') { console.error('Erro: o parametro danger deve conter um tipo booleano, true ou false!') }
        if (typeof(closeSwal) != 'boolean' && closeSwal != '') { console.error('Erro: o parametro close around deve conter um tipo booleano, true ou false!') }

        swal('Erro!', texto, {
        icon: 'error',
        buttons: activeButtons,
        closeOnClickOutside: closeSwal,
        dangerMode: dangerMode,
        timer: timer,
        });
    }
    else
    {
        swal('Erro!', texto, {
        icon: 'error',
        buttons: true,
        closeOnClickOutside: false,
        dangerMode: false,
        timer: null,
        });
    }
}

sel.aviso = function(texto, obj) 
{
    if (typeof(texto) == 'object') { console.error('O primeiro parâmetro espera por uma string, objeto encontrado.'); }

    typeof(texto) != 'string' ? swal('Erro!', 'Insira um texto de entrada!', {icon:'error'}) : texto = texto

    if (obj != undefined)
    {
        obj.time == undefined ? timer = null : timer = obj.time * 1000
        obj.danger == undefined ? dangerMode = false : dangerMode = obj.danger
        obj.buttons == undefined ? activeButtons = true : activeButtons = obj.buttons
        obj.closeAround == undefined ? closeSwal = false : closeSwal = obj.closeAround

        if (typeof(activeButtons) != 'boolean' && activeButtons != '') { console.error('Erro: o parametro buttons deve conter um tipo booleano, true ou false!') }
        if (typeof(dangerMode) != 'boolean' && dangerMode != '') { console.error('Erro: o parametro danger deve conter um tipo booleano, true ou false!') }
        if (typeof(closeSwal) != 'boolean' && closeSwal != '') { console.error('Erro: o parametro close around deve conter um tipo booleano, true ou false!') }

        swal('Aviso!', texto, {
        icon: 'warning',
        buttons: activeButtons,
        closeOnClickOutside: closeSwal,
        dangerMode: dangerMode,
        timer: timer,
        });
    }
    else
    {
        swal('Aviso!', texto, {
        icon: 'warning',
        buttons: true,
        closeOnClickOutside: false,
        dangerMode: false,
        timer: null,
        });
    }
}

sel.info = function(titulo, texto, obj) 
{
    if (typeof(texto) == 'object') { console.error('O segundo parâmetro espera por uma string, objeto encontrado.'); }
    if (typeof(titulo) == 'object') { console.error('O primeiro parâmetro espera por uma string, objeto encontrado.'); }

    typeof(texto) != 'string' ? swal('Erro!', 'Insira um texto de entrada!', {icon:'error'}) : texto = texto
    typeof(titulo) != 'string' ? swal('Erro!', 'Insira um título de entrada!', {icon:'error'}) : titulo = titulo

    if (obj != undefined)
    {
        obj.time == undefined ? timer = null : timer = obj.time * 1000
        obj.danger == undefined ? dangerMode = false : dangerMode = obj.danger
        obj.buttons == undefined ? activeButtons = true : activeButtons = obj.buttons
        obj.closeAround == undefined ? closeSwal = false : closeSwal = obj.closeAround

        if (typeof(activeButtons) != 'boolean' && activeButtons != '') { console.error('Erro: o parametro buttons deve conter um tipo booleano, true ou false!') }
        if (typeof(dangerMode) != 'boolean' && dangerMode != '') { console.error('Erro: o parametro danger deve conter um tipo booleano, true ou false!') }
        if (typeof(closeSwal) != 'boolean' && closeSwal != '') { console.error('Erro: o parametro close around deve conter um tipo booleano, true ou false!') }

        swal(titulo, texto, {
        icon: 'info',
        buttons: activeButtons,
        closeOnClickOutside: closeSwal,
        dangerMode: dangerMode,
        timer: timer,
        });
    }
    else
    {
        swal(titulo, texto, {
        icon: 'info',
        buttons: true,
        closeOnClickOutside: false,
        dangerMode: false,
        timer: null,
        });
    }
}

sel.db = function(obj) 
{
    if (obj != undefined)
    {
        obj.time == undefined ? timer = null : timer = obj.time * 1000
        obj.danger == undefined ? dangerMode = false : dangerMode = obj.danger
        obj.buttons == undefined ? activeButtons = true : activeButtons = obj.buttons
        obj.closeAround == undefined ? closeSwal = false : closeSwal = obj.closeAround

        if (typeof(activeButtons) != 'boolean' && activeButtons != '') { console.error('Erro: o parametro buttons deve conter um tipo booleano, true ou false!') }
        if (typeof(dangerMode) != 'boolean' && dangerMode != '') { console.error('Erro: o parametro danger deve conter um tipo booleano, true ou false!') }
        if (typeof(closeSwal) != 'boolean' && closeSwal != '') { console.error('Erro: o parametro close around deve conter um tipo booleano, true ou false!') }

        swal('Erro!', 'Erro na conexão com o servidor!', {
        icon: 'error',
        buttons: activeButtons,
        closeOnClickOutside: closeSwal,
        dangerMode: dangerMode,
        timer: timer,
        });
    }
    else
    {
        swal('Erro!', 'Erro na conexão com o servidor!', {
        icon: 'error',
        buttons: true,
        closeOnClickOutside: false,
        dangerMode: true,
        timer: null,
        });
    }
}

sel.complete = function() { swal.close(); }
