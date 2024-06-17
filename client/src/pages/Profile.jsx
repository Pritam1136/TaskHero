import { useParams } from "react-router-dom";

function Profile() {
  const params = useParams();
  return <div>Profile Page {params.id}</div>;
}

export default Profile;
