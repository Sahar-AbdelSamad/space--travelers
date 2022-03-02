import { useSelector, useDispatch } from 'react-redux';
import MissionList from './MissionList';
import { toggleMissionReservation } from '../redux/missions/missionsSlice';

const MissionsTable = () => {
  const missions = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="mobile-nav rockets">
        {
            missions.map((mission) => (
              <section className="items" key={mission.mission_id}>
                <div>
                  <h2 className="fs-5 fw-bold" style={{ float: 'left' }}>{mission.mission_name}</h2>
                  {' '}
                  {(mission.reserved) ? <span className="badge squared-pill bg-primary text-light" style={{ float: 'right' }}>Active Member</span> : <span className="badge squared-pill bg-secondary text-light" style={{ float: 'right' }}>NOT A MEMBER</span>}
                </div>
                <p className="small">{mission.description}</p>
                <div className="mx-auto">

                  { (mission.reserved) ? <button className="btn leave-mission" type="button" onClick={() => dispatch(toggleMissionReservation(mission.mission_id))}>Leave Mission</button>
                    : <button className="btn btn-outline-secondary" type="button" onClick={() => dispatch(toggleMissionReservation(mission.mission_id))}>Join Mission</button>}
                </div>
              </section>
            ))
}
      </div>

      <div className="desktop-navig-nav">
        <table className="table-bordered table-striped table-hover">
          <thead>
            <tr className="fs-5">
              <th>Mission</th>
              <th>Description</th>
              <th>Status</th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            {
            missions.map((mission) => (
              <MissionList
                key={mission.mission_id}
                id={mission.mission_id}
                missionName={mission.mission_name}
                description={mission.description}
                reserved={mission.reserved}
              />
            ))
          }
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default MissionsTable;
