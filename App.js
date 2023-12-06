//first create a react element
//the empty is basically ueed to define the attribute name like classname ,ids

//react element is a normal javascript function . here 'heading' is a react element.
const heading=React.createElement("h1",{id:"heading"}, "hello world from react")
console.log(heading)

//root for where all the datas will be rendered

const root=ReactDOM.createRoot(document.getElementById('root'))

//here heading is plain javascript object and render method is responsible for convert the js object into h1 tag and
//send into the dom
//render the data
root.render(heading)