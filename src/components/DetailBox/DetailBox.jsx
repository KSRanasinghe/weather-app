import './DetailBox.css'

function DetailBox(props) {
  return (
    <>
      <div className='detail-box'>
        {props.children}
        <div>
          <h3 className='value-tag'>{props.value}</h3>
          <p className='name-tag'>{props.name}</p>
        </div>
      </div>
    </>
  )
}

export default DetailBox