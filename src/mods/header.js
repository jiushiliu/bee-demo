KISSY.add('bee-demo/mods/header',['node'], function(S,require){
    var $ = require('node').all;
    return {
        init:function(){
            S.log('header init');
            $('header').html('use bee-demo/mods/header');
        }
    }
});