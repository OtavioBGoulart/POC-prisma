# POC-TS-ToDoList

# How to run

1 - Clone this repository


2- Install all depedencies with 

```
npm i
```

3-Create a PostgreSQL database with whatever name you want

4-Configure your database_url on database file or create a 
environment variable to protect your data

5-The follow scripts will help you to run, build or start the project

```
npm run dev, npm run start, npm run build
```

# Documentation

## Post / tasks

```
body :
{
  "task": "jogar bola",
  "urgency": "medium",
  "time": 5
}
```
## GET / tasks

```
return :
{
  "predictedTime": [
    {
      "urgency": "medium",
      "sum": "13"
    },
    {
      "urgency": "high",
      "sum": "3"
    }
  ],
  "tasks": [
    {
      "id": 4,
      "task_description": "jogar bola",
      "urgency": "medium",
      "predicted_time": 4
    },
    {
      "id": 2,
      "task_description": "academia",
      "urgency": "medium",
      "predicted_time": 4
    },
    {
      "id": 5,
      "task_description": "jogar bola",
      "urgency": "medium",
      "predicted_time": 5
    },
    {
      "id": 1,
      "task_description": "estudar progamacao",
      "urgency": "high",
      "predicted_time": 3
    }
  ]
}
```
## DELETE / tasks
```
STATUS 200 (OK) OR STATUS(404) (NOT_FOUND)
```

## PUT / tasks
```
STATUS 200 (OK) OR STATUS(404) (NOT_FOUND)
```
