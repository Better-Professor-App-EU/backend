module.exports = {
  genericError: function(err, req, res) {
    res.status(500).json({
      message: `Failed to ${req.method} ${req.originalUrl} --> ${err.message}`
    });
  }
}