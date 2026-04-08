const { create } = require("domain");

const createTask = (id, title) => {
    return {
        id,
        title,
        completed: false
    };
};

module.exports = { createTask };