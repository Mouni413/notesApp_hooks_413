// Style your elements here
import styled from 'styled-components'

export const ListElementContainer = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 20px;
  border: 1px solid #d8d8d8;
  border-radius: 10px;
  margin-right: 10px;
  margin-top: 10px;
  width: 25vw;
  @media screen and (max-width: 768px) {
    width: 90%;
  }
`
export const NoteHeading = styled.h1`
  color: #334155;
  font-size: 24px;
  font-family: 'Roboto';
  font-weight: 500;
`

export const NoteDescription = styled.p`
  color: #475569;
  font-family: 'Roboto';
  font-size: 18px;
  line-height: 30px;
  margin-top: 0px;
`
