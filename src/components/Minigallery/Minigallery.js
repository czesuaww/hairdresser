import style from './Minigallery.module.css';

const MiniGallery = () => {
    const importAllImages = (requireContext) => requireContext.keys().map(requireContext);
    const images = importAllImages(require.context('../../assets/images', false, /\.(png|jpe?g|svg)$/));
    return (
        <div className={style.gallery} id="miniGallery">
            {images.map((imgSrc, index) => (
                <img
                    key={index}
                    className={style.images}
                    src={imgSrc}
                    alt={`${index + 1}`}
                />
            ))}
        </div>
    );
}

export default MiniGallery;