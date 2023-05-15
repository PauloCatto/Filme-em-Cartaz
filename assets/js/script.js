https://api.b7web.com.br/cinema/

$(() => {
 $.ajax({
    url:'https://api.b7web.com.br/cinema/',
    type: 'GET',
    dataType: 'json',
    beforeSend:(()=>{
        $('.filmes').html('<div class ="col-md-12">Carregando...</div>');
    }),
    success : ((json) => {
       let html = '';

       for(let i in json) {
        html += '<div class = "col-md-4"><div class ="filme"><img src ="' +json[i].avatar+'"/>'+json[i].titulo+'</div></div>';
       }
       $('.filmes').html(html);
    })
 })
});