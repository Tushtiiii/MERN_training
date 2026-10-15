const { User } = require("../models/dbmodels");
const APIresponse = require("./apiResponse");
const bcrypt = require("bcrypt");
const {generatetoken} = require("../config/jswebtoken");

const router = require("express").Router();

router.post("/login", async (req, res) => {
    const { mobile, password } = req.body;
    const user = await User.findOne({ mobile });

    if (user && (await bcrypt.compare(password, user.password))) {
      if(user.status == 'active'){
      const token = generatetoken(mobile, user.role);
      return res.json(new APIresponse(true, "user found.......", token, null));
      }else{
        res.json(new APIResponse(false,"invalid credential.....",))
      }
    }
    return res.json(new APIresponse(false, "not found.......", null, null));
});

module.exports = router;