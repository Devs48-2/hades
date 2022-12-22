function message_error(obj) {
    if(typeof(obj) === 'object' ){
        var html = '<ul style="text-align: left">';
        $.each(obj, function(key, value) {
            html += '<li>'+key+': '+ value + '</li>';
            console.log(key);
            console.log(value);
        });
        html+= '</ul>';
    }
    else{
        html = '<p>'+ obj + '</p>'
    };
   
    Swal.fire({
        title: 'Error',
        html: html,
        icon: 'error',
    });
}