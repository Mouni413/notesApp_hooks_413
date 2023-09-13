// Write your code here
import {
  ListElementContainer,
  NoteHeading,
  NoteDescription,
} from './styledComponents'

const NoteItem = props => {
  const {eachNote} = props
  return (
    <ListElementContainer>
      <NoteHeading>{eachNote.title}</NoteHeading>
      <NoteDescription>{eachNote.notes}</NoteDescription>
    </ListElementContainer>
  )
}

export default NoteItem
