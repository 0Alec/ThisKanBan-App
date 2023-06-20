export default class KanbanAPI {
    static getItems(columnId) {
        const column = read().find(column => columnId == columnId) 

        if(!column) {
            return []
        }

        return column.items
    }

    static insertItem(columnId, content) {
        const data = read() 
        const column = data.find(column => columnId == columnId)
        const item = { 
            id: Math.floor(Math.random() * 100000),
            content
        }

        if(!column) {
            throw new Error("Column does not exist")
        }

        column.items.push(item) 
        save(data)  

        return item 
    }

    static deleteItem(itemId) {
        const data = read()  
    }
}

function read() {
    const json = localStorage.getItem("Kanban-data")

    if(!json) {
        return [
            {
                id: 1,
                items: []            
            },
            {
                id: 2,
                items: []            
            }, {
                id: 3,
                items: []            
            }, {
                id: 4,
                items: []            
            },
        ]
    }

    return JSON.parse(json)
}

function save(data) {
    localStorage.setItem("kanban-data", JSON.stringify(data))
}
