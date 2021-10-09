const users = [
    {name: 'Manolo el del bombo',
    favoritesSounds: {
            waves: {format: 'mp3', volume: 50},
            rain: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'Mortadelo',
    favoritesSounds: {
            waves: {format: 'mp3', volume: 30},
            shower: {format: 'ogg', volume: 55},
            train: {format: 'mp3', volume: 60},
        }
    },
    {name: 'Super Lopez',
    favoritesSounds: {
            shower: {format: 'mp3', volume: 50},
            train: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'El culebra',
    favoritesSounds: {
            waves: {format: 'mp3', volume: 67},
            wind: {format: 'ogg', volume: 35},
            firecamp: {format: 'mp3', volume: 60},
        }
    },
]

let objects;
let favourites;
let AllVolumes =[];

for (const value of users){
    objects = value.favoritesSounds
    for (const property in objects){
        favourites = objects[property]
        AllVolumes.push(favourites.volume)
    }
}

let sum = 0;
for (let i = 0; i < AllVolumes.length; i++) {
   sum += AllVolumes[i];
}

let result = sum / AllVolumes.length
console.log(result);
    