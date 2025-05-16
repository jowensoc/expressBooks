const createAuthor = (firstName = "", lastName = "") => {
    firstName = firstName ? firstName.trim() : "";
    lastName = lastName ? lastName.trim() : "";

    const fullName = `${firstName.toString().trim()} ${lastName.toString().trim()}`;
    return {"firstname" : firstName.toString().trim(),
        "lastname": lastName.toString().trim(),
        "fullname":  fullName.toString().trim()}
};

const listOfAuthorsToString = (listOfAuthors) => {
    let results = "";
    let lastIdx = listOfAuthors.length - 1;

    for(let authIdx=0; authIdx < listOfAuthors.length; authIdx++) {
        results += listOfAuthors[authIdx].fullname;

        if (authIdx < lastIdx) {
            results += ", ";
        }
    }

    return results;
}


module.exports = {
    createAuthor,
    listOfAuthorsToString
}