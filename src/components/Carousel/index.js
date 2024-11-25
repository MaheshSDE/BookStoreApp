
import EmblaCarousel from '../EmblaCarousel'

const OPTIONS = { dragFree: true, loop: true }
//const SLIDE_COUNT = 5
const slide = ["https://bookshelf-snowy.vercel.app/assets/images/hero.png","https://bookshelf-snowy.vercel.app/assets/images/hero2.png","https://bookshelf-snowy.vercel.app/assets/images/hero3.png","https://bookshelf-snowy.vercel.app/assets/images/hero4.png"]

function Carousel() {
  return (
    <div className='app-container'>
    <EmblaCarousel slides={slide} options={OPTIONS} />
  </div>
  );
}

export default Carousel;
