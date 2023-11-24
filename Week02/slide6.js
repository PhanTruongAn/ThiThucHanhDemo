$.ajax({
        // Old API
        // url: "https://jsonplaceholder.typicode.com/todos/1",
        // New API
        url: "https://dummyjson.com/products/2",
        beforeSend: function(xhr) {
            xhr.overrideMimeType("text/plain; charset=x-user-defined");
        }
    })
    .done(function(data) {
        if (console && console.log) {
            console.log("Sample of data:", data.slice(0, 100));
        }
    });