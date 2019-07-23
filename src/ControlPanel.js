import  React,{Component} from 'react';
import Counter from './Counter';

class ControlPanel extends Component{
    render(){
        return(
            <div>
                <Counter caption="first"></Counter>
                <Counter caption="second"></Counter>
                <Counter caption="third"></Counter>
                
            </div>
        );
    }
}
export default ControlPanel