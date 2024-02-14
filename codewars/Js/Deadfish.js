function parse( data ) {

    let response = [];
    let value = 0;

    data.split("").forEach(function(num) {

        if(num=='i') value++;

        if(num=='d') value--;

        if(num=='s') value*=value;

        if(num=='o') response.push(value);
    });

    return response;
}




