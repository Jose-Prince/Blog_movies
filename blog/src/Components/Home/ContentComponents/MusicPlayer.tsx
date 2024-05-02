import audio from '../../../assets/Songs/Fearless Hero (64).mp3'

interface ContainerProps {}

const MusicPlayer: React.FC<ContainerProps> = () => {

  return (
      <audio autoPlay loop>
        <source src={audio} type='audio/mp3' />
      </audio>
  );
};

export default MusicPlayer;
