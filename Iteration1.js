// Iteración 1
const movies = [
    {title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura']},
    {title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción']},
    {title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller']},
    {title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación']},
]

let genres = [];

for (const value of movies){
    for (let i = 0; i < value.categories.length; i++) {
        if(!genres.includes(value.categories[i])){
            genres.push(value.categories[i]);
        }
    }
}
console.log(genres)

