import React, { useState, useEffect } from "react";
import api from "../../../../api";
import PropTypes from "prop-types";
import Comments from "../../../ui/comments";
import UserCard from "../../../ui/userCard";
import QualitiesCard from "../../../ui/qualitiesCard";
import MeetingsCard from "../../../ui/meetingsCard";

const UserPage = ({ userId }) => {
    const [user, setUser] = useState();

    useEffect(() => {
        api.users.getById(userId).then((data) => setUser(data));
    }, []);

    return user ? (
        <>
            <div className="m-5">
                <div className="container">
                    <div className="row gutter-sm">
                        <div className="col-md-4 mb-3 ">
                            <UserCard user={user} />
                            <QualitiesCard data={user.qualities} />
                            <MeetingsCard value={user.completedMeetings} />
                        </div>
                        <div className="col-md-8">
                            <Comments/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    ) : (
        <h3>Loading...</h3>
    );
};
UserPage.propTypes = {
    userId: PropTypes.string.isRequired
};
export default UserPage;
