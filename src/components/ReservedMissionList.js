import { useSelector } from 'react-redux';
import ReservedMissions from './ReserveMission';

const ReservedMissionsList = () => {
  const missions = useSelector((state) => state.missions);
  const reserved = missions.filter((missions) => missions.reserved);

  return (
    <>
      {!(reserved.length > 0) && <p>no missions joined</p>}
      <table className="profile-table">
        <tbody>
          {
          reserved.map((mission) => (
            <ReservedMissions
              key={mission.mission_id}
              missionId={mission.mission_id}
              missionName={mission.mission_name}
              wikipedia={mission.wikipedia}
            />
          ))
        }
        </tbody>
      </table>
    </>
  );
};

export default ReservedMissionsList;
