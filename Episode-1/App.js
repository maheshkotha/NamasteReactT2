const heading = React.createElement('h1', {
    id: 'heading'
}, 'Hello World form React')


console.log(heading.props.children, heading.props.id, heading);

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(heading)