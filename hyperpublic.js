 var Hyperpublic = (function (undefined){

    var 
    
    callback_count = 0,

    endpoint = "https://hyperpublic.com/api/v1",
    
    key = "3RiGGtdIlJbVZhlqUvdGg47mwSegIYYHkfsWi0IT",
    
    secret = "IGqb1qcJfnkZJ839lR70PlI0rnP59SjG6BdOtmqI",
    
    // create the callback
    // return the function name for jsonp request
    // triggers onProcess after hitting 'callback'
    next_callback = function (callback) {
        callback_count = callback_count + 1;
        Hyperpublic.callbacks['c' + callback_count] = function (data) {            
            console.log(data);
            callback.call(Hyperpublic, data);                        
            Hyperpublic.call(Hyperpublic);
        };

        return 'Hyperpublic.callbacks.c' + callback_count;
    },

    do_call = function (url) {
  
        var s = document.createElement('script');
        s.type = 'script/javascript';
        s.src = url;
        
        document.getElementsByTagName('head')[0].appendChild(s);

    };

    return {
        callbacks:  {},

        person: function (id, callback) {
            var url = [endpoint, 'people', id]; 
            this.api(url, callback);
            return Hyperpublic;
        },

        place: function (id, callback) {
            var url = [endpoint, 'places', id]; 
            this.api(url, callback);
            return Hyperpublic;
        },
        
        thing: function (id, callback) {
            var url = [endpoint, 'things', id]; 
            this.api(url, callback);
            return Hyperpublic;
        },

        api: function (url, callback) {
            var query = {
                r: Math.floor(Math.random() * 9999999),
                client_id: key,
                client_secret: secret
            },
            query_string = [], x;

            if (typeof url !== 'string') {
                url = url.join('/');
            }

            if (typeof callback !== 'function') {
                return Hyperpublic;
                // need a callback yall
            }

            query.callback = next_callback(callback);
            
            for (x in query) {
                query_string.push([x, encodeURIComponent(query[x])].join('='));
            }

            url = url + '?' + query_string.join('&');

            do_call(url);
            return Hyperpublic;
        },

        api_url: endpoint
    };
}());
