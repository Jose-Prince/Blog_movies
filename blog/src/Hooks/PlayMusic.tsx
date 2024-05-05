import puss from '../assets/Songs/Fearless Hero (64).mp3'
import inter from '../assets/Songs/Mountains (128).mp3'
import parasit from '../assets/Songs/시작 Opening (128).mp3'
import poor from '../assets/Songs/Jerskin Fendrix - Victoria Poor Things (Original Motion Picture Soundtrack) (128).mp3'
import giant from '../assets/Songs/The Last Giant Piece (128).mp3'
import shrek from '../assets/Songs/Shrek 2 Soundtrack 14. Jennifer Saunders - Holding Out For a Hero (128).mp3'
import oldboy from '../assets/Songs/Oldboy OST - 24 - The Last Waltz (128).mp3'
import backf1 from '../assets/Songs/Back to the Future (Original Motion Picture Soundtrack) - Back to the Future (End Credits) (128).mp3'
import memories from '../assets/Songs/Memories of Murder OST - Defeat (128).mp3'
import pinocho from '../assets/Songs/The Circus (128).mp3'
import train from '../assets/Songs/Jang Young-gyu - Goodbye World ( from Train To Busan ) ( FULL ) (128).mp3'
import red from '../assets/Songs/Christophe Beck - Pensacola (128).mp3'
import ocean from '../assets/Songs/Oceans 8 Official Soundtrack NYC Larceny - Daniel Pemberton WaterTower (128).mp3'
import oppen from '../assets/Songs/Destroyer Of Worlds Oppenheimer OST (128).mp3'
import god2 from '../assets/Songs/Nino Rota - Main Title - The Immigrant (128).mp3'
import spider from '../assets/Songs/Only One Spider-Man (128).mp3'
import forgot from '../assets/Songs/Korean movie - Forgotten - Ending instrumental sad (128).mp3'
import blade from '../assets/Songs/2049 (128).mp3'
import empire from '../assets/Songs/Star Wars Episode V The Empire Strikes Back (1980) Soundtrack 15 Yoda and the Force (128).mp3'
import seven from '../assets/Songs/Gluttony (128).mp3'
import httyd from '../assets/Songs/Test Drive (From How To Train Your Dragon Music From The Motion Picture) (128).mp3'
import saw from '../assets/Songs/Saw SoundTrack (192).mp3'
import planet from "../assets/Songs/Treasure Planet OST - 01 - I'm Still Here (Jim's Theme) (128).mp3"
import dune from '../assets/Songs/Dream of Arrakis Dune OST (128).mp3'
import pianist from '../assets/Songs/Nocturne, B. 49 Lento con gran espressione in C-Sharp Minor (128).mp3'
import showman from '../assets/Songs/The Greatest Showman Cast - From Now On (Official Audio) (128).mp3'
import notredame from '../assets/Songs/Hellfire - The Hunchback of Notre Dame (128).mp3'
import psycho from '../assets/Songs/American Psycho OST - The Confession (128).mp3'
import taxi from '../assets/Songs/Main Title (from Taxi Driver ) (128).mp3'
import wolf from '../assets/Songs/Joe Cuba - Bang! Bang! (128).mp3'
import list from "../assets/Songs/Schindler's List Soundtrack-01 Theme from Schindler's List (128).mp3"

function PlayMusic(name: string) {
    switch (name) {
        case 'Puss in Boots 2: The Last Wish': {
            return puss
        }
        case 'Interstellar': {
            return inter
        }
        case 'Parasite': {
            return parasit
        }
        case 'Poor Things': {
            return poor
        }
        case 'The Iron Giant': {
            return giant            
        }
        case 'Shrek 2': {
            return shrek
        }
        case 'Oldboy' : {
            return oldboy
        }
        case 'Back to the Future': {
            return backf1
        }
        case 'Memories of Murder': {
            return memories
        }
        case 'Pinocchio': {
            return pinocho
        }
        case 'Train to Busan': {
            return train
        }
        case 'Red': {
            return red
        }
        case 'Ocean 8': {
            return ocean
        }
        case 'Oppenheimer': {
            return oppen
        }
        case 'The Godfather Part II': {
            return god2
        }
        case 'Spider-Man: Into the Spider-Verse':{
            return spider
        }
        case 'Forgotten': {
            return forgot
        }
        case 'Blade Runner 2049': {
            return blade
        }
        case 'Star Wars: Episode V - The Empire Strikes Back': {
            return empire
        }
        case 'Se7en': {
            return seven
        }
        case 'How to Train Your Dragon': {
            return httyd
        }
        case 'Saw': {
            return saw
        }
        case 'Treasure Planet': {
            return planet
        }
        case 'Dune': {
            return dune
        }
        case 'The Pianist': {
            return pianist
        }
        case 'The Greatest Showman': {
            return showman
        }
        case 'The Hunchback of Notre Dame': {
            return notredame
        }
        case 'American Psycho': {
            return psycho
        }
        case 'Taxi Driver': {
            return taxi
        }
        case 'The Wolf of Wall Street': {
            return wolf
        }
        case "Schindler's List": {
            return list
        }
    }
}

export default PlayMusic