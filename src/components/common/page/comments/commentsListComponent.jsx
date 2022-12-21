import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import api from "../../../../api";
import { validator } from "../../../../utils/validator";

const CommentsListComponent = ({ pageId }) => {
    const [newComment, setNewComment] = useState({
        pageId,
        content: "",
        userId: ""
    });
    const [usersData, setUsersData] = useState();
    const [errors, setErrors] = useState({ content: "", userId: "" });
    const validatorConfig = {
        content: {
            isRequired: {
                message: "Type in some text"
            }
        },
        userId: {
            isRequired: {
                message: "Choose user"
            }
        }
    };
    const validate = () => {
        const errors = validator(newComment, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };
    const isValid = Object.keys(errors).length === 0;

    useEffect(() => {
        validate();
    }, [newComment]);
    useEffect(() => {
        api.users.fetchAll().then((data) => setUsersData(data));
    }, []);
    const pushComment = ({ id, value }) => {
        setNewComment({ ...newComment, [id]: value });
    };
    const publishComment = () => {
        setNewComment({
            ...newComment,
            created_at: +new Date(),
            _id: +new Date()
        });
        api.comments.add(newComment);
        setTimeout(() => {
            window.location.reload();
        }, "300");
    };
    const getInputClasses = () => {
        return "form-control" + (errors.content ? " is-invalid" : "");
    };
    const getInputClassesUserId = () => {
        return "form-control" + (errors.userId ? " is-invalid" : "");
    };
    return (
        <>
            <div className="card mb-3">
                <div className="card-body ">
                    <h2>New Comment</h2>
                    <div className="input-group mb-3">
                        <select
                            className={getInputClassesUserId()}
                            id="userId"
                            onChange={(e) => pushComment(e.target)}
                        >
                            <option defaultValue value="">
                                Choose user
                            </option>
                            {usersData &&
                                Object.keys(usersData).map((user) => {
                                    return (
                                        <option
                                            value={usersData[user]._id}
                                            key={usersData[user]._id}
                                        >
                                            {usersData[user].name}
                                        </option>
                                    );
                                })}
                        </select>{" "}
                        {errors.userId && (
                            <div className="invalid-feedback">
                                {errors.userId}
                            </div>
                        )}
                    </div>

                    <div className="mb-3">
                        <label
                            htmlFor="exampleFormControlTextarea1"
                            className="form-label"
                        >
                            Please input your comment
                        </label>
                        <textarea
                            className={getInputClasses()}
                            id="content"
                            rows="3"
                            onChange={(e) => pushComment(e.target)}
                        ></textarea>
                        {errors.content && (
                            <div className="invalid-feedback">
                                {errors.content}
                            </div>
                        )}
                    </div>
                    <div className="justify-content-end d-flex">
                        <button
                            disabled={!isValid}
                            className="btn btn-primary"
                            onClick={publishComment}
                        >
                            Publish
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};
CommentsListComponent.propTypes = {
    togglePublish: PropTypes.func,
    pageId: PropTypes.string
};
export default CommentsListComponent;
