module("vie.js - Apache Stanbol Service");

test("Test stanbol connection", function() {
    var z = new VIE();
    ok(z.StanbolService, "Checking if the Stanbol Service exists.'");
    z.use(new z.StanbolService);
    ok(z.service('stanbol'));
});

test("VIE.js StanbolService - Analyze", function () {
    
    var elem = $('<p>This is a small test, where Steve Jobs sings a song.</p>');
    var z = new VIE();
    ok (z.StanbolService);
    equal(typeof z.StanbolService, "function");
    z.use(new z.StanbolService({url : "http://dev.iks-project.eu:8081"}));
    stop(10000); // 10 second timeout
    z.analyze({element: elem}).using('stanbol').execute().done(function(entities) {
        ok(entities);
        ok (entities.length > 0);
        //TODO: add more tests
        start();
    })
    .fail(function(f){
        ok(false, f);
        start();
    });
});

test("VIE.js StanbolService - Find", function () {
    
    var term = "Barack Obama";
    var limit = 10;
    var offset = 0;
    var z = new VIE();
    ok (z.StanbolService);
    equal(typeof z.StanbolService, "function");
    z.use(new z.StanbolService({url : "http://dev.iks-project.eu:8081"}));
    stop(10000); // 10 second timeout
    z.find({term: term, limit: limit, offset: offset})
    .using('stanbol').execute().done(function(x) {
        ok(true);
        //TODO: add more tests
        start();
    })
    .fail(function(f){
        ok(false, f);
        start();
    });
});


test("VIE.js StanbolService - Load", function () {
    
    var entity = "<http://dbpedia.org/resource/Barack_Obama>";
    var z = new VIE();
    ok (z.StanbolService);
    equal(typeof z.StanbolService, "function");
    z.use(new z.StanbolService({url : "http://dev.iks-project.eu:8081"}));
    stop(10000); // 10 second timeout
    z.load({entity: entity})
    .using('stanbol').execute().done(function(x) {
        ok(true);
        //TODO: add more tests
        start();
    })
    .fail(function(f){
        ok(false, f);
        start();
    });
});
