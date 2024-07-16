import connectDB from '@/utils/connectDB';
import React from 'react'
import Profile from '@/models/Profile';
import AddPage from '@/template/AddPage';

const Edit = async ({ params }) => {
    const { profileId } = params;
    await connectDB();
    const profile = await Profile.findOne({ _id: profileId });

    if (!profile) {
        return <h3>مشکلی پیش امده است.دوباره امتحان کنید</h3>
    }

    return (
        <AddPage profile={JSON.parse(JSON.stringify(profile))} />
    )
}

export default Edit