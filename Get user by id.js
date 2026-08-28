app.get("/api/users/:id", (req, res) => {
      const { id } = req.params;
      
      res.json({
      message: "User retrieved successfully",
      user: {
      id: id,
      name: "Test User",
      email: "test@example.com"
      }
      });
      });
      
    
