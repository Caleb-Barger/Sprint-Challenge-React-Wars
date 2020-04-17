# Answers

1. What is React JS and what problems does it solve? Support your answer with concepts introduced in class and from your personal research on the web.

React JS is a JavaScript library that aims to make building out UI's very simple. React accomplishes this by using a component based system that allows
developers to resuse code and pass data through the application. React does not reload a webpage, and handles "dom surgery for you" making it great for single page applications.

1. Describe component state.

Component state can be described as setting aside data that you know will change. By loading this data into component state you now control when, a component will be re-rendered on the page. For example a search query.... When passed down into another component that updates our search variable via the setSearch slice of state, the act of updating the search was enough for react to notice that change and re-render the page with newer data possibly, based off of the search query. 

1. Describe props.

props is essentially an object that we pass into a component. It is a collection of all the things that we want to be inherited from our parent
component down to the child. We can even pass other componetns as props!

1. What are side effects, and how do you sync effects in a React component to changes of certain state or props?

Side effects are unintended re-renders of a component because something has changed. We can sync side effects using the useEffect hook, which takes
in a callback function that handles whatever it is we want to do and a dependency array. The array keeps track of a slice of state or multiple slices of
state that we are watching and if those change then we get to run the callback function. (Also if the dependcy array is empty than whatever is in useEffect only happens once).
