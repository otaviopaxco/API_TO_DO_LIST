const taskService = require('../services/taskService');

// Função auxiliar para ler body
const getRequestBody = (req) => {
    return new Promise((resolve, reject) => {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            try {
                resolve(JSON.parse(body));
            } catch (e) {
                reject(e);
            }
        });
    });
};

// Criar tarefa
const createTask = async (req, res) => {
    const body = await getRequestBody(req);
    const task = taskService.addTask(body.title);
    res.statusCode = 201;
    res.end(JSON.stringify(task));
};

// Listar tarefas
const listTasks = (req, res) => {
    const tasks = taskService.getTasks();
    res.statusCode = 200;
    res.end(JSON.stringify(tasks));
};


const updateTask = async (req, res, id) => {
    try {
        const body = await getRequestBody(req);
        
        const updatedTask = taskService.updateTask(id, body.title, body.completed);

        if (!updatedTask) {
            res.statusCode = 404;
            return res.end(JSON.stringify({ message: 'Tarefa não encontrada' }));
        }

        res.statusCode = 200;
        res.end(JSON.stringify(updatedTask));
    } catch (error) {
        res.statusCode = 400;
        res.end(JSON.stringify({ message: 'Erro ao processar dados' }));
    }
};

const deleteTask = (req, res, id) => {
    const success = taskService.deleteTask(id);

    if (!success) {
        res.statusCode = 404;
        return res.end(JSON.stringify({ message: 'Tarefa não encontrada' }));
    }

    res.statusCode = 204;
    res.end();
};

module.exports = {
    createTask,
    listTasks,
    updateTask,
    deleteTask
};