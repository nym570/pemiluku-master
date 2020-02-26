exports.getIndex = (req, res) => {
    res.render('index', {
        pageTitle: 'Index Page'
    });
};