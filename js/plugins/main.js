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




/*------------------
    REQUISICOES
-----------------*/

String.prototype.validate = function()
{
  if (this.charAt(0) != '<' && this.charAt(0) != 'E')
  {
    return 'OK';
  }
  else if (this.charAt(0) == 'E')
  {
    return 'NOK';
  }
  else
  {
    return 'ERRO_SERVIDOR';
  }
}




/*--------------
    DINHEIRO
-------------*/

String.prototype.toMoney = function()
{
  let new_this = this.split('.')[0];

  switch (new_this.length)
  {
    case 4: new_this = new_this.substring(0, 1) +'.'+ new_this.substring(1); break;
    case 5: new_this = new_this.substring(0, 2) +'.'+ new_this.substring(2); break;
    case 6: new_this = new_this.substring(0, 3) +'.'+ new_this.substring(3); break;
    case 7: new_this = new_this.substring(0, 1) +'.'+ new_this.substring(1, 4) +'.'+ new_this.substring(4); break;
    case 8: new_this = new_this.substring(0, 2) +'.'+ new_this.substring(2, 5) +'.'+ new_this.substring(5); break;
    case 9: new_this = new_this.substring(0, 3) +'.'+ new_this.substring(3, 6) +'.'+ new_this.substring(6); break;
    default: new_this = new_this; break;
  }

  let acrescimo = this.split('.')[1] != undefined ? ','+ this.split('.')[1] : '';

  return new_this + acrescimo;
}




/*------------------------
    DATA E SEMANA ATUAL
-----------------------*/

function semana_atual()
{
  currentdate = new Date();
  let oneJan = new Date(currentdate.getFullYear(), 0, 1);
  let numberOfDays = Math.floor((currentdate - oneJan) / (24 * 60 * 60 * 1000));
  return Math.ceil(( currentdate.getDay() + 1 + (numberOfDays - (14 - currentdate.getDay()) ) ) / 7);
}

function data_atual(incremento_de_dias = 0)
{
  let offset = '';
  let yyyy_mm_dd = new Date();

  yyyy_mm_dd.setDate(yyyy_mm_dd.getDate() + incremento_de_dias);
  yyyy_mm_dd.toISOString().split('T')[0];
  offset = yyyy_mm_dd.getTimezoneOffset();
  yyyy_mm_dd = new Date(yyyy_mm_dd.getTime() - (offset * 60 * 1000));

  return yyyy_mm_dd.toISOString().split('T')[0];
}