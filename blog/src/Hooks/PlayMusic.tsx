import puss from '../assets/Songs/Fearless Hero (64).mp3'
import inter from '../assets/Songs/Mountains (128).mp3'
import parasit from '../assets/Songs/시작 Opening (128).mp3'
import poor from '../assets/Songs/Jerskin Fendrix - Victoria Poor Things (Original Motion Picture Soundtrack) (128).mp3'
import giant from '../assets/Songs/The Last Giant Piece (128).mp3'

function PlayMusic(name: string) {
    switch (name) {
        case 'El Gato con Botas 2: El Último Deseo': {
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
        case 'El gigante de Hierro': {
            return giant            
        }
        
    }
}

export default PlayMusic