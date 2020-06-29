const Author = require('../models/author');

exports.author_list = function (req, res) {
  res.send('NOT IMPLEMENTED:Author List');
};

exports.author_detail = function (req, res) {
  res.send('NOT IMPLEMENTED:Author detail: ' + req.params.id);
};

exports.author_create_get = function (req, res) {
  res.send('NOT IMPLEMENTED:Author create GET');
};

exports.author_create_post = function (req, res) {
  res.send('NOT IMPLEMENTED:Author create POST');
};

exports.author_delete_get = function (req, res) {
  res.send('NOT IMPLEMENTED:Author delete get');
};

exports.author_delete_post = function (req, res) {
  res.send('NOT IMPLEMENTED:Author delet post');
};

exports.author_update_get = function (req, res) {
  res.send('NOT IMPLEMENTED:Author update get');
};

exports.author_update_post = function (req, res) {
  res.send('NOT IMPLEMENTED:Author update post');
};
