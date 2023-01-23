import pkg from "pg";

const { Pool } = pkg;

export const connection = new Pool({
    connectionString: "postgres://postgres:11182040@localhost:5432/toDoList"
})