import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

//const heading = React.createElement('h1', {className:"heading"}, "hello react");
//     const parent = React.createElement('div', {className:"parent"},
//     [React.createElement('div', {className:"child1"},
//     [React.createElement('h1', {}, "I am h1 tag"),
//     React.createElement('h2', {}, "I am h2 tag")
//     ]),
//     React.createElement('div', {className:"child2"},
//     [React.createElement('h1', {}, "I am h1 tag"),
//     React.createElement('h2', {}, "I am h2 tag")
//     ])
// ])

//jsx
//     const jsxHeading = <h1 className='heading'>jsx heading</h1>

//     //react functional component

//     const HeadingComponent2 = ()=> <h1>hello kj1</h1>

//     const HeadingComponent3 = ()=>(
//     <h1>hello kj2</h1>
//      )

//      const elem = <h4>React element</h4>
//      const title = (
//         <div>
//         {elem}
//         <h5>js variable</h5>
//         </div>
//      )
//     const HeadingComponent = ()=>{
//         console.log('Heading Component')
//         return(
//         <div>
//             {title}
//          <h1>Namaste react from functional component</h1>
//         <HeadingComponent2/>
//         <HeadingComponent3/>
//         </div>
//         )
//     }

//   //  console.log(parent)
       const root = ReactDOM.createRoot(document.getElementById('root'));
//         //root.render(jsxHeading)
       root.render(<App/>)
