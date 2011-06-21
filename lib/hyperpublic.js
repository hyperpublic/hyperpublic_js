Hyperpublic = function (clientKey, clientSecret, host) {
    if (!clientKey || !clientSecret) {
        throw new Error("API keys are requried. If you don't have keys yet, visit http://hyperpublic.com/oauth_clients");
    } // just checkin...
    
    var host = /^http:\/\/localhost:3000\/api\/v1$/.test(host) ? host : undefined;

    var api, 
        inject, 
        endpoint = host || 'https://api.hyperpublic.com/api/v1';
        
    this.people = {
        find: function (params, callback) {
            var url = [endpoint, 'people'];
            api(url, callback, params);
        },
        show: function (id, callback) {
            var url = [endpoint, 'people', id];
            api(url, callback);
        }
    };

    this.places = {
        find: function (params, callback) {        
            var url = [endpoint, 'places'];
            api(url, callback, params);
        },
        show: function (id, callback) {
            var url = [endpoint, 'places', id];
            api(url, callback);
        }
    };

    this.things = {
        find: function (params, callback) {        
            var url = [endpoint, 'things'];
            api(url, callback, params);
        },
        show: function (id, callback) {
            var url = [endpoint, 'things', id];
            api(url, callback);
        }
    };

    api = function (url, callback, params) {

        var query = {
            client_id: clientKey,
            client_secret: clientSecret
        },
        queryString = [], key;

        url = typeof url !== 'string' ? url.join('/') : url;           

        query.callback = callback;

        for (key in query) {
            if (query.hasOwnProperty(key)) {
                queryString.push([key, encodeURIComponent(query[key])].join('='));                
            }
        }

        if (arguments.length === 3) {
            for (key in params) {
                if (params.hasOwnProperty(key)) {
                    queryString.push([key, encodeURIComponent(params[key])].join('='));
                }
            }
        }

        url = url + '?' + queryString.join('&');
        inject(url);
    };

    inject = function (url) {
        var tag = document.createElement('script');
        tag.type = 'text/javascript';
        tag.src = url;
        document.getElementsByTagName('head')[0].appendChild(tag);
    };
};
