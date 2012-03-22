

define(["Director"], function(Director) {
    
    function Movie (p_title, p_rating, p_id){
        var title = p_title;
        var rating = p_rating;
        var id = p_id;
        var director;

        this.getTitle = function (){
            return title;
        }
        this.setTitle = function(_title){
            title = _title;
        }
        this.getRating = function (){
            return rating;
        }
        this.setRating = function(_rating){
            rating = _rating;
        }
        this.getId = function (){
            return id;
        }
        this.setId = function (_id){
            id = _id;
        }
        
        this.getDirector = function (){
            return director;
        }
        this.setDirector = function (_director){
            director = _director;
        }
        
    }
    return (Movie);
}
);