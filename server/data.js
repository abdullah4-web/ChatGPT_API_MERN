import bcrypt from 'bcryptjs';
const data = {
    users: [
        {
          name: 'Abdullah',
          email: 'abdullah.shah7839@gmail.com',
          password: bcrypt.hashSync('123456'),
          isAdmin: true,
        },
        {
          name: 'Sami',
          email: 'sami@gmail.com',
          password: bcrypt.hashSync('123456'),
          isAdmin: false,
        },
      ], 
    
};
export default data;