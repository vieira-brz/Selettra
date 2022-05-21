$(document).ready(function(rf)
{
    // 
    // Limpando inputs
    // 
    $('input').focus(function(e)
    {
        e.preventDefault();

        $(this).val('');

        e.stopImmediatePropagation();
    });


    // 
    // Botão Login
    // 
    $('button[name="login"]').click(function(e)
    {
        e.preventDefault();

        let user = '';
        let pass = '';

        user = $('input[name="user"]').val();
        pass = $('input[name="pass"]').val();

        if (user == '' || pass == '')
        {
            sel.aviso('Preencha todos os campos!');
        }

        e.stopImmediatePropagation();
    });

});