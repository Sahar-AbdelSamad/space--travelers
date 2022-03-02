import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { toggleMissionReservation } from '../redux/missions/missionsSlice';

const MissionList = (props) => {
  const dispatch = useDispatch();
  const {
    missionName, description, id, reserved,
  } = props;

  return (
    <tr key={id}>
      <td className="fs-5 fw-bold">{missionName}</td>
      <td>{description}</td>
      {(reserved) ? <td><span className="badge squared-pill bg-primary text-light">Active Member</span></td> : <td><span className="badge squared-pill bg-secondary text-light">NOT A MEMBER</span></td>}
      <td>
        { (reserved) ? <button className="btn leave-mission" type="button" onClick={() => dispatch(toggleMissionReservation(id))}>Leave Mission</button>
          : <button className="btn btn-outline-secondary" type="button" onClick={() => dispatch(toggleMissionReservation(id))}>Join Mission</button>}
      </td>
    </tr>
  );
};

MissionList.propTypes = {
  missionName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default MissionList;
