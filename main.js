$(document).ready(function(){
    $('header button').click(function(){
        $('form').slideDown()
    })

    $('#botaoCancelar').click(function(){
        $('form').slideUp()
    })
    $('form').on('submit', function(e){
        e.preventDefault();
        const enderecoimagem = $('#endereco').val();
        const novoItem = $('<li style="display : none"></li>')
        $(`<img src ='${enderecoimagem}'/>`).appendTo(novoItem)
        $(`<div class ='overlay'>

            <a href='${enderecoimagem}' target='_blank' title='ver imagem em tamanho real'>
                ver imagem em tamanho real
            </a>

        </div>
        `).appendTo(novoItem)
        $(novoItem).appendTo('ul')
        $(novoItem).fadeIn(2000)
        $('#endereco').val('')
    })
})
