
import { useParams } from 'react-router-dom';

const data ={
   haseo: {
    name:'asdd',
    description:'zxcv',
   },
   gildong: {
    name:'gi',
    description: '주인공',
   },
};



const Profile = () => {
    const params = useParams();
    const profile = data[params.usename]
    return(
        <div>
            <h1>ppprofile</h1>
            {profile ? (
                    <div>
                        <h2>{profile.name}</h2>
                        <p>{profile.description}</p>
                    </div>
                ) : (
                    <p>존재하지 않는 프로필입니다</p>
                )}
        </div>
    )
}

export default Profile;
