import styled from 'styled-components'

export const Container = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`

export const Navigation = styled.div` 
.navigation {
    position: relative;
    width: 540px;
    height: 120px;
    box-shadow: 25px 25px 25px rgba(0,0,0,0.25), 
    10px 10px 70px rgba(0,0,0,0.25),
    inset 5px 5px 10px rgba(0,0,0,0.5),
    inset 5px 5px 20px rgba(255,255,255,0.2),
    inset -5px -5px 15px rgba(0,0,0,0.75);
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.navigation li {
    position: relative;
    list-style: none;
    justify-content: center;
    flex-direction: column;
    text-decoration: none;
    padding: 20px;
}

.navigation li a .icon {
    position: absolute;
    font-size: 1.75em;
    width: 80px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    border-radius: 50%;

}

.navigation li.active a .icon {
    background: #29fd53;
    color: white;
    transform: translateY(-55px);
    box-shadow: 5px 5px 7px rgba(0,0,0,0.25),
    inset 2px 2px 3px rgba(255,255,255,0.25),
    inset -3px -3px 5px rgba(0,0,0,0.5)
}

.navigation li a .icon:before {
    content: '';
    position: absolute;
    inset: 10px;
    background: #2f363e;
    box-shadow: 5px 5px 5px rgba(0,0,0,0.25),
    inset 2px 2px 3px rgba(255,255,255,0.25),
    inset -3px -3px 5px rgba(0,0,0,0.5);
    transform: scale(0);
    transition: 0.5
    
}

  
`
