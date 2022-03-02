// import { useSelector, useDispatch } from 'react-redux';
// import { cancelReservation } from '../redux/rockets/rockets';
// import './MyProfile.css';
// import ReservedMissionsList from './ReservedMissionList';

// const Profile = () => {
//   const rockets = useSelector((state) => state.rocketsReducer.filter((item) => item.reserved));
//   const dispatch = useDispatch();
//   return (
//     <div className="profile">
//       <section className="section-profile">
//         <h2>My Missions</h2>
//         <ReservedMissionsList />
//       </section>
//       <section className="section-profile">
//         <h2>My Rockets</h2>
//         {!(rockets.length > 0) && <p>no rockets reserved</p>}
//         <table className="profile-table">
//           {rockets.map((rocket) => (
//             <tbody key={rocket.id}>
//               <tr className="res-rocket">
//                 <td className="td">
//                   {rocket.rocket_name}
//                 </td>
//                 <td className="td">
//                   <button type="button" className="button button-reserve" onClick={() => dispatch(cancelReservation(rocket.id))}>Cancel Reservation</button>
//                 </td>
//                 <td className="td">
//                   <button type="button" className="button button-reserve" onClick={() => window.open(rocket.wikipedia)}>Read More</button>
//                 </td>
//               </tr>
//             </tbody>
//           ))}
//         </table>
//       </section>
//     </div>
//   );
// };

// export default Profile;
