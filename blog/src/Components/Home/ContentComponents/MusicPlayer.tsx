import PlayMusic from '../../../Hooks/PlayMusic';
import audio from '../../../assets/Songs/Fearless Hero (64).mp3'

interface ContainerProps {
  index: number
}

const MusicPlayer: React.FC<ContainerProps> = ({index}) => {

  return (
      <audio autoPlay loop>
        <source src={PlayMusic(index)} type='audio/mp3' />
      </audio>
  );
};

export default MusicPlayer;
