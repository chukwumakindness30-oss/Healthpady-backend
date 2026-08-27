app.get("/api/users", (req, res) => {
    res.json({
    message: "Users retrieved successfully",
    users: []
    });
    });
