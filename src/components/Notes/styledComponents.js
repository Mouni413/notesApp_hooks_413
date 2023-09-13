// Style your elements here
import styled from 'styled-components'

export const NotesBackgroundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 30px;
`
export const NotesHeading = styled.h1`
  color: #4c63b6;
  font-family: 'Bree Serif';
  font-size: 40px;
  font-weight: 500;
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 30px;
  padding: 20px;
  box-shadow: 1px 1px 2px 2px #d8d8d8;
  width: 80vw;
`

export const InputContainer = styled.input`
  height: 30px;
  width: 100%;
  border-width: 0px;
  outline: none;
  background-color: transparent;
  color: #475569;
  font-family: 'Roboto';
  font-size: 15px;
`

export const TextAreaContainer = styled.textarea`
  width: 100%;
  border-width: 0px;
  outline: none;
  background-color: transparent;
  color: #475569;
  font-family: 'Roboto';
  font-size: 15px;
  margin-top: 10px;
`

export const AddButton = styled.button`
  background-color: #4c63b6;
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 15px;
  border-width: 0px;
  align-self: flex-end;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 12px;
  padding-right: 12px;
  margin-top: 10px;
  margin-right: 10px;
  border-radius: 4px;
  cursor: pointer;
`

export const NotesContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  list-style-type: none;
  padding-left: 0px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    list-style-type: none;
    width: 80vw;
  }
`
export const NotesEmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`

export const EmptyImageElement = styled.img`
  width: 100px;
`

export const EmptyNotesHeading = styled.h1`
  color: #1e293b;
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: 600;
`

export const EmptyNotesDescription = styled.p`
  color: #334155;
  font-size: 15x;
  font-family: 'Roboto';
  margin-top: 0px;
`
