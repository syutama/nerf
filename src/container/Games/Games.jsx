import React from 'react';
import { images } from '../../constants';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import './Games.css';

const Games = () => {
    const scrollRef = React.useRef(null);
  
    const scroll = (direction) => {
      const { current } = scrollRef;
  
      if (direction === 'left') {
        current.scrollLeft -= 300;
      } else {
        current.scrollLeft += 300;
      }
    };
  
    return (
        <div className="app__game-gallery flex__center">
            <h1 className="headtext__cormorant" style={{ fontSize: 40 }}>Аниматоры</h1>
            <div className="app__gallery-games">
                <div className="app__gallery-games_container" ref={scrollRef}>
                {[images.g30, images.g31, images.g32, images.g33].map((image, index) => (
                    <div className="app__gallery-games_img flex__center" key={`gallery_image-${index + 1}`}>
                    <img src={image} alt="gallery_games" />
                    </div>
                ))}
                </div>
                <div className="app__gallery-games_arrows">
                <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')} />
                <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} />
                </div>
            </div>

            <h1 className="headtext__cormorant" style={{ fontSize: 40 }}>Пакеты под ключ на день рождения</h1>
            <div className="app__gallery-games">
                <div className="app__gallery-games_container" ref={scrollRef}>
                {[images.g11, images.g2, images.g3, images.g4, images.g5, images.g6, images.g7].map((image, index) => (
                    <div className="app__gallery-games_img flex__center" key={`gallery_image-${index + 1}`}>
                    <img src={image} alt="gallery_games" />
                    </div>
                ))}
                </div>
                <div className="app__gallery-games_arrows">
                <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')} />
                <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} />
                </div>
            </div>

            <h1 className="headtext__cormorant" style={{ fontSize: 40 }}>Пакеты школьные</h1>
            <div className="app__gallery-games">
                <div className="app__gallery-games_container" ref={scrollRef}>
                {[images.g8, images.g9].map((image, index) => (
                    <div className="app__gallery-games_img flex__center" key={`gallery_image-${index + 1}`}>
                    <img src={image} alt="gallery_games" />
                    </div>
                ))}
                </div>
            </div>

            <h1 className="headtext__cormorant" style={{ fontSize: 40 }}>Мероприятия</h1>
            <div className="app__gallery-games">
                <div className="app__gallery-games_container" ref={scrollRef}>
                {[images.g12, images.g13, images.g14, images.g15, images.g16, images.g17, images.g18, images.g19, images.g20, images.g21, images.g22, images.g23, images.g24, images.g25, images.g26, images.g27, images.g28, images.g29].map((image, index) => (
                    <div className="app__gallery-games_img flex__center" key={`gallery_image-${index + 1}`}>
                    <img src={image} alt="gallery_games" />
                    </div>
                ))}
                </div>
                <div className="app__gallery-games_arrows">
                <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')} />
                <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} />
                </div>
            </div>

            <h1 className="headtext__cormorant" style={{ fontSize: 40 }}>Тариф Индивидуальный</h1>
            <div className="app__gallery-games">
                <div className="app__gallery-games_container" ref={scrollRef}>
                {[images.g1].map((image, index) => (
                    <div className="app__gallery-games_img flex__center" key={`gallery_image-${index + 1}`}>
                    <img src={image} alt="gallery_games" />
                    </div>
                ))}
                </div>
            </div>

        </div>
    );
};

export default Games;