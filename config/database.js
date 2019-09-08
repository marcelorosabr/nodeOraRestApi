module.exports = {
  hrPool: {
    user: process.env.HR_USER,
    password: process.env.HR_PASSWORD,
    connectString: process.env.HR_CONNECTIONSTRING,
    poolMin: 10,
    poolMax: 10,
    poolIncrement: 0
  }
};


/*
echo "set HR_USER=hr"
echo "set HR_PASSWORD=oracle"
echo "set HR_CONNECTIONSTRING=192.168.15.33/orcl"
*/