import { useSelector, useDispatch } from 'react-redux';
import { toggleReservation } from '../redux/rockets/rocketsSlice';
import './Rockets.css';

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets);

  return (
    <section className="rockets">
      {rockets.map((item) => (
        <div className="items" key={item.id}>
          <img className="img" src={item.flickr_images} alt="rocket" />
          <div className="rocket-info">
            <h2>{item.rocket_name}</h2>
            <p>
              {item.reserved
                && <span className="span">Reserved</span>}
              {rockets[0].description}
            </p>
            { (item.reserved) ? <button className="button button-cancel-reservation" type="button" onClick={() => dispatch(toggleReservation(item.id))}>Cancel Reservation</button>
              : <button className="button button-reserve" type="button" onClick={() => dispatch(toggleReservation(item.id))}>Reserve Rocket</button>}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Rockets;
