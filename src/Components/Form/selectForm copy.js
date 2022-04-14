import React, {useState, Component} from 'react';

import ProjectForm from './ProjectForm';
import BlogForm from './BlogForm';

function  Demo1() {
    const [isSubmitted, setIsSubmitted] = useState(false);

//   constructor() {
//     super();
//     this.state = {
//       name: "React"
//     };
//     this.onChangeValue = this.onChangeValue.bind(this);
//   }

  const onChangeValue = (e) => {
    console.log(e.target.value);

    if ( e.target.value == "Male"){
        setIsSubmitted(true)
    }
    // else{
    //     <ProjectForm/>
    // }
  };


    return (
        
      <div onChange={this.onChangeValue}>
        <input type="radio" value="Male" name="gender" /> Male
        <input type="radio" value="Female" name="gender" /> Female
        <input type="radio" value="Other" name="gender" /> Other

        {isSubmitted ? <ProjectForm/> : <BlogForm/>}

      </div>
    );

}

export default Demo1;