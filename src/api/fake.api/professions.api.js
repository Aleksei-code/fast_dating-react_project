export const professions = {
    doctor: { _id: "67rdca3eeb7f6fgeed471818", name: "Doctor" },
    waiter: { _id: "67rdca3eeb7f6fgeed471820", name: "Waiter" },
    physics: { _id: "67rdca3eeb7f6fgeed471814", name: "Physicist" },
    engineer: { _id: "67rdca3eeb7f6fgeed471822", name: "Engineer" },
    actor: { _id: "67rdca3eeb7f6fgeed471824", name: "Actor" },
    cook: { _id: "67rdca3eeb7f6fgeed471829", name: "Cook" }
};

const fetchAll = () =>
    new Promise((resolve) =>
        window.setTimeout(function () {
            resolve(professions);
        }, 2000)
    );

export default { fetchAll };
