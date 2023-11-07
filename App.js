        //const heading = React.createElement('h1', {className:"heading"}, "hello react");
        const parent = React.createElement('div', {className:"parent"}, 
        [React.createElement('div', {className:"child1"},
        [React.createElement('h1', {}, "I am h1 tag"),
        React.createElement('h2', {}, "I am h2 tag")
        ]),
        React.createElement('div', {className:"child2"},
        [React.createElement('h1', {}, "I am h1 tag"),
        React.createElement('h2', {}, "I am h2 tag")
        ])
    ])
        console.log(parent)
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(parent)