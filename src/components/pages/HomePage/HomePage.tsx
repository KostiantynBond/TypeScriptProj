import './HomePage.scss';
import { BannerSlider } from './BannerSlider/BannerSlider';
import {
  useState, useEffect, useContext 
} from 'react';
import * as utils from '../../../utils/apiHelper';
import { Slide } from '../../../types/Slides';
import { Product } from '../../../types/Product';
import { NotificationContext } from '../../../context/NotificationContext';

export const HomePage: React.FC = () => {
  const [slides, setSlides] = useState<Slide[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const { showNotification } = useContext(NotificationContext);

  useEffect(() => {
    utils
      .getHomeSlides()
      .then(setSlides)
      .catch((error) => showNotification(error.message, 'error'));

    utils
      .getProducts()
      .then(setProducts)
      .catch((error) => showNotification(error.message, 'error'));
  }, [showNotification]);

  console.log(products);

  return (
    <div className="home-page">
      <section className="hero-section section">
        <div className="hero-section__headline-block headline-block">
          <h1 className="headline-block__headline headline--1">
            Welcome to Nice Gadgets store!
          </h1>
        </div>
        <BannerSlider
          slides={slides}
          slidesPerScreen={1}
        />
      </section>

    </div>
  );
};
