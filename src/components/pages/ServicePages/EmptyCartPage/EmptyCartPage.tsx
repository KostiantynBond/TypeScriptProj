import '../ServicePages.scss';

export const EmptyCartPage: React.FC = () => (
  <div className="wrapper__not-found not-found">
    <div className="not-found__container container">
      <div className="not-found__image image">
        <img
          src="/img/error images/cart-is-empty.png"
          alt=""
          className="not-found__img img"
        />
      </div>
      <h4 className="not-found__headline headline--4">
        O-ops! Seems it`s empty!
      </h4>
    </div>
  </div>
);
