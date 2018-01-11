import React from 'react'

export class Footer extends React.Component{

  render(){
    const style = {
      marginTop: '15vh',
      marginBottom: '5vh',
      color: '#AAA',
      fontSize: '.8em'

    }

    return(
      <div style={style}>
        This site is just for fun and nothing serious, but I hope you enjoyed it.
      </div>
    )
  }
}
