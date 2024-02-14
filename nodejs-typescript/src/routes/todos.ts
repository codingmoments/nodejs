import { Router } from 'express';

import { Todo } from '../models/todo';

const router = Router();

type RequestParams = { todoId: string };

let todos: Todo[] = [];

router.get('/', (req, res, next) => {
  res.status(200).json({ todos: todos });
})

router.post('/todo', (req, res, next) => {
  const body = req.body as { text: string };

  const newTodo: Todo = { id: new Date().toISOString(), text: body.text };
  todos.push(newTodo);
  res.status(201).json({ message: 'Added todo', todo: newTodo, todos: todos });
})

router.put('/todo/:todoId', (req, res, next) => {
  const body = req.body as { text: string };
  const params = req.params as RequestParams;
  const tid = params.todoId; 
  const todoIndex = todos.findIndex(todo => todo.id === tid);
  if (todoIndex >= 0) {
    todos[todoIndex] = { id: tid, text: body.text };
    return res.status(200).json({ message: 'Updated todo', todos: todos });
  }
  res.status(404).json({ message: 'Could not find todo for this id.' });
})

router.delete('/todo/:todoId', (req, res, next) => {
  const tid = req.params.todoId;
  todos = todos.filter(todo => todo.id !== tid);
  res.status(200).json({ message: 'Deleted todo', todos: todos });
})

export default router;