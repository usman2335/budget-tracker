const jwt = require('jsonwebtoken');

module.exports = function (req,res,next){
    console.log("reached middleware")
    const authHeader = req.header('Authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'No token, authorization denied' });
      }
      const token = authHeader.replace('Bearer ', '').trim();
      console.log('Token:', token);

    if(!token){
        return res.status(401).json({ message: 'No token, authorization denied' });
    }
    try {
        const decoded = jwt.verify(token, 'secret_budget');
        req.user = decoded.user;  // Ensure this matches the structure of your JWT payload
        console.log('Decoded user:', req.user);
        next();
      } catch (error) {
        console.error('Token verification error:', error);
        res.status(401).json({ message: 'Token is not valid' });
      }
};

// module.exports = authMiddleware;