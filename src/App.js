
import './App.css';
import Corousel from './imageCorousel.js/Corousel';
import Scroll from './infiniteScroller.js/Scroll';
import InterviewComponent from './interview.js/InterviewComponent';
import Form from './multiStepForm.js/Form';
import Permission from './Permissions.js/Permission';
import ShoppingComp from './shoppingList.js/ShoppingComp';
import StarRatingComponent from './starRating.js/StarRatingComponent';
import Todo from './todoList.js/Todo';
import InputComponent from './twoFactorInput.js/InputComponent';
import Counter from './undoableCounter.js/Counter';

function App() {
  return (
    <div className="App">
    {/* <Counter/> */}
    {/* <ShoppingComp/> */}
    {/* <Corousel/> */}
    {/* <InputComponent/> */}
    {/* <Permission/> */}
    {/* <Form/> */}
    {/* <StarRatingComponent/> */}
    {/* <Scroll/> */}
    {/* <InterviewComponent/> */}
    <Todo/>
    </div>
  );
}

export default App;
