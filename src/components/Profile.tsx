import { Paper, Stack, Typography } from "@mui/material";
import { ProfileData } from "../models/Profile";

interface Props {
    profile: ProfileData;
}

const Profile = ({ profile }: Props) => {
return (
    <Paper>
        <Stack direction={'row'} alignItems={'center'}>
            <Stack>
                <img src={profile.profilePicture} alt='profile' width={64} height={64}/>
            </Stack>
            <Stack>
                <Typography variant='subtitle1'>{profile.firstName} {profile.lastName}</Typography>
                <Typography variant='subtitle2'>{profile.jobTitle}</Typography>
            </Stack>
        </Stack>
    </Paper>
);
};

export default Profile;