
import {MdDeleteForever} from 'react-icons/md'

function Note({id,text,date,handleDeleteNote}) {


  return (
    <div className='note'>
        <span>{text}</span>
        <div className="note-Footer">
            <small>{date}</small>
            <MdDeleteForever onClick={() => handleDeleteNote(id)} className="delete-icons" size='1.3rem'/>
        </div>
      
    </div>
  )
}

export default Note;
