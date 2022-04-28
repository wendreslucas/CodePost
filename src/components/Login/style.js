import styled from 'styled-components'

export const StyleImage = styled.div`
  align-items: center;
  bottom: 0;
  cursor: pointer;
  display: flex;
  justify-content: center;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
`
export const StyleForm = styled.form`
  border: 1px solid #777777;
  height: 220px;
  width: 500px;
  -webkit-box-shadow: 9px 11px 5px -6px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 9px 11px 5px -6px rgba(0, 0, 0, 0.75);
  box-shadow: 9px 11px 5px -6px rgba(0, 0, 0, 0.75);

  .input {
    border-radius: 4px;
    border: 1px solid #777777;
    height: 28px;
    margin-left: 31px;
    padding: 6px 0 6px 11px;
    width: 444px;
  }

  .btn {
    background: black;
    border: none;
    color: white;
    cursor: pointer;
    font-size: 16px;
    font-weight: 700;
    height: 33px;
    margin-top: 30px;
    margin-left: 364px;
    width: 111px;

    &:disabled {
      background: #777777;
    }
  }
`
export const StyleModal = styled.div`
  background-color: #fff;
  position: absolute;
  border: 1px solid #000;
  box-shadow: 24px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`
