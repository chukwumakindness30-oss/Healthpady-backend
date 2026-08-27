const user = {
  id: users.length + 1,
  name,
  email
  };
  
  users.push(user);
  
  res.status(201).json({
  message: 'User created successfully',
  user
  });
  });
