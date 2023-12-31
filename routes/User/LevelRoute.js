const { getUserLevel } = require('../../services/User/LevelService');

const router = require('express').Router();



router.get("/user/level/:id",getUserLevel)

module.exports= router