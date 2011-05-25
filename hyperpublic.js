var Hyperpublic = (function (undefined){

    var endpoint = 'https://hyperpublic.com/api/v1',
        clientKey = "3RiGGtdIlJbVZhlqUvdGg47mwSegIYYHkfsWi0IT",
        clientSecret = "IGqb1qcJfnkZJ839lR70PlI0rnP59SjG6BdOtmqI",
    
    inject = function (url) {
        var tag = document.createElement('script');
        tag.type = 'text/javascript';
        tag.src = url;        
        document.getElementsByTagName('head')[0].appendChild(tag);
    };

    if (this.key || this.secret === "" || undefined) {
        throw new Error('You need to use the API keys provided to you at http://hyperpublic.com/oauth_clients');
    }

    return {
        person: function (id, callback) {
            var url = [endpoint, 'people', id];
            this.api(url, callback);
        },
        
        api: function (url, callback) {
            var query = {
                client_id: clientKey,
                client_secret: clientSecret
            },
            queryString = [], key;

            url = typeof url !== 'string' ? url.join('/') : url;           

            query.callback = callback;
            
            for (key in query) {
                queryString.push([key, encodeURIComponent(query[key])].join('='));
            }

            url = url + '?' + queryString.join('&');
            inject(url);
        },
    };
}());

/*
var Hyperpublic = (function (undefined){

    var callback_count = 0,
    endpoint = "https://hyperpublic.com/api/v1",
    key = "3RiGGtdIlJbVZhlqUvdGg47mwSegIYYHkfsWi0IT",
    secret = "IGqb1qcJfnkZJ839lR70PlI0rnP59SjG6BdOtmqI",
       
    make_call = function (url) {
        
        var s = document.createElement('script');
        s.type = 'script/javascript';
        s.src = url;
        
        document.getElementsByTagName('head')[0].appendChild(s);

    };

    // freak out if the api credentials have been left blank
    if (this.key || this.secret === "" || undefined) {
        throw new Error('You need to use the API keys provided to you at http://hyperpublic.com/oauth_clients');
    }

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
          
//  return Hyperpublic;

        },

        api: function (url, callback) {
            console.log(url);
            var query = {
                r: Math.floor(Math.random() * 9999999),
                client_id: key,
                client_secret: secret
            },   
            query_string = [], x;

            if (typeof url !== 'string') {
                url = url.join('/');
            }

//            if (typeof callback !== 'function') {
//                return Hyperpublic;
//                // need a callback yall
//            }

            console.log(callback);
            query.callback = callback;
            console.log(query);            
            for (x in query) {
                console.log(x);
                query_string.push([x, encodeURIComponent(query[x])].join('='));
                
            }

            url = url + '?' + query_string.join('&');
            console.log(url);
            make_call(url);
            return Hyperpublic;
        },

        api_url: endpoint
    };
}());
*/
