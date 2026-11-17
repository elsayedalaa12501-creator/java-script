var createCounter = function(init) {
    let resett=init;
    return {
       increment: function(){
        return ++resett;
       },
       decrement:function(){
        return --resett;
       },
       reset:function(){
        resett=init;
        return resett;
       }
    }
};
