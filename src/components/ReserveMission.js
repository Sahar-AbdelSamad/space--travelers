import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { toggleMissionReservation } from '../redux/missions/missionsSlice';

const ReservedMissions = (props) => {
  const dispatch = useDispatch();
  const { missionName, missionId, wikipedia } = props;
  return (
    <tr className="res-rocket">
      <td className="td">
        {missionName}
      </td>
      <td className="td">
        <button type="button" className="button button-reserve" onClick={() => dispatch(toggleMissionReservation(missionId))}>Leave Mission</button>
      </td>
      <td className="td">
        <button type="button" className="button button-reserve" onClick={() => window.open(wikipedia)}>Read More</button>
      </td>
    </tr>
  );
};

ReservedMissions.propTypes = {
  missionName: PropTypes.string.isRequired,
  missionId: PropTypes.string.isRequired,
  wikipedia: PropTypes.string.isRequired,
};

export default ReservedMissions;
