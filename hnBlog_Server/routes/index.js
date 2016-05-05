var express=require('express');
var router = express.Router();



/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

/**
 *  登陆
 */
router.post('/login', function (req, res) {
    if (req.body.ume == 'huangnan' && req.body.pwd == '831023') {
        res.send(result(0,'成功'));
    }
});

function result(code,message){
    return JSON.stringify({'code':code,'message':message});
}
module.exports = router;
