async function getJSON(jsonPath) {
    try {
        let rebuiltArray = []
        const response = await fetch(jsonPath)
        const data = await response.json()
        data.employees.forEach(employee => { //rebuild nested array(s) to pass to buildGrid() async fn
            let employeeFields = []
            for (let field in employee) {
                employeeFields.push(employee[field])
            }
            rebuiltArray.push(employeeFields)
        })
        return rebuiltArray
    } catch (error) {
        console.error(error)
    }
}

export {getJSON}