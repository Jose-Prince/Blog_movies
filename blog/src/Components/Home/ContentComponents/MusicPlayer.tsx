import PlayMusic from '../../../Hooks/PlayMusic';

interface ContainerProps {
  name: string
}

const MusicPlayer: React.FC<ContainerProps> = ({name}) => {

  return (
      <audio autoPlay loop>
        <source src={PlayMusic(name)} type='audio/mp3' />
      </audio>
  );
};

export default MusicPlayer;
