/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

define(function() {
    
    function Director (_name) {
        
        //Variables Privadas
        var name= _name;
        var quotes = new Array();
        
        //Metodos privados
        this.getName = function(){
            return name;
        }
        this.setName = function(_name){
            name = _name;
        }
        this.getQuotes = function(){
            return quotes;
        }
        this.setQuotes = function(_quotes){
            quotes = _quotes;
        }
        
    }
    
    // Metodos publicos
    
    Director.prototype.speak = function() {
        //Para publicar todos los comentarios
        /**
        var count = this.getQuotes().length;
        var string = this.getName() + " says: ";
        for (var i = 0; i < count; ++i){
            string += '"' + this.getQuotes()[i] + '." ';
        }
        console.log(string);
        $("#quotes").html(string);
        **/
       
        //Para publicar comentario aleatorio
        var count = this.getQuotes().length;
        var randomNumber = Math.floor(Math.random()*count);
        var string = this.getName() + " says: ";
        string += '"' + this.getQuotes()[randomNumber] + '." ';
        console.log(string);
        $("#quotes").html(string);
    }
    
    return (Director);
});
