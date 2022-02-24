import {
  Button,
  IconButton,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import DeleteIcon from "@mui/icons-material/Delete";

const getToDo = () => {
  const todos = localStorage.getItem("todos");
  return todos ? JSON.parse(todos) : [];
};

const addToDo = () => {
  const todos = getToDo();
  const todo = (document.getElementById("addNew") as HTMLInputElement).value;
  todos[todos.length] = todo;
  localStorage.setItem("todos", JSON.stringify(todos));
};

const updateToDo = () => {
  localStorage.setItem("todos", JSON.stringify(todos));
  window.location.reload();
};

let todos: string[] = [];
const showToDo = () => {
  const todos = getToDo();
  return todos;
};
todos = showToDo();

function App() {
  return (
    <>
      <Box sx={{ display: "grid", justifyContent: "center", padding: "50px" }}>
        <Box
          sx={{
            bgcolor: "white",
            width: "500px",
            margin: "8px",
            textAlign: "center",
            padding: "10px",
            borderRadius: 2,
            filter:
              "drop-shadow(0 1px 2px rgb(0 0 0 / 0.1)) drop-shadow(0 1px 1px rgb(0 0 0 / 0.06))",
          }}
        >
          <Typography variant="h3" component="div">
            To Do List
          </Typography>
        </Box>

        <Box
          component="form"
          noValidate
          autoComplete="off"
          sx={{
            display: "flex",
            bgcolor: "white",
            width: "500px",
            margin: "8px",
            padding: "10px",
            borderRadius: 2,
            filter:
              "drop-shadow(0 1px 2px rgb(0 0 0 / 0.1)) drop-shadow(0 1px 1px rgb(0 0 0 / 0.06))",
          }}
        >
          <TextField
            id="addNew"
            label="Add New"
            variant="outlined"
            size="small"
            fullWidth
            sx={{ marginRight: "8px" }}
          />
          <Button
            variant="outlined"
            onClick={() => {
              addToDo();
              window.location.reload();
            }}
          >
            Add
          </Button>
        </Box>

        <Box
          sx={{
            display: "flex",
            bgcolor: "white",
            width: "500px",
            margin: "8px",
            padding: "10px",
            borderRadius: 2,
            filter:
              "drop-shadow(0 1px 2px rgb(0 0 0 / 0.1)) drop-shadow(0 1px 1px rgb(0 0 0 / 0.06))",
          }}
        >
          <TableContainer>
            <TableBody>
              {/* Repeat Start */}
              {todos.map((todo) => (
                <TableRow
                  key={todos.indexOf(todo)}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center">
                    {todos.indexOf(todo) + 1}
                  </TableCell>
                  <TableCell sx={{ width: "100%" }} align="left">
                    {todo}
                  </TableCell>
                  <TableCell>
                    <IconButton
                      aria-label="delete"
                      onClick={() => {
                        todos.splice(todos.indexOf(todo), 1);
                        updateToDo();
                      }}
                    >
                      <DeleteIcon color="error" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
              {/* Repeat End */}
            </TableBody>
          </TableContainer>
        </Box>
      </Box>
    </>
  );
}

export default App;
