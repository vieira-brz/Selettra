// 
// Pegando todos os dados do usuario
// 
$.get('../controllers/session.php', function(r)
{
    if (r.validate() == 'OK')
    {
        $(document).ready(function(rf)
        {
            // CODING...
        });
    }
    else { sel.erro(r); }
});