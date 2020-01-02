import * as React from 'react';

const RenderPropComponent = (props) => {
  const renderProps = {
    someProp: 'some prop',
  }

  return props.children(renderProps)
}

export class TestComponent extends React.Component {

  testClassMethod = () => {
    return (
      <div>
          Some Class Method
      </div>
    );
  }

  render() {
    return (
      <div>
        Test Component Render

        <RenderPropComponent>
            {
              this.testClassMethod
            }
        </RenderPropComponent>

        {
          /*
          <RenderPropComponent>
            {
              (props) => (
                <div>{props.someProp}</div>
              )
            }
          </RenderPropComponent>
          */
        }
      </div>
    );
  }
}

export default TestComponent;

/*
*/
