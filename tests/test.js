describe("This API wrapper", function(){
    var client_id = 'Y8ccbceyZZbcmNoZ8RsXLHDhxSs0qnL40SmmjRBU',
    client_secret = '5YugC5yJYeFgjcfYf0VrzYnsiVJu00TYJBOTd4r2',
    hyperpublic;
    
    beforeEach(function(){
        hyperpublic = new Hyperpublic(client_id, client_secret, 'http://localhost:3000/api/v1');
        
        this.addMatchers({
            toBeValid: function() {                                                                                                           
                if (Object.prototype.toString.call(this.actual) == "[object Array]") {
                    if (this.actual[0].display_name) {
                        return true;                                                             
                    } else {
                        return false;
                    }
                } else if (typeof(this.actual) === "object") {
                    if (this.actual.display_name) {
                        return true;
                    } else {
                        return false;
                    }
                } else {
                    return false;
                }
            }
        });                            
    });
    
    it("should be able show a person by id",function(){                      
        hyperpublic.people.show(4, 'callback');
        
        waits(3000);

        callback = function(data){      
            expect(data).toBeValid();
        };
        
    });

    it("should be able to find people by query",function(){                      
        hyperpublic.people.find({"postal_code": "11211", "limit" : "2"}, 'callback');
        
        waits(3000);

        callback = function(data){      
            expect(data).toBeValid();
        };
        
    });

    it("should be able show a place by id",function(){                      
        hyperpublic.places.show('4de6914dcf8c121126000029', 'callback');
        
        waits(3000);

        callback = function(data){      
            expect(data).toBeValid();
        };
        
    });

    it("should be able to find places by query",function(){                      
        hyperpublic.places.find({"postal_code": "11211", "limit" : "2"}, 'callback');
        
        waits(3000);

        callback = function(data){      
            expect(data).toBeValid();
        };
        
    });

    it("should be able show a thing by id",function(){                      
        hyperpublic.things.show('4defadbbcf8c1246c2000063', 'callback');
        
        waits(3000);

        callback = function(data){      
            expect(data).toBeValid();
        };
        
    });

    it("should be able to find things by query",function(){                      
        hyperpublic.things.find({"postal_code": "11211", "limit" : "2"}, 'callback');
        
        waits(3000);

        callback = function(data){      
            expect(data).toBeValid();
        };
        
    });             
});
