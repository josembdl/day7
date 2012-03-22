/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

require(["Movie", "Director","jquery.mobile-1.1.0-rc.1.min","jquery-1.7.1.min"], function(Movie, Director) {

    var alien = new Movie("Alien","7","4598");
    var RidleyScott = new Director("Ridley Scott");        
    RidleyScott.setQuotes(['Cast is everything',"Do what you haven't...",'Good','Bad','Regular']);
    alien.setDirector(RidleyScott);
    alien.getDirector().speak();

});



