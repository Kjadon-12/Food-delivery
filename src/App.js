import React , { Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter , RouterProvider, Outlet} from "react-router-dom";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestroMenu from "./components/RestroMenu";


const Grocery = React.lazy(()=> import("./components/Grocery"))


const About = React.lazy(()=> import("./components/About"))


const App = () => {
  return (
    <>
      <Header />
      <Outlet/>
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

//routing

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
         path: "/",
         element: <Body/>
      },
      {
        path: "/about",
        element: (<Suspense fallback={<h1>loading screen...</h1>}><About/></Suspense>),
      },
      {
        path: "/contact-us",
        element : <Contact/>
      },
      {
        path: "/grocery",
        element : (<Suspense fallback={<h1>loading screen...</h1>}><Grocery/></Suspense>),
      },
      {
        path: "/restro/:restroId",
        element : <RestroMenu/>
      },
      
    ],
    errorElement: <Error/>
  },
  // {
  //   path: "/about",
  //   element: <About/>
  // },
  // {
  //   path: "/contact-us",
  //   element : <Contact/>
  // }
])
       const root = ReactDOM.createRoot(document.getElementById('root'));
//         //root.render(jsxHeading)
       root.render(<RouterProvider router={appRouter}/>)
