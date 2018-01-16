import React from 'react'

export class Footer extends React.Component{

  render(){
    const style = {
      marginTop: '30vh',
      marginBottom: '5vh',
      color: '#BBB',
      fontSize: '.8em',
      letterSpacing: '.5px'

    }

    return(
      <div className='serif' style={style}>
        This site is just for fun and nothing serious, but I hope you enjoyed it.
      </div>
    )
  }
}
