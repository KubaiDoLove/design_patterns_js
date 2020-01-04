const getTvShow = id => {
    const resources = [
        { id: 1, title: "Twin Peaks" },
        { id: 2, title: "Luther" },
        { id: 3, title: "The Simpson's" }
    ];

    return resources.find(item => item.id === id);
};

module.exports = getTvShow;
