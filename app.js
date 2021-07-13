const itemAdd = document.getElementById("item-add")
const list = document.querySelector(".list-of-items")
const btnAdd = document.getElementById("btn-add")
const alert = document.getElementById("alert")
const listItem = document.querySelectorAll(".list-item")
const completedItems = document.querySelector(".completed")


btnAdd.addEventListener("click", () => {
    if (itemAdd.value.length == 0) {
        alert.textContent = "Can't be empty"
    } else {
        alert.textContent = ""
        let holder = itemAdd.value

        let child = document.createElement("li")
        list.appendChild(child).classList.add("list-item")
        child.textContent = holder

        const btnItem = document.createElement("button")
        child.appendChild(btnItem).classList.add("close-btn")
        btnItem.addEventListener("click", markCompleted)

        itemAdd.value = ""
    }
})

function markCompleted() {
    let childToRemove = this.parentNode
    let removedChild = list.removeChild(childToRemove)

    let completedTask = document.createElement("li")
    completedItems.appendChild(completedTask).classList.add("list-item")
    completedTask.textContent = removedChild.textContent
}