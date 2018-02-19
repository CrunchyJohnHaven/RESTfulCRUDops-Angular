var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var Task = mongoose.model('Task');

module.exports = {
    tasks: function(req, res) {
        Task.find( {}, function( err, data ){
            if (!err) {
                res.json( {message:"success", data:data} );
            }
            else 
                res.send( err );
        });
    },
    tasks_one: function(req, res) {
        console.log('*********1');
        Task.find( { _id: req.params.id }, function( err, data ){
            task.save(function(err) {
                if (!err) {
                    res.json( { message: "success", data: data } );
                } else {
                    res.send( err );
                }
            });
        });
    },
    tasks_create: function(req, res) {
        console.log('*********1');
        var task = new Task( { title: req.body.title, description: req.body.description } );
        task.save( function( err ) {
            if (err) {
                res.send( err );
            }
            else {
                res.json( { message: "success" } );
            }
        });
    },
    tasks_update: function(req, res) {
        console.log('*********1');
        Task.update( { _id: req.params.id }, {title: req.body.title, description: req.body.title}, function( err ){
            if( err ) {
                res.send( err );
            } 
            else {  
                res.json( { message: "success" } );
            }
        });
    },
    tasks_delete: function(req, res) {
        console.log('*********1');
        Task.remove( {_id: req.params.id}, function(err) {
            if( err ) {
                res.send( err );
            } else {
                res.json( { message: "success" } );
            }
        });
    }
};
