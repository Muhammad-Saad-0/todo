module.exports = {
    HOST: process.env.HOST,
    USER: process.env.EMAIL,
    PASSWORD: process.env.PASSWORD,
    DB: process.env.DB,
    dialect: process.env.DIALECT,
    pool: {
      max: parseInt(process.env.MAX),
      min: parseInt(process.env.MIN),
      acquire: parseInt(process.env.ACQUIRE),
      idle: parseInt(process.env.IDLE)
    }
};