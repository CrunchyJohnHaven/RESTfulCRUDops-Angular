var tasks = require('../controllers/taskController.js');

module.exports = function(app) {
    app.get('/tasks', function(req, res) {
        console.log('*********1');
        tasks.tasks(req, res);
    });

    app.get('/tasks/:id', function(req, res) {
        console.log("tasks/:id at routes.js");
        tasks.tasks_one(req, res);
    });

    app.post('/tasks', function(req, res) {
        console.log('*********2');
        tasks.tasks_create(req, res);
    });
    app.put('/tasks/:id', function(req, res) {
        console.log('*********3');
        tasks.tasks_update(req, res);
    });
    app.delete('/tasks/:id', function(req, res) {
        console.log('*********4');
        tasks.tasks_delete(req, res);
    });
};
