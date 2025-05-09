const createAuthor = (firstName = "", lastName = "") => {
    firstName = firstName ? firstName.trim() : "";
    lastName = lastName ? lastName.trim() : "";

    const fullName = `${firstName.toString().trim()} ${lastName.toString().trim()}`;
    return {"firstname" : firstName.toString().trim(),
        "lastname": lastName.toString().trim(),
        "fullname":  fullName.toString().trim()}
};

module.exports = {
    createAuthor
}