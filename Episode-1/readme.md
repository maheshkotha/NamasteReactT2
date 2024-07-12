# Namaste React 

- Emmit

* Basic HTML

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Namaste React T2</title>
    </head>
    <body>
        <div id="root">
            <h1>Hello World</h1>
        </div>
    </body>
    </html>

* Inject Heading with Javascript
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Namaste React T2</title>
    </head>
    <body>
        <div id="root">
            
        </div>
        <script>
            const heading = document.createElement("h1");
            heading.innerHTML = "Hello World form Javascript";

            const root = document.getElementById('root');
            root.appendChild(heading)
        </script>
    </body>
    </html>


* Using React 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Namaste React T2</title>
    
</head>
<body>
    <div id="root">
        
    </div>
    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script>
        const heading = React.createElement('h1', {}, 'Hello World form React')
        const root = document.getElementById("root");
        ReactDOM.createRoot(root).render(heading)
    </script>
</body>
</html>



# App.js
 - React Element

 const heading = React.createElement('h1', {
    id: 'heading'
}, 'Hello World form React')

 {
     "$$typeof": Symbol("react.element")
    _owner: null
    _self: null
    _source: null
    _store: Object { … }
        validated: false
        <prototype>: Object { … }
    key: null
    props: Object { id: "heading", children: "Hello World form React" }
    ref: null
    type: "h1"
 }

 
   