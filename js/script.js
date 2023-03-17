{
    const tasks = [];

    const addNewTasks = (newTaskContent) => {
        tasks.push({
            content: newTaskContent,
        })

        render();
    }

    const removeTask = (index) => {
        tasks.splice(index, 1);

        render();
    }

    const toggleTaskDone = (taskIndex) => {
        tasks[taskIndex].done = !tasks[taskIndex].done;
        render();
    }

    const bindEvents = () => {

        const removeButtons = document.querySelectorAll(".js-remove");

        removeButtons.forEach((removeButton, taskIndex) => {
            removeButton.addEventListener("click", () => {
                removeTask(taskIndex);
            });
        });

        const toggleDoneButtons = document.querySelectorAll(".js-done");

        toggleDoneButtons.forEach((toggleDoneButton, taskIndex) => {
            toggleDoneButton.addEventListener("click", () => {
                toggleTaskDone(taskIndex);
            });
        });

    }

    const render = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
                <li 
                    class="task__item">
                    <button class="form__buttonDone form__buttonDone--click js-done"> 
                    ${task.done ? "✔" : ""}
                    </button>
                    <span class="form__text ${task.done ? " task__decoration " : ""}">${task.content} </span>
                    <button class="js-remove form__buttonRemove">🗑</button>
                </li>
            `;
        };

        document.querySelector(".js-tasks").innerHTML = htmlString;
        bindEvents();
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const newTaskContent = document.querySelector(".js-newTask").value.trim();
        if (newTaskContent === "") {
            return;
        }
        addNewTasks(newTaskContent);
    }

    const init = () => {
        render();

        const form = document.querySelector(".js-form");

        form.addEventListener("submit", onFormSubmit)

    };

    init();
}