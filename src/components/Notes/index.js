// Write your code here
import {useState} from 'react'

import {v4 as uuidv4} from 'uuid'

import NoteItem from '../NoteItem'

import {
  NotesBackgroundContainer,
  NotesHeading,
  FormContainer,
  InputContainer,
  TextAreaContainer,
  AddButton,
  NotesContainer,
  NotesEmptyContainer,
  EmptyImageElement,
  EmptyNotesHeading,
  EmptyNotesDescription,
} from './styledComponents'

const Notes = () => {
  const [title, setTitle] = useState('')
  const [notes, setNotes] = useState('')
  const [note, setNote] = useState([])
  const onChangeTitle = event => {
    setTitle(event.target.value)
  }

  const onChangeNotes = event => {
    setNotes(event.target.value)
  }
  const onAddNotes = event => {
    event.preventDefault()
    const newNote = {
      id: uuidv4(),
      title,
      notes,
    }
    setNote(prevNote => [...prevNote, newNote])
    setTitle('')
    setNotes('')
  }
  return (
    <NotesBackgroundContainer>
      <NotesHeading>Notes</NotesHeading>
      <FormContainer onSubmit={onAddNotes}>
        <InputContainer
          type="text"
          placeholder="Title"
          onChange={onChangeTitle}
          value={title}
        />
        <TextAreaContainer
          rows="4"
          placeholder="Take a Note..."
          value={notes}
          onChange={onChangeNotes}
        />
        <AddButton type="submit">Add</AddButton>
      </FormContainer>
      {note.length === 0 ? (
        <NotesEmptyContainer>
          <EmptyImageElement
            src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
            alt="notes empty"
          />
          <EmptyNotesHeading>No Notes Yet</EmptyNotesHeading>
          <EmptyNotesDescription>
            Notes you add will appear here
          </EmptyNotesDescription>
        </NotesEmptyContainer>
      ) : (
        <NotesContainer>
          {note.map(eachNote => (
            <NoteItem key={eachNote.id} eachNote={eachNote} />
          ))}
        </NotesContainer>
      )}
    </NotesBackgroundContainer>
  )
}

export default Notes
