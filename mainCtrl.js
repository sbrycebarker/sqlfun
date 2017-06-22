

module.exports = {

  index: function(req, res) {
    var dbInstance = req.app.get('db');
    dbInstance.get_users().then(stuff => {
        res.status(200).json(stuff);
    })
    }
}
