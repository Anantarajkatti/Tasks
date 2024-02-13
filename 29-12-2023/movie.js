class Movie
        {
            constructor(MovieName,Studio,rating)
            {
                this.name= MovieName;
                this.Studio= Studio;
                if(rating=== undefined)
                this.rating= 'PG';
                else
                this .rating= rating
            }
            getPG(name,rating)
            {
                //console.log(rating)
                if(rating==='PG')
                {
                    name=this.name
                    return name
                }
            }
        }
    
const movies=[['Avavtar',' Lightstorm Entertainment','PG13'],['spiderman','Marvel Entertainment','PG-13'],['Fight Club','20th Century Studios','R'],['coco','Pixar Animation','PG'],['UP','Pixar Animation']]
for(i=0;i<movies.length;i++)
{
    movies[i]= new Movie(movies[i][0],movies[i][1], movies[i][2])
}
const moviesname=[]
for(i=0;i<movies.length;i++)
{
  moviesname[i]=movies[i].getPG(movies[i].name,movies[i].rating) 
}
console.log(moviesname)
//console.log(movies)
//console.log(movies[0].name)

