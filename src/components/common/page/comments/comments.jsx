import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import api from "../../../../api";
import _ from "lodash";

const Comments = ({ comments, userId }) => {
    const [users, setUsers] = useState();
    const [commentsList, setCommentsList] = useState();
    useEffect(() => {
        setCommentsList(_.orderBy(comments, ["created_at"], ["desc"]));
        api.users.fetchAll().then((data) => setUsers(data));
    }, []);
    const findUser = (commentedUserId) => {
        const userN = Object.keys(users).find(
            (user) => users[user]._id === commentedUserId
        );
        return users[userN].name;
    };
    const handleDeleteComment = (data) => {
        api.comments.remove(data);
        setTimeout(() => {
            window.location.reload();
        }, "300");
    };

    const dateCounter = (dateOfPost) => {
        const month = (monthN) => {
            switch (monthN) {
                case 0:
                    return "January";
                case 1:
                    return "February";
                case 2:
                    return "March";
                case 3:
                    return "April";
                case 4:
                    return "May";
                case 5:
                    return "June";
                case 6:
                    return "July";
                case 7:
                    return "August";
                case 8:
                    return "September";
                case 9:
                    return "October";
                case 10:
                    return "November";
                case 11:
                    return "December";
            }
        };
        const timestampNow = Date.parse(Date());
        const diffOfTime = timestampNow - dateOfPost;
        if (diffOfTime < 60000) {
            return "one minute ago";
        } else if (diffOfTime < 300000) {
            return "5 minutes ago";
        } else if (diffOfTime < 600000) {
            return "10 minutes ago";
        } else if (diffOfTime < 1800000) {
            return "30 minutes ago";
        } else if (diffOfTime < 86400000) {
            let hours = new Date(+dateOfPost).getHours();
            if (hours < 10) {
                hours = "0" + hours;
            }
            let minutes = new Date(+dateOfPost).getMinutes();
            if (minutes < 10) {
                minutes = "0" + minutes;
            }
            return (
                <>
                    {hours} : {minutes}
                </>
            );
        } else if (diffOfTime < 946080000) {
            return (
                <>
                    {new Date(+dateOfPost).getDate()}{" "}
                    {month(new Date(+dateOfPost).getMonth())}
                </>
            );
        } else {
            return (
                <>
                    {new Date(+dateOfPost).getDate()}{" "}
                    {month(new Date(+dateOfPost).getMonth())}{" "}
                    {new Date(+dateOfPost).getFullYear()}
                </>
            );
        }
    };

    return (
        <>
            <div className="card mb-3">
                <div className="card-body">
                    <h2 className="">Comments</h2>
                    <hr />
                    {users &&
                        commentsList &&
                        Object.keys(commentsList).map((item) => (
                            <div
                                key={commentsList[item]._id}
                                className="bg-light card-body mb-3"
                            >
                                <div className="row">
                                    <div className="col">
                                        <div className="d-flex flex-start ">
                                            <img
                                                src={`https://avatars.dicebear.com/api/avataaars/${(
                                                    Math.random() + 1
                                                )
                                                    .toString(36)
                                                    .substring(7)}.svg`}
                                                className="rounded-circle shadow-1-strong me-3"
                                                alt="avatar"
                                                width="65"
                                                height="65"
                                            />
                                            <div className="flex-grow-1 flex-shrink-1 ">
                                                <div className="mb-4">
                                                    <div className="d-flex justify-content-between">
                                                        <p className="mb-1 ">
                                                            {findUser(
                                                                commentsList[
                                                                    item
                                                                ].userId
                                                            )}{" "}
                                                            <span className="small flex-grow-1 ">
                                                                -{" "}
                                                                {dateCounter(
                                                                    commentsList[
                                                                        item
                                                                    ].created_at
                                                                )}
                                                            </span>
                                                        </p>

                                                        <button
                                                            onClick={() =>
                                                                handleDeleteComment(
                                                                    commentsList[
                                                                        item
                                                                    ]._id
                                                                )
                                                            }
                                                            className="btn btn-sm text-primary d-flex align-items-center "
                                                        >
                                                            <i className="bi bi-x-lg"></i>
                                                        </button>
                                                    </div>
                                                    <p className="small mb-0 d-flex justify-content-between align-items-center">
                                                        {
                                                            commentsList[item]
                                                                .content
                                                        }
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </>
    );
};

Comments.propTypes = {
    comments: PropTypes.array,
    userId: PropTypes.string
};

export default Comments;
