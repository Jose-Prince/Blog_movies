interface ContainerProps {  }

const MusicPlayer: React.FC<ContainerProps> = () => {
    return (
        <div>
          <h2>Reproductor de Audio</h2>
          <audio controls>
            <source src="https://soundcloud.com/jesse-nelson-909413873/fearless-hero-giant-fight-with?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" type="audio/mpeg" />
            Tu navegador no admite la reproducción de audio.
          </audio>
        </div>
    );
};


export default MusicPlayer